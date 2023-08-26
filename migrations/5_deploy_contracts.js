const NetworkFactory = artifacts.require("NetworkFactory");

module.exports = function (deployer) {
  deployer.deploy(NetworkFactory);
};