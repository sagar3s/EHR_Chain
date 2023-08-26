import web3 from './web3';
import NetworkFactory from './build/DoctorNetwork/NetworkFactory.json';

const factory = new web3.eth.Contract(
  NetworkFactory.abi,
  '0x3A7392462C6Dc0d57097847667Ec093559c1d9d0'
);

export default factory;
