// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ResearchCoin is ERC20, ChainlinkClient {
    using Chainlink for Chainlink.Request;
    
    address public oracle;
    bytes32 public jobId;
    uint256 public fee;
    
    struct RequestInfo {
        string doi;
        address author;
    }
    mapping(bytes32 => RequestInfo) public requests;
    
    constructor() ERC20("ResearchCoin", "RSC") {
        setChainlinkToken(0x0Fd9e8d3aF1aaee056EB9e802c3A762a667b1904); // Amoy LINK
        setChainlinkOracle(0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD); // Amoy Oracle
        jobId = "ca98366cc7314957b8c012c72f05aeeb";
        fee = 0.1 * 10**18; // 0.1 LINK
    }

    function requestCitationCount(string memory doi, address author) public {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );
        req.add("get", string(abi.encodePacked("https://api.crossref.org/works/", doi)));
        req.add("path", "message.items.0.reference-count");
        
        bytes32 requestId = sendChainlinkRequest(req, fee);
        requests[requestId] = RequestInfo(doi, author);
    }

    function fulfill(bytes32 _requestId, uint256 _citationCount) public recordChainlinkFulfillment(_requestId) {
        RequestInfo memory request = requests[_requestId];
        _mint(request.author, _citationCount * 10**18);
        delete requests[_requestId];
    }
}