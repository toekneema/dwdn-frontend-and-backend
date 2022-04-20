import contract from "./contract";
import { toast } from "react-toastify";

// Amount to donate in CCN
export const donate = () => {
  contract.Instance.methods
    .makeADonation()
    .call()
    .then((data) => {
      console.log("makeADonation data", data);
    })
    .catch((error) => {
      console.log("error", error);
      toast(error);
    });
};

export const getFriendlist = async () => {
  try {
    const data = await contract.Instance.methods.getAddresses().call();
    console.log(data, "getFriendlist data");
    return data;
  } catch (e) {
    console.log(e, "getFriendlist error");
    toast("error:", e);
  }
};

export const getBlacklist = async () => {
  try {
    const data = await contract.Instance.methods.getBlackListAddresses().call();
    console.log(data, "getBlacklist data");
    return data;
  } catch (e) {
    console.log(e, "getBlacklist error");
    toast("error:", e);
  }
};

export const addToFriendlist = (address) => {
  contract.Instance.methods
    .requestUserToJoinTheNetwork(address)
    .sendBlock({
      from: "0x09080153cBe9D2d1273a64CaBb2354deac65C060",
      gas: 3000000,
      gas_price: "1000000000",
      password: "Eric12345!",
    })
    .then((data) => {
      console.log("addToFriendlist:", data);
    })
    .catch((error) => {
      console.log(`address ${address} is invalid....`, error);
      toast(error);
    });
};

export const addToBlacklist = (address) => {
  contract.Instance.methods
    .addUserToBlacklist(address)
    .sendBlock({
      from: "0x09080153cBe9D2d1273a64CaBb2354deac65C060",
      gas: 3000000,
      gas_price: "1000000000",
      password: "Eric12345!",
    })
    .then((data) => {
      console.log("addToBlacklist:", data);
    })
    .catch((error) => {
      console.log(`address ${address} is invalid....`, error);
      toast(error);
    });
};
