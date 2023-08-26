import web3 from './web3';
import admin from './build/PatientFile/CentralContract.json';

const instance = new web3.eth.Contract(
  admin.abi,
  '0xd05236E00B1ABdC7a6a437c2DA51434A5d8ED7E7'
);

export default instance;
