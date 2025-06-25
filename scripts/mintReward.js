async function main() {
  const [user] = await ethers.getSigners();
  const identityAddr = "0x964f9eE660416a6A70c77Eae4cDcF331a18d8723";  // 部署後填入
  const rewardAddr   = "0x1E129567ce4B43DecD71410cebA77a3CD3dE0A33"; // 部署後填入

  const Identity = await ethers.getContractAt("ERC4671Identity", identityAddr);
  const Reward   = await ethers.getContractAt("ERC20Reward", rewardAddr);

  // 1. 鑄造身份 NFT
  const tx1 = await Identity.connect(user).mint();
  await tx1.wait();
  console.log("Identity NFT minted for", user.address);

  // 2. 領取對應 ERC20 獎勵
  const tx2 = await Reward.connect(user).claimReward();
  await tx2.wait();
  console.log("ERC20 reward claimed for", user.address);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
