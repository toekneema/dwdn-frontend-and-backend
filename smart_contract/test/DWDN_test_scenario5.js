var DWDN = artifacts.require("./DWDN.sol");

contract('DWDN_test_scenario5', function(accounts){
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

  it("Add another account to the network connected to account[1] - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.requestUserToJoinTheNetwork(mainAccount_3,{from:mainAccount_2});
    }).then(function() {
      return instance_1.getVariables(mainAccount_3,{from:mainAccount_3});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_3 = 1");
      assert.equal(data[1],1,"_sizeOfConnectedUsersByAddress mainAccount_3 = 1");
      return instance_1.getVariables(mainAccount_3,{from:mainAccount_2});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_1 = 1");
      assert.equal(data[1],2,"_sizeOfConnectedUsersByAddress mainAccount_1 = 2");
    });
  });


  it("Add another account to the network connected to account[2] - iterate", function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;
      return instance_1.requestUserToJoinTheNetwork(mainAccount_2,{from:mainAccount_3});
    }).then(function() {
      return instance_1.getVariables(mainAccount_2,{from:mainAccount_2});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_2 = 1");
      assert.equal(data[1],2,"_sizeOfConnectedUsersByAddress mainAccount_2 = 1");
      return instance_1.getVariables(mainAccount_2,{from:mainAccount_3});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress mainAccount_3 = 1");
      assert.equal(data[1],2,"_sizeOfConnectedUsersByAddress mainAccount_3 = 2");
    });
  });

  it("Donation with 4 users in the network (account[0] - 5 ETH) - iterate",function() {
    return DWDN.deployed().then(function(instance) {
      instance_1 = instance;

      var balance1;
      var balance2;
      var balance3;
      var balance4;
      var balance5;

      var balance1_afterCall;
      var balance2_afterCall;
      var balance3_afterCall;
      var balance4_afterCall;
      var balance5_afterCalll;

      return web3.eth.getBalance(accounts[0]);
    }).then(function(data) {
      balance1 = web3.utils.fromWei(data,"ether")
      return web3.eth.getBalance(accounts[1]);
    }).then(function(data) {
      balance2 = web3.utils.fromWei(data,"ether")
      return web3.eth.getBalance(accounts[2]);
    }).then(function(data) {
      balance3 = web3.utils.fromWei(data,"ether")
      return web3.eth.getBalance(accounts[3]);
    }).then(function(data) {
      balance4 = web3.utils.fromWei(data,"ether")
      return web3.eth.getBalance(accounts[4]);
    }).then(function(data) {
      balance5 = web3.utils.fromWei(data,"ether")
      return instance_1.makeADonation({from:mainAccount_1,value:web3.utils.toWei(donationValue_1,"ether")});
    }).then(function data(){

      return web3.eth.getBalance(accounts[0]);
    }).then(function(data) {
      balance1_afterCall = web3.utils.fromWei(data,"ether")
      return web3.eth.getBalance(accounts[1]);
    }).then(function(data) {
      balance2_afterCall = web3.utils.fromWei(data,"ether")
      return web3.eth.getBalance(accounts[2]);
    }).then(function(data) {
      balance3_afterCall = web3.utils.fromWei(data,"ether")
      return web3.eth.getBalance(accounts[3]);
    }).then(function(data) {
      balance4_afterCall = web3.utils.fromWei(data,"ether")
      return web3.eth.getBalance(accounts[4]);
    }).then(function(data) {
      balance5_afterCall = web3.utils.fromWei(data,"ether")
      return instance_1.getParameters();
    }).then(function(data) {
      var margin     = 0.00001;
      var marginMain = 0.05;

      assert.equal(balance2_afterCall - balance2 > web3.utils.fromWei(data[1],"ether") - margin, true, "Balance 2 Ok >");
      assert.equal(balance2_afterCall - balance2 < Number(web3.utils.fromWei(data[1],"ether")) + Number(margin), true, "Balance 2 Ok <");
      assert.equal(balance3_afterCall - balance3 > web3.utils.fromWei(data[1],"ether") - margin, true, "Balance 3 Ok >");
      assert.equal(balance3_afterCall - balance3 < Number(web3.utils.fromWei(data[1],"ether")) + Number(margin), true, "Balance 3 Ok <");
      assert.equal(balance4_afterCall - balance4 > web3.utils.fromWei(data[1],"ether") - margin, true, "Balance 4 Ok >");
      assert.equal(balance4_afterCall - balance4 < Number(web3.utils.fromWei(data[1],"ether")) + Number(margin), true, "Balance 4 Ok <");
      assert.equal(balance5_afterCall - balance5 > web3.utils.fromWei(data[1],"ether") - margin, true, "Balance 5 Ok >");
      assert.equal(balance5_afterCall - balance5 < Number(web3.utils.fromWei(data[1],"ether")) + Number(margin), true, "Balance 5 Ok <");

      assert.equal(balance1_afterCall - balance1 >  -marginMain, true, "Balance 1 Ok >");
      assert.equal(balance1_afterCall - balance1 <   marginMain, true, "Balance 1 Ok <");
    });
  });




});
