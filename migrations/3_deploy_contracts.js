const CentralContract = artifacts.require("CentralContract");

module.exports = function (deployer) {
  deployer.deploy(CentralContract);
};