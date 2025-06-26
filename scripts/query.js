async function main() {
  const [user] = await ethers.getSigners();
  const identityAddr = "0x964f9eE660416a6A70c77Eae4cDcF331a18d8723";
  const rewardAddr   = "0x1E129567ce4B43DecD71410cebA77a3CD3dE0A33";

  const Identity = await ethers.getContractAt("ERC4671Identity", identityAddr);
  const Reward   = await ethers.getContractAt("ERC20Reward", rewardAddr);

  console.log("=== 合約狀態查詢 ===");
  console.log("用戶地址:", user.address);
  
  // 查詢身分NFT餘額
  const nftBalance = await Identity.balanceOf(user.address);
  console.log("身分NFT持有數量:", nftBalance.toString());
  
  // 查詢ERC20餘額
  const tokenBalance = await Reward.balanceOf(user.address);
  console.log("ERC20獎勵餘額:", ethers.utils.formatEther(tokenBalance));
  
  // 查詢合約名稱
  const nftName = await Identity.name();
  const tokenName = await Reward.name();
  console.log("身分NFT名稱:", nftName);
  console.log("獎勵Token名稱:", tokenName);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
