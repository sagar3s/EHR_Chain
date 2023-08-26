import web3 from './web3';
import Doctor from './build/PatientFile/DoctorContract.json';

const instance = new web3.eth.Contract(
  Doctor.abi,
  '0x9E4E9Ef07aA76B43A25Eee48C1F8970eBC214221'
);

export default instance;
