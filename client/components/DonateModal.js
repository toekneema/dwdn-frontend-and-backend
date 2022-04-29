import React, { useState } from "react";
import Modal from "react-modal";
import { donate } from "../ccn/contract_interact";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import loadingSpinner from "../assets/lottie/loading_spinner.json";
import { styles } from "../styles.js";

export const DonateModal = ({ ...props }) => {
  const [donateAmountInput, setDonateAmountInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal
      isOpen={props.donateModalVisible}
      ariaHideApp={false}
      style={styles.modal}
    >
      <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-6">
          <h5 className="text-2xl font-medium text-gray-900 dark:text-white">
            Donate to your network
          </h5>
          <p className="text-gray-400 text-xs italic">
            Note: Max donation amount is 0.01 CCN.
          </p>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Amount (CCN)
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="ex: 0.001"
              required
              onChange={(event) => {
                setDonateAmountInput(parseInt(event.target.value));
              }}
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Your wallet password
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              onChange={(event) => {
                setPasswordInput(event.target.value);
              }}
            />
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center">
              <Lottie
                animationData={loadingSpinner}
                loop
                autoplay
                style={{ height: 75, width: 75 }}
              />
            </div>
          ) : (
            <div style={{ height: 75, width: 75 }} />
          )}
          <div className="flex flex-row space-x-6">
            <button
              className={
                isLoading
                  ? "w-full text-white bg-red-400 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-red-800"
                  : "w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              }
              disabled={isLoading}
              onClick={() => props.setDonateModalVisible(false)}
            >
              Cancel
            </button>
            <button
              className={
                isLoading
                  ? "w-full text-white bg-blue-400 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  : "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              }
              disabled={isLoading}
              onClick={async () => {
                setIsLoading(true);
                if (donateAmountInput > 0.01) {
                  toast("Cannot donate more than 0.01 CCN");
                  setIsLoading(false);
                  return; // break early
                }

                const [hasError, errMsg] = await donate(
                  props.account,
                  passwordInput
                );
                if (hasError) {
                  toast(errMsg);
                } else {
                  toast("Donation successful. Refresh page to see new balance");
                  props.setDonateModalVisible(false);
                }
                setIsLoading(false);
              }}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
