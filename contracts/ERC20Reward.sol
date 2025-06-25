// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IERC4671 {
    function balanceOf(address owner) external view returns (uint256);
}

/// @title 根據 ERC4671 身分 NFT 發放 ERC20 獎勵
contract ERC20Reward is ERC20 {
    IERC4671 public identityContract;

    constructor(address _identity) ERC20("Twin3Reward", "T3RW") {
        identityContract = IERC4671(_identity);
    }

    /// @notice 根據持有的身分 NFT 數量領取等量 ERC20 獎勵
    function claimReward() external {
        uint256 amount = identityContract.balanceOf(msg.sender);
        require(amount > 0, "No identity token");
        _mint(msg.sender, amount * 1 ether);
    }
}
