// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract PaperNFT is ERC721 {
    mapping(uint256 => string) public dois; // tokenId → DOI

    constructor() ERC721("PaperNFT", "PNFT") {}

    function mintPaper(address author, uint256 tokenId, string memory doi) public {
        _safeMint(author, tokenId);
        dois[tokenId] = doi;
    }
}