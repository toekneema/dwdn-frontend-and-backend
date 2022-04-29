import React, { useEffect, useState } from "react";
import { AddFriendModal } from "./AddFriendModal";
import { AddBlacklistModal } from "./AddBlacklistModal";
import { DonateModal } from "./DonateModal";
import { LoadingScreen } from "./LoadingScreen";
import { Header } from "./Header";
import {
  donate,
  getBlacklist,
  getFriendlist,
  getBalance,
} from "../ccn/contract_interact";
import { donateV2 } from "../ccn/eth_contract_interact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MainScreen = ({ account, isConnected, isLocked }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [donateModalVisible, setDonateModalVisible] = useState(false);
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
    <>
      <Header />
      <div className="flex min-h-screen flex-col justify-center space-y-10 bg-slate-900">
        <div className="flex flex-col items-center justify-evenly space-y-6">
          <div className="rounded-lg shadow-lg bg-gray-50">
            <div className="block p-6 max-w-3xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Your Wallet
              </h5>
              <p className="font-bold text-gray-700 dark:text-gray-400">
                Address:{" "}
                <span className="font-normal text-gray-200">{account}</span>
              </p>
              <p className="font-bold text-gray-700 dark:text-gray-400">
                Balance:{" "}
                <span className="font-normal text-gray-200">{balance} CCN</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center my-20">
            <button
              className="rounded-full bg-blue-400 text-white text-2xl shadow-xl px-10 py-3 hover:ring-2 hover:bg-blue-900"
              onClick={() => setDonateModalVisible(true)}
            >
              Donate
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-evenly">
          <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Your Friendlist ({friendlist.length})
              </h5>
              <button
                className="text-sm w-6 h-6 font-medium bg-blue-300 rounded-full text-blue-600 dark:text-blue-500 hover:bg-blue-400 hover:ring-1 hover:ring-blue-500"
                onClick={() => setAddFriendModalVisible(true)}
              >
                +
              </button>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {friendlist &&
                  friendlist.map((item, idx) => (
                    <li key={idx} className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {item}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Your Blacklist ({blacklist.length})
              </h5>
              <button
                className="text-sm w-6 h-6 font-medium bg-blue-300 rounded-full text-blue-600 dark:text-blue-500 hover:bg-blue-400 hover:ring-1 hover:ring-blue-500"
                onClick={() => setAddBlacklistModalVisible(true)}
              >
                +
              </button>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {blacklist &&
                  blacklist.map((item, idx) => (
                    <li key={idx} className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {item}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <DonateModal
          donateModalVisible={donateModalVisible}
          setDonateModalVisible={setDonateModalVisible}
          account={account}
        />
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
    </>
  );
};
