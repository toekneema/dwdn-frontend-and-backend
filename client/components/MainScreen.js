import React, { useEffect, useState } from "react";
import { AddFriendModal } from "./AddFriendModal";
import { AddBlacklistModal } from "./AddBlacklistModal";
import { LoadingScreen } from "./LoadingScreen";
import { donate, getBlacklist, getFriendlist } from "../ccn/contract_interact";
import { toast, ToastContainer } from "react-toastify";

export const MainScreen = ({ aleerumProvider }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [addFriendModalVisible, setAddFriendModalVisible] = useState(false);
  const [addBlacklistModalVisible, setAddBlacklistModalVisible] =
    useState(false);
  const [friendlist, setFriendList] = useState([]);
  const [blacklist, setBlacklist] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getInitialData = async () => {
      setFriendList(await getFriendlist());
      setBlacklist(await getBlacklist());
    };
    getInitialData().then(() => {
      setIsLoading(false);
    });

    return () => {
      setFriendList([]);
      setBlacklist([]);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex min-h-screen flex-col justify-center space-y-10">
      <h1 className="text-center text-5xl">
        Decentralized Wealth Distribution Network
      </h1>
      <div className="flex flex-col items-center justify-evenly space-y-6">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Your Profile</div>
            <p className="text-base text-gray-700">
              {/* Address: <span>{aleerumProvider.account}</span> */}
              Address: <span>0x444</span>
            </p>
            <p className="text-base text-gray-700">
              Balance: <span>5.6 CCN</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-xl bg-blue-200 p-5 shadow-lg">
          <p>
            You will donate the lesser of #max_wei_amt and your account balance
          </p>
          <button
            className="rounded-full bg-blue-700 px-10 py-3 text-white"
            onClick={() => donate()}
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
      />
      <AddBlacklistModal
        addBlacklistModalVisible={addBlacklistModalVisible}
        setAddBlacklistModalVisible={setAddBlacklistModalVisible}
      />
      <ToastContainer />
    </div>
  );
};
