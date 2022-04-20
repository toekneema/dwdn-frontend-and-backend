var DWDN = artifacts.require("./DWDN.sol");

contract('DWDN_test_init', function(accounts){
  var instance_1;
  var mainAccount_1   = accounts[0];
  var mainAccount_2   = accounts[1];
  var mainAccount_3   = accounts[2];
  var mainAccount_4   = accounts[3];
  var mainAccount_5   = accounts[4];
  var mainAccount_6   = accounts[5];
  var donationValue_1 = "5";


  it("Correct values for all the parameters - initialize", function() {
    return DWDN.deployed().then(function(instance) {
      return instance.getParameters();
    }).then(function(data) {
      assert.equal(data[0],4,"_maxConnections = 4");
      assert.equal(data[1],(10**15)*2,"_maxWeiDistribution = (10**15)*2");
      assert.equal(data[2],(10**14)*2,"_minWeiDistribution = (10**14)*2");
      assert.equal(data[3],100,"_maxMemoryArray = 100");
      assert.equal(data[4],3000,"_gasTransfer = 3000");
    });
  });


  it("Correct values for all the variables - initialize", function() {
    return DWDN.deployed().then(function(instance) {
      return instance.getVariables(mainAccount_1,{from:mainAccount_1});
    }).then(function(data) {
      assert.equal(data[0],1,"_connectedUsersByAddress = 1");
      assert.equal(data[1],1,"_sizeOfConnectedUsersByAddress = 1");
    });
  });




});
