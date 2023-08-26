const DoctorContract = artifacts.require("DoctorContract");

module.exports = function (deployer) {
  deployer.deploy(DoctorContract);
};