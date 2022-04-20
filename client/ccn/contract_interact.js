import { toast } from "react-toastify";

const Mcp = require("mcp.js");
const DWDNAbi = require("../lib/DWDN.json");

// If you want to modify the node IP address and port, please set the following
// Example
const options = {
  host: "18.182.45.18",
  port: 8765,
};
let mcp = new Mcp(options);

// Now you can use the mcp object
// Example
mcp.request
  .status()
  .then(function (res) {
    console.log(`status`, res);
  })
  .catch(function (error) {
    console.log("accountList catch", error);
  });

mcp.Contract.setProvider("http://18.182.45.18:8765/");
let myContract = new mcp.Contract(
  DWDNAbi.abi,
  "0x0Fe4cbb461130823225D240d25DdaC32c105af7A"
);

export const donate = async () => {
  try {
    return await myContract.methods.makeADonation().call({
      from: "0x09080153cBe9D2d1273a64CaBb2354deac65C060",
    });
  } catch (e) {
    console.log(e);
  }
};

export const getFriendlist = async () => {
  try {
    return await myContract.methods.getAddresses().call({
      from: "0x09080153cBe9D2d1273a64CaBb2354deac65C060",
    });
  } catch (e) {
    console.log(e);
  }
};

export const getBlacklist = async () => {
  try {
    return await myContract.methods.getBlackListAddresses().call({
      from: "0x09080153cBe9D2d1273a64CaBb2354deac65C060",
    });
  } catch (e) {
    console.log(e);
  }
};

export const addToFriendlist = (address) => {
  try {
    myContract.methods.requestUserToJoinTheNetwork(address).sendBlock({
      from: "0x09080153cBe9D2d1273a64CaBb2354deac65C060",
      password: "Eric12345!",
      amount: "0",
      gas_price: "20000000000",
      gas: "2000000",
    });
  } catch (e) {
    console.log(e);
  }
};

export const addToBlacklist = (address) => {
  try {
    myContract.methods.addUserToBlacklist(address).sendBlock({
      from: "0x09080153cBe9D2d1273a64CaBb2354deac65C060",
      password: "Eric12345!",
      amount: "0",
      gas_price: "20000000000",
      gas: "2000000",
    });
  } catch (e) {
    console.log(e);
  }
};
