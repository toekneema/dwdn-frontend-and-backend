var DWDN = artifacts.require("./DWDN.sol");

contract('DWDN_test_scenario7', function(accounts){
  var instance_1;
  var mainAccount_1   = accounts[0];
  var mainAccount_2   = accounts[1];
  var mainAccount_3   = accounts[2];
  var mainAccount_4   = accounts[3];
  var mainAccount_5   = accounts[4];
  var mainAccount_6   = accounts[5];
  var donationValue_1 = "5";


  it("Add one account to the network connected to account[0] - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.requestUserToJoinTheNetwork(mainAccount_2,{from:mainAccount_1});
    }).then(function() {
      return instance_1.getVariables(mainAccount_2,{from:mainAccount_2});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_2 = 1");
      assert.equal(data[1],1,"_sizeOfConnectedUsersByAddress mainAccount_2 = 1");
      return instance_1.getVariables(mainAccount_2,{from:mainAccount_1});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_1 = 1");
      assert.equal(data[1],2,"_sizeOfConnectedUsersByAddress mainAccount_1 = 2");
    });
  });

  it("Add another account to the network connected to account[0] - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.requestUserToJoinTheNetwork(mainAccount_3,{from:mainAccount_1});
    }).then(function() {
      return instance_1.getVariables(mainAccount_3,{from:mainAccount_3});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_3 = 1");
      assert.equal(data[1],1,"_sizeOfConnectedUsersByAddress mainAccount_3 = 1");
      return instance_1.getVariables(mainAccount_3,{from:mainAccount_1});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_1 = 1");
      assert.equal(data[1],3,"_sizeOfConnectedUsersByAddress mainAccount_1 = 3");
    });
  });


  it("Add another account to the network connected to account[0] - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.requestUserToJoinTheNetwork(mainAccount_4,{from:mainAccount_1});
    }).then(function() {
      return instance_1.getVariables(mainAccount_4,{from:mainAccount_4});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_4 = 1");
      assert.equal(data[1],1,"_sizeOfConnectedUsersByAddress mainAccount_4 = 1");
      return instance_1.getVariables(mainAccount_3,{from:mainAccount_1});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_1 = 1");
      assert.equal(data[1],4,"_sizeOfConnectedUsersByAddress mainAccount_1 = 4");
    });
  });

  it("Check function getAddresses() - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.getAddresses({from:mainAccount_1});
    }).then(function(data) {
      assert.equal(data[0],accounts[1],"function getAddresses() Ok for accounts[1]");
      assert.equal(data[1],accounts[2],"function getAddresses() Ok for accounts[2]");
      assert.equal(data[2],accounts[3],"function getAddresses() Ok for accounts[3]");
    });
  });



  it("Add another account to the network connected to account[0] - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.requestUserToJoinTheNetwork(mainAccount_5,{from:mainAccount_1});
    }).then(function() {
      return instance_1.getVariables(mainAccount_5,{from:mainAccount_5});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_5 = 1");
      assert.equal(data[1],1,"_sizeOfConnectedUsersByAddress mainAccount_5 = 1");
      return instance_1.getVariables(mainAccount_5,{from:mainAccount_1});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_1 = 1");
      assert.equal(data[1],5,"_sizeOfConnectedUsersByAddress mainAccount_1 = 5");
    });
  });

  it("Check function getAddresses() - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.getAddresses({from:mainAccount_1});
    }).then(function(data) {
      assert.equal(data[0],accounts[1],"function getAddresses() Ok for accounts[1]");
      assert.equal(data[1],accounts[2],"function getAddresses() Ok for accounts[2]");
      assert.equal(data[2],accounts[3],"function getAddresses() Ok for accounts[3]");
      assert.equal(data[3],accounts[4],"function getAddresses() Ok for accounts[4]");
    });
  });

  it("Check function getBlackListAddresses() - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.getBlackListAddresses({from:mainAccount_1});
    }).then(function(data) {
      assert.equal(data[0],"0x0000000000000000000000000000000000000000","function getAddresses() Ok for accounts[1]");
      assert.equal(data[1],"0x0000000000000000000000000000000000000000","function getAddresses() Ok for accounts[2]");
      assert.equal(data[2],"0x0000000000000000000000000000000000000000","function getAddresses() Ok for accounts[3]");
      assert.equal(data[3],"0x0000000000000000000000000000000000000000","function getAddresses() Ok for accounts[4]");
    });
  });


  it("Add user into the blacklist - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.addUserToBlacklist(mainAccount_2,{from:mainAccount_1});
    }).then(function() {});
  });

  it("Add user into the blacklist - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.addUserToBlacklist(mainAccount_3,{from:mainAccount_1});
    }).then(function() {});
  });

  it("Check function getBlackListAddresses() - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.getBlackListAddresses({from:mainAccount_1});
    }).then(function(data) {
      assert.equal(data[0],accounts[1],"function getAddresses() Ok for accounts[1]");
      assert.equal(data[1],accounts[2],"function getAddresses() Ok for accounts[2]");
      assert.equal(data[2],"0x0000000000000000000000000000000000000000","function getAddresses() Ok for accounts[3]");
      assert.equal(data[3],"0x0000000000000000000000000000000000000000","function getAddresses() Ok for accounts[4]");
    });
  });

  it("Add user into the blacklist - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.addUserToBlacklist(mainAccount_4,{from:mainAccount_1});
    }).then(function() {});
  });

  it("Add user into the blacklist - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.addUserToBlacklist(mainAccount_5,{from:mainAccount_1});
    }).then(function() {});
  });

  it("Check function getBlackListAddresses() - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.getBlackListAddresses({from:mainAccount_1});
    }).then(function(data) {
      assert.equal(data[0],accounts[1],"function getAddresses() Ok for accounts[1]");
      assert.equal(data[1],accounts[2],"function getAddresses() Ok for accounts[2]");
      assert.equal(data[2],accounts[3],"function getAddresses() Ok for accounts[3]");
      assert.equal(data[3],accounts[4],"function getAddresses() Ok for accounts[4]");
    });
  });

});
