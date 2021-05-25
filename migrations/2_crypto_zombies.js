const CryptoZombies = artifacts.require("CryptoZombie.sol");
module.exports = function (deployer) {
  deployer.deploy(CryptoZombies);
};
