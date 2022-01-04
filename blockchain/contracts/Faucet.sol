// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract Faucet {
	address private owner;
	uint private transferAmount = 0.001 ether;

	mapping(address => uint256) private readyTime;

	event Donate(address indexed from, uint amount);
	event Withdrawal(address indexed to);

	constructor() payable {
		owner = msg.sender;
	}

	function getOwner() public view returns(address) {
		return owner;
	}

	function getAmount() public view returns(uint) {
		return transferAmount;
	}

	function getReadTime(address user) public view returns(uint256) {
		return readyTime[user];
	}

	function setOwner(address _owner) public {
		require(msg.sender == owner);
		owner = _owner;
	}

	function setAmount(uint _transferAmount) public {
		require(msg.sender == owner);
		transferAmount = _transferAmount;
	}

	receive() external payable {
			emit Donate(msg.sender, msg.value); 
	} 

	function sendTokens() public payable {
		require(block.timestamp > readyTime[msg.sender], "You are too greedy!");
		require(address(this).balance >= transferAmount, "Not enough ether in the faucet, please donate UWU");

		(bool success, bytes memory returnData) = msg.sender.call{value: transferAmount}("");
		require(success, "Transfer failed.");

		readyTime[msg.sender] = readyTime[msg.sender] + 1 days;
		emit Withdrawal(msg.sender);
	}
}