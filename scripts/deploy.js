async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying by:", deployer.address);

  const Identity = await ethers.getContractFactory("ERC4671Identity");
  const identity = await Identity.deploy();
  await identity.deployed();
  console.log("Identity deployed at:", identity.address);

  const Reward = await ethers.getContractFactory("ERC20Reward");
  const reward = await Reward.deploy(identity.address);
  await reward.deployed();
  console.log("Reward deployed at:", reward.address);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
