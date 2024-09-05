const MeidicalHistory = artifacts.require("MedicalHistory");
module.exports = async function(deployer) {
    await deployer.deploy(MeidicalHistory);
}