import React, { useEffect, useState } from "react";
import { AddFriendModal } from "./AddFriendModal";
import { AddBlacklistModal } from "./AddBlacklistModal";
import { LoadingScreen } from "./LoadingScreen";
import {
  donate,
  getBlacklist,
  getFriendlist,
  getBalance,
} from "../ccn/contract_interact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MainScreen = ({ account, isConnected, isLocked }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [addFriendModalVisible, setAddFriendModalVisible] = useState(false);
  const [addBlacklistModalVisible, setAddBlacklistModalVisible] =
    useState(false);
  const [balance, setBalance] = useState(null);
  const [friendlist, setFriendlist] = useState([]);
  const [blacklist, setBlacklist] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getInitialData = async () => {
      setBalance(await getBalance(account));
      setFriendlist(await getFriendlist(account));
      setBlacklist(await getBlacklist(account));
    };
    getInitialData().then(() => {
      setIsLoading(false);
    });

    return () => {
      setFriendlist([]);
      setBlacklist([]);
    };
  }, [account, balance]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div
      className="flex min-h-screen flex-col justify-center space-y-10"
      style={{
        backgroundImage: `url(${require("../assets/light_fluid.png")})`,
      }}
    >
      <h1 className="text-center text-5xl text-white font-semibold">
        Decentralized Wealth Distribution Network
      </h1>
      <div className="flex flex-col items-center justify-evenly space-y-6">
        <div className="rounded-lg shadow-lg bg-gray-50">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Your Profile</div>
            <p className="text-gray-700">
              Address: <span>{account}</span>
            </p>
            <p className="text-base text-gray-700">
              Balance: <span>{balance} CCN</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-xl bg-blue-200 p-5 shadow-lg">
          <p>You will donate the lesser of (2e+15 CCN, your balance)</p>
          <button
            className="rounded-full bg-blue-700 px-10 py-3 text-white"
            onClick={() => donate(account)}
          >
            Donate
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="rounded-xl bg-gray-300 p-5 shadow-lg">
          <div className="flex flex-row">
            <p>Your friends ({friendlist.length}):</p>
            <button
              className="flex h-5 w-5 items-center justify-center rounded-full bg-green-400 text-center"
              onClick={() => setAddFriendModalVisible(true)}
            >
              +
            </button>
          </div>
          {friendlist && friendlist.map((item, idx) => <p key={idx}>{item}</p>)}
        </div>
        <div className="rounded-xl bg-gray-300 p-5 shadow-lg">
          <div className="flex flex-row">
            <p>Addresses you've blacklisted ({blacklist.length}):</p>
            <button
              className="flex h-5 w-5 items-center justify-center rounded-full bg-green-400 text-center"
              onClick={() => setAddBlacklistModalVisible(true)}
            >
              +
            </button>
          </div>
          {blacklist && blacklist.map((item, idx) => <p key={idx}>{item}</p>)}
        </div>
      </div>
      <AddFriendModal
        addFriendModalVisible={addFriendModalVisible}
        setAddFriendModalVisible={setAddFriendModalVisible}
        account={account}
        friendlist={friendlist}
        setFriendlist={setFriendlist}
      />
      <AddBlacklistModal
        addBlacklistModalVisible={addBlacklistModalVisible}
        setAddBlacklistModalVisible={setAddBlacklistModalVisible}
        account={account}
        blacklist={blacklist}
        setBlacklist={setBlacklist}
      />
      <ToastContainer />
    </div>
  );
};
