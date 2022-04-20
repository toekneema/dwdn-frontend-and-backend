var DWDN = artifacts.require("./DWDN.sol");

contract('DWDN_test_exceptions', function(accounts){
  var instance_1;
  var mainAccount_1   = accounts[0];
  var mainAccount_2   = accounts[1];
  var mainAccount_3   = accounts[2];
  var mainAccount_4   = accounts[3];
  var mainAccount_5   = accounts[4];
  var mainAccount_6   = accounts[5];
  var donationValue_1 = "5";

  it("Donation without users in the network - exception",function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.makeADonation({from:mainAccount_1,value:web3.utils.toWei(donationValue_1,"ether")});
    }).then(assert.fail).catch(function(error) {
      assert(true);
    });
  });


  it("User not part of the network request - exception", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.requestUserToJoinTheNetwork(mainAccount_2,{from:mainAccount_2});
    }).then(assert.fail).catch(function(error) {
      assert(true);
    });
  });


  it("Add same user twice in using the same parent - exception", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.requestUserToJoinTheNetwork(mainAccount_2,{from:mainAccount_1});
    }).then(function() {
      return instance_1.requestUserToJoinTheNetwork(mainAccount_2,{from:mainAccount_1});
    }).then(assert.fail).catch(function(error) {
      assert(true);
    });
  });

  it("Not owner try to change gasValue - exception", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.changeGasValue(1,{from:mainAccount_2});
    }).then(assert.fail).catch(function(error) {
      assert(true);
    });
  });

  it("Not owner try to change changeMaxMemory - exception", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.changeMaxMemory(1,{from:mainAccount_2});
    }).then(assert.fail).catch(function(error) {
      assert(true);
    });
  });


  it("Add accounts to the maximum value - exception", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.requestUserToJoinTheNetwork(mainAccount_2,{from:mainAccount_1});
    }).then(function() {
      return instance_1.getVariables(mainAccount_2,{from:mainAccount_2});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_2 = 1");
      assert.equal(data[1],1,"_sizeOfConnectedUsersByAddress mainAccount_2 = 1");
      return instance_1.getVariables(mainAccount_1,{from:mainAccount_1});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_1 = 1");
      assert.equal(data[1],2,"_sizeOfConnectedUsersByAddress mainAccount_1 = 2");

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

      return instance_1.requestUserToJoinTheNetwork(mainAccount_4,{from:mainAccount_1});
    }).then(function() {
      return instance_1.getVariables(mainAccount_4,{from:mainAccount_4});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_4 = 1");
      assert.equal(data[1],1,"_sizeOfConnectedUsersByAddress mainAccount_4 = 1");
      return instance_1.getVariables(mainAccount_4,{from:mainAccount_1});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_1 = 1");
      assert.equal(data[1],4,"_sizeOfConnectedUsersByAddress mainAccount_1 = 4");

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

      return instance_1.requestUserToJoinTheNetwork(mainAccount_6,{from:mainAccount_1});
    }).then(assert.fail).catch(function(error) {
      assert(true);

    });
  });





});
