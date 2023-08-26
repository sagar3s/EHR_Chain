import web3 from './web3';
import Patient from './build/PatientFile/PatientContract.json';

const instance = new web3.eth.Contract(
  Patient.abi,
  '0xe87d4a3bdF419a079f760F4C828b2AF0d1244c55'
);
export default instance;
