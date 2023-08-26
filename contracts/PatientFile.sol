//SPDX-License-Identifier:UNLICIENSED
pragma solidity 0.8.9;
pragma experimental ABIEncoderV2;

//Central Contract
contract CentralContract {

    address public manager;
    mapping(address => bool) internal isAdmin;
    event ManagerChanged(address indexed _from,address indexed _to);
    event AdminAdded(address indexed Admin_Address);
    event AdminRemoved(address indexed Admin_Address);

    constructor()  {
        manager = msg.sender;
        isAdmin[msg.sender] = true;
    }

    modifier onlyManager(){
        require(manager == msg.sender, "Only Manager has permission to do that action.");
        _;
    }

    modifier onlyAdmin() {
        require(isAdmin[msg.sender] == true, "Only Admin has permission to do that action.");
        _;
    } 

    function setManager(address _addr) public onlyManager returns(bool success){
        require(msg.sender!= _addr,"Already manager.");
        manager = _addr;
        emit ManagerChanged(msg.sender, _addr);
        return true;
    }

     function addAdmin(address _address) public onlyManager returns(bool success){
        require(!isAdmin[_address],"User is already a admin!!!");
        isAdmin[_address]=true;
        emit AdminAdded(_address);
        return true;
    }
    function removeAdmin(address _address) public onlyManager returns(bool success){
        require(_address!=manager,"Can't remove owner from admin");
        require(isAdmin[_address],"User not admin already!!!");
        isAdmin[_address]=false;
        emit AdminRemoved(_address);
        return true;
    }


 
}


//Doctor Contract - Inherits Central
contract DoctorContract is CentralContract{
    uint256 public index;
    mapping(address => bool) internal isDoctor;

    //Doctor structure
    struct Doctor{
      uint256 id;
      string doc_name;
      string doc_contact;
      string doc_specialisation;
      string doc_address;
      address addr;
      bool isApproved;
    }
    
    mapping(address => Doctor) doctors;
    address[] public doctorList;
    

    modifier onlyDoctor(){
        require(isDoctor[msg.sender] ,"Only Doctors access it.");
        _;
    }

    

    //Function to add new doctors - done by Admin
    function addDoctor(string memory _doc_name,string memory _doc_contact,string memory _doc_specialisation,string memory _doc_address,address _doc_addr) public onlyAdmin returns(bool){
        require(!isDoctor[_doc_addr],"Already a registered Doctor.");
        doctorList.push(_doc_addr);
        index = index + 1;
        isDoctor[_doc_addr] = true;
        doctors[_doc_addr] = Doctor(index,_doc_name,_doc_contact,_doc_specialisation,_doc_address,_doc_addr,true);
        return true;
    }
    
    //Fn to get details of doctors by Id
    function getDoctorById(uint256 _id) public view returns(uint256 id,string memory _doc_name,string memory _doc_contact,string memory _doc_specialisation,string memory _doc_address,address _doc_addr,bool isVerified){
        uint256 i = 0;
        for(;i<doctorList.length;i++){
            if(doctors[doctorList[i]].id == _id){
                break;
            }
        }
        require(doctors[doctorList[i]].id == _id ,"Doctor ID doesn't exist.");
        Doctor memory temp = doctors[doctorList[i]];
        return(temp.id,temp.doc_name,temp.doc_contact,temp.doc_specialisation,temp.doc_address,temp.addr,temp.isApproved);
    }


    //Fn to get doctor details by address
    function getDoctorByAddress(address _addr) public view returns(uint256 id,string memory _doc_name,string memory _doc_contact,string memory _doc_specialisation,string memory _doc_address,address _doc_addr,bool isVerified){
        require(doctors[_addr].isApproved ,"Doctor is not approved.");
        Doctor memory temp = doctors[_addr];
        return(temp.id,temp.doc_name,temp.doc_contact,temp.doc_specialisation,temp.doc_address,temp.addr,temp.isApproved);
    }



}


