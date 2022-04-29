import { decodeLogs } from "./eth_contract_interact";

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
  // "0x0Fe4cbb461130823225D240d25DdaC32c105af7A"
  // "0x89a7c30e168B04e2874ee4dB2E9dD85Dfe24033D" // new 4/24/22
  // "0x020E1dd92604EAE5787FC1afE649DbD08D2dBa92" // new 4/26/22
  "0x528D233a62A9aD40a4fC0BC2736252B714a12CB5" // new 4/27/22
);

export const getBalance = async (senderAddress) => {
  try {
    const data = await mcp.request.accountBalance(senderAddress);
    console.log(data.balance, "balance");
    return data.balance / 1000000000000000000;
  } catch (e) {
    console.log("getBalance error:", e.msg);
  }
};

// export const donate = async (senderAddress) => {
//   try {
//     const response = await myContract.methods.makeADonation().call({
//       from: senderAddress,
//     });
//     console.log(response, "response");
//     return response;
//   } catch (e) {
//     console.log("donate error:", e);
//   }
// };

export const donate = async (senderAddress, walletPassword) => {
  try {
    await myContract.methods.makeADonation().sendBlock({
      from: senderAddress,
      password: walletPassword,
      amount: "0",
      gas_price: "20000000000",
      gas: "2000000",
      amount: 10000000000000000, // .01 ETH, which is .01 CCN
    });
    return [false, ""];
  } catch (e) {
    // if (e.msg === undefined) {
    //   return [true, "Invalid address"];
    // }
    return [true, e.msg];
  }

  // decodeLogs(
  //   receipt.block.stable_content.log[0].data,
  //   receipt.block.stable_content.topics
  // );
  // decodeLogs(
  //   receipt.block.stable_content.log[1].data,
  //   receipt.block.stable_content.topics
  // );
  // decodeLogs(
  //   receipt.block.stable_content.log[2].data,
  //   receipt.block.stable_content.topics
  // );
  // decodeLogs(
  //   receipt.block.stable_content.log[3].data,
  //   receipt.block.stable_content.topics
  // );
};

export const getFriendlist = async (senderAddress) => {
  try {
    return await myContract.methods.getAddresses().call({
      from: senderAddress,
    });
  } catch (e) {
    console.log("getFriendlist error:", e.msg);
  }
};

export const getBlacklist = async (senderAddress) => {
  try {
    const blacklist = await myContract.methods.getBlackListAddresses().call({
      from: senderAddress,
    });
    return [...new Set(blacklist)];
  } catch (e) {
    console.log("getBlacklist error:", e.msg);
  }
};

// Returns bool: true if success, false otherwise.
export const addToFriendlist = async (
  senderAddress,
  friendAddress,
  walletPassword
) => {
  try {
    await myContract.methods
      .requestUserToJoinTheNetwork(friendAddress)
      .sendBlock({
        from: senderAddress,
        password: walletPassword,
        amount: "0",
        gas_price: "20000000000",
        gas: "2000000",
      });
    return [false, ""];
  } catch (e) {
    if (e.msg === undefined) {
      return [true, "Invalid address"];
    }
    return [true, e.msg];
  }
};

// Returns bool: true if success, false otherwise.
export const addToBlacklist = async (
  senderAddress,
  blacklistAddress,
  walletPassword
) => {
  try {
    await myContract.methods.addUserToBlacklist(blacklistAddress).sendBlock({
      from: senderAddress,
      password: walletPassword,
      amount: "0",
      gas_price: "20000000000",
      gas: "2000000",
    });
    return [false, ""];
  } catch (e) {
    if (e.msg === undefined) {
      return [true, "Invalid address"];
    }
    return [true, e.msg];
  }
};
