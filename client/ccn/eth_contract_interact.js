const Web3 = require("web3");
const DWDNAbi = require("../lib/DWDN.json");

const web3 = new Web3("http://18.182.45.18:8765/");

// export const donateV2 = async (senderAddress) => {
//   try {
//     const id = await web3.eth.net.getId();
//     const deployedNetwork = DWDNAbi.networks[id];
//     const contract = new web3.eth.Contract(
//       DWDNAbi.abi,
//       deployedNetwork.address
//     );

//     console.log(contract, "contract");
//     console.log(contract.methods, "at least list the methods plz");
//     const response = await contract.methods.makeADonation().call({
//       from: senderAddress,
//     });
//     console.log(response, "response");
//     return response;
//   } catch (e) {
//     console.log("donate error:", e);
//   }
// };

export const donateV2 = async (senderAddress) => {
  const id = await web3.eth.net.getId();
  const deployedNetwork = DWDNAbi.networks[id];
  const contract = new web3.eth.Contract(DWDNAbi.abi, deployedNetwork.address);

  console.log(contract, "contract");
  console.log(contract.methods, "at least list the methods plz");
  contract.methods.makeADonation().call({
    from: senderAddress,
  });
  console.log(response, "response");
  return response;
};

export const decodeLogs = (logHash, topics) => {
  const lol = web3.eth.abi.decodeLog(
    [
      {
        type: "bool",
        name: "",
      },
      {
        type: "string",
        name: "",
      },
    ],
    logHash,
    topics
  );
  // .then((result) => {
  //   console.log("result", result);
  // })
  // .catch((e) => {
  //   console.log(e, "error decoding");
  // });
  console.log(lol, "decoded log");
};
