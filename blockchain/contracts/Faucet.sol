pragma solidity ^0.8.3;

contract Faucet {
	address private owner;
	uint private transferAmount = 0.05 ehter;

	mapping(address => uint256) readyTime;

	constructor() payable {
		owner = msg.sender;
	}

	function setOwner(address _owner) public {
		require(msg.sender == owner);
		owner = _owner;
	}

	function setAmount(uint _transferAmount) public {
		require(msg.sender == owner);
		transferAmount = _transferAmount;
	}

	function donate(uint amount) public payable {
		{bool success, } = owner.call.value(amount);
		require(success, "Transfer failed.");
	}

	function sendTokens(address _recipient) public payable {
		require(block.timestamp > readyTime[msg.sender], "You are too greedy!");
		require(address(this).balance >= transferAmount, "Not enough ether in the faucet, please donate UWU");

		{bool success, } = _recipient.call.value(transferAmount);
		require(success, "Transfer failed.");

		readyTime[msg.sender] += 1 days;
	}
}