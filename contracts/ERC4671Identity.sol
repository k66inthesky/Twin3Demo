// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/// @title ERC-4671‐style Identity Token
contract ERC4671Identity is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _idCounter;

    constructor() ERC721("Twin3Identity", "T3ID") {}

    /// @notice 任何地址皆可鑄造自身身分 NFT，一人一枚
    function mint() external {
        require(balanceOf(msg.sender) == 0, "Already minted");
        uint256 tokenId = _idCounter.current();
        _idCounter.increment();
        _safeMint(msg.sender, tokenId);
    }
}