//Patient Contract - Inherits Doctor
contract PatientContract is DoctorContract {
    
    //Record structure
    struct Records {
        string hospital_name;
        string reason;
        string admittedOn;
        string dischargedOn;
        string ipfs;
    }
    
    //Patient Structure
    struct Patient {
        uint256 id;
        string name;
        string phone;
        string gender;
        string dob;
        string bloodgroup;
        string allergies;
        Records[] records;
        address addr;
    }
    
    uint256 public patient_index = 0;
    bool public emergencyAccess = false;
    
    address[] private patientList;
    mapping(address => mapping(address => bool)) isAuth;
    mapping(address => Patient) patients;
    mapping(address => bool) isPatient;

    modifier onlyPatient() {    
        require(isPatient[msg.sender], "Only patients have permission to do that action.");
        _;
    }

    //Fn to add new patient - with necessary details 
    function addPatient(
        string memory _name,
        string memory _phone,
        string memory _gender,
        string memory _dob,
        string memory _bloodgroup,
        string memory _allergies
    ) public {
        require(!isPatient[msg.sender], "Patient account already exists.");
        patientList.push(msg.sender);
        patient_index = patient_index + 1;
        isPatient[msg.sender] = true;
        isAuth[msg.sender][msg.sender] = true;
        patients[msg.sender].id = patient_index;
        patients[msg.sender].name = _name;
        patients[msg.sender].phone = _phone;
        patients[msg.sender].gender = _gender;
        patients[msg.sender].dob = _dob;
        patients[msg.sender].bloodgroup = _bloodgroup;
        patients[msg.sender].allergies = _allergies;
        patients[msg.sender].addr = msg.sender;
    }
    

    function addRecord(
        address _addr,
        string memory _hname,
        string memory _reason,
        string memory _admittedOn,
        string memory _dischargedOn,
        string memory _ipfs
    ) public {
        require(isPatient[_addr], "User not registered.");
        require(isAuth[_addr][msg.sender], "No permission to add records.");
        patients[_addr].records.push(Records(_hname, _reason, _admittedOn, _dischargedOn, _ipfs));
    }

    //Fn to get patient details - only patient and authorised doctor can get it
    function getPatientDetails(address _addr) public view returns(
        string memory _name,
        string memory _phone,
        string memory _gender,
        string memory _dob,
        string memory _bloodgroup,
        string memory _allergies
    ) {
        require(isAuth[_addr][msg.sender] || emergencyAccess, "No permission to get records.");
        require(isPatient[_addr], "Patient not found at the given address.");
       
        Patient memory tmp = patients[_addr];
        return (
            tmp.name,
            tmp.phone,
            tmp.gender,
            tmp.dob,
            tmp.bloodgroup,
            tmp.allergies
        );
    }

    //Fn to get patient records - only patient and authorised doctor can get it
    function getPatientRecords(address _addr) public view returns(
        string[] memory _hname,
        string[] memory _reason,
        string[] memory _admittedOn,
        string[] memory _dischargedOn,
        string[] memory ipfs
    ) {
        require(isAuth[_addr][msg.sender] || emergencyAccess, "No permission to get records.");
        require(isPatient[_addr], "Patient not signed in to our network.");
        require(patients[_addr].records.length > 0, "Patient record doesn't exist.");

        uint256 numRecords = patients[_addr].records.length;
        _hname = new string[](numRecords);
        _reason = new string[](numRecords);
        _admittedOn = new string[](numRecords);
        _dischargedOn = new string[](numRecords);
        ipfs = new string[](numRecords);

        for (uint256 i = 0; i < numRecords; i++) {
            _hname[i] = patients[_addr].records[i].hospital_name;
            _reason[i] = patients[_addr].records[i].reason;
            _admittedOn[i] = patients[_addr].records[i].admittedOn;
            _dischargedOn[i] = patients[_addr].records[i].dischargedOn;
            ipfs[i] = patients[_addr].records[i].ipfs;
        }
    }

    // Function to toggle emergency access state
    function toggleEmergencyAccess(bool _emergencyAccess) public onlyPatient {
        emergencyAccess = _emergencyAccess;
    }
}
    
