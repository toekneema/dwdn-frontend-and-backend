// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// Decentralized Wealth Distribution Network
contract DWDN {
    address _owner;

    uint256 public _maxWeiDistribution;
    uint256 public _minWeiDistribution;
    uint256 public _maxConnections;
    uint256 public _maxMemoryArray;
    uint256 public _gasTransfer;

    bool public _lock;

    struct Network {
        mapping(address => uint256) _connectedUsersByAddress;
        mapping(address => uint256) _blackList;
        address[] _addresses;
        uint256 _sizeOfConnectedUsersByAddress;
    }

    mapping(address => Network) public _network;

    event Print(uint256 i);
    event Print(string s);
    event Print(string s, uint256 i);

    constructor() {
        _owner = msg.sender;
        _maxConnections = 4;
        _maxWeiDistribution = (10**15) * 2;
        _minWeiDistribution = 0;
        _maxMemoryArray = 100;
        _lock = false;
        _gasTransfer = 3000;

        //emit Print(_maxWeiDistribution);

        _network[_owner]._connectedUsersByAddress[_owner] = 1;
        _network[_owner]._sizeOfConnectedUsersByAddress++;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Only the owner can call this function");
        _;
    }

    function getParameters()
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        return (
            _maxConnections,
            _maxWeiDistribution,
            _minWeiDistribution,
            _maxMemoryArray,
            _gasTransfer
        );
    }

    function getVariables(address _address)
        public
        view
        returns (uint256, uint256)
    {
        return (
            _network[msg.sender]._connectedUsersByAddress[_address],
            _network[msg.sender]._sizeOfConnectedUsersByAddress
        );
    }

    function getAddresses() public view returns (address[] memory) {
        return (_network[msg.sender]._addresses);
    }

    function getBlackListAddresses() public view returns (address[] memory) {
        address[] memory _addressesOnBlackList = new address[](_maxConnections);
        uint256 j = 0;

        for (uint256 i = 0; i < _network[msg.sender]._addresses.length; ++i) {
            if (
                _network[msg.sender]._blackList[
                    _network[msg.sender]._addresses[i]
                ] == 1
            ) {
                _addressesOnBlackList[j] = _network[msg.sender]._addresses[i];
                j++;
            }
        }

        return _addressesOnBlackList;
    }

    function changeGasValue(uint256 gas) public onlyOwner {
        _gasTransfer = gas;
    }

    function changeMaxMemory(uint256 maxMemory) public onlyOwner {
        _maxMemoryArray = maxMemory;
    }

    function max(uint256 a, uint256 b) public pure returns (uint256) {
        return a >= b ? a : b;
    }

    function min(uint256 a, uint256 b) public pure returns (uint256) {
        return a <= b ? a : b;
    }

    function arrayHasElement(address[] memory arr, address element)
        public
        pure
        returns (bool)
    {
        for (uint256 i = 0; i < arr.length; ++i) {
            if (arr[i] == element) {
                return true;
            }
            if (arr[i] == address(0)) {
                return false;
            }
        }
        return false;
    }

    function makeADonation() public payable {
        require(!_lock, "Reentrancy detected!");
        // require(_network[msg.sender]._sizeOfConnectedUsersByAddress > _maxConnections, "The user has to add more connections to make a donation");

        _lock = true;

        uint256 _remainingAmount = msg.value;
        uint256 _donationAmount;
        uint256 _currentChildLocation = 0;
        uint256 _maxChildLocation = 0;

        address[] memory _childs = new address[](_maxMemoryArray);

        _childs[0] = msg.sender;

        while (
            _childs[_currentChildLocation] != address(0) &&
            _maxChildLocation < _maxMemoryArray
        ) {
            address _parent = _childs[_currentChildLocation];

            for (
                uint256 i = 0;
                i < _network[_childs[_currentChildLocation]]._addresses.length;
                ++i
            ) {
                address _child = _network[_parent]._addresses[i];

                if (_network[_parent]._blackList[_child] == 1) {
                    continue;
                }
                if (arrayHasElement(_childs, _child)) {
                    continue;
                }
                if (_remainingAmount < _minWeiDistribution) {
                    break;
                }

                _donationAmount = max(
                    min(_remainingAmount, _maxWeiDistribution),
                    _minWeiDistribution
                );
                _remainingAmount = _remainingAmount - _donationAmount;

                (bool success, ) = _child.call{
                    value: _donationAmount,
                    gas: _gasTransfer
                }("");
                require(success, "Transfer failed");

                _maxChildLocation++;

                if (_maxChildLocation >= _maxMemoryArray) {
                    break;
                }

                _childs[_maxChildLocation] = _child;
            }

            _currentChildLocation++;
        }

        if (_remainingAmount >= _minWeiDistribution) {
            (bool success, ) = msg.sender.call{
                value: _remainingAmount,
                gas: _gasTransfer
            }("");
            require(success, "Transfer failed");
        }

        _lock = false;
    }

    function addUserToBlacklist(address _address) public {
        _network[msg.sender]._blackList[_address] = 1;
    }

    function requestUserToJoinTheNetwork(address _address) public {
        require(
            _network[msg.sender]._connectedUsersByAddress[msg.sender] == 1,
            "The user is not part of the network"
        );
        require(
            _network[msg.sender]._connectedUsersByAddress[_address] == 0,
            "The user is already connected to this parent"
        );
        require(
            _network[msg.sender]._sizeOfConnectedUsersByAddress <=
                _maxConnections,
            "The user reached the maximum number of connections"
        );

        if (_network[_address]._connectedUsersByAddress[_address] == 0) {
            _network[_address]._connectedUsersByAddress[_address] = 1;
            _network[_address]._sizeOfConnectedUsersByAddress++;
        }

        _network[msg.sender]._connectedUsersByAddress[_address] = 1;
        _network[msg.sender]._addresses.push(_address);
        _network[msg.sender]._sizeOfConnectedUsersByAddress++;
    }

    function destroy() public onlyOwner {
        selfdestruct(payable(_owner));
    }
}
