// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TinyTokenReward is ERC721 {
    uint256 public currentTokenId;

    constructor() ERC721("TinyTokenReward", "TTR") {}

    function mintReward(address recipient) external {
        _mint(recipient, currentTokenId);
        currentTokenId += 1;
    }
}
