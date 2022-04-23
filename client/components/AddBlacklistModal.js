import React, { useState } from "react";
import Modal from "react-modal";
import { addToBlacklist } from "../ccn/contract_interact";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import loadingSpinner from "../assets/lottie/loading_spinner.json";
import { styles } from "../styles.js";

export const AddBlacklistModal = ({ ...props }) => {
  const [addressInput, setAddressInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal
      style={styles.modal}
      isOpen={props.addBlacklistModalVisible}
      ariaHideApp={false}
    >
      <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
          <h5 class="text-2xl font-medium text-gray-900 dark:text-white">
            Blacklist an address
          </h5>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Address
            </label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="0x09080153cBe9D2d1273a64CaBb2354deac65C060"
              required
              onChange={(event) => {
                setAddressInput(event.target.value);
              }}
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Your wallet password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              onChange={(event) => {
                setPasswordInput(event.target.value);
              }}
            />
          </div>
          <div />
          <div className="flex flex-row space-x-6">
            <button class="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Cancel
            </button>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to blacklist
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center items-center flex-col">
        <p>Input address to blacklist</p>
        <input
          className="rounded-full bg-gray-200 p-3 text-gray-800"
          placeholder="ex: 0x43254534"
          onChange={(event) => {
            setAddressInput(event.target.value);
          }}
        />
        <p>Input your wallet password</p>
        <input
          className="rounded-full bg-gray-200 p-3 text-gray-800"
          placeholder="ex: password12345"
          onChange={(event) => {
            setPasswordInput(event.target.value);
          }}
        />
        <div>
          <button
            disabled={isLoading}
            onClick={() => props.setAddBlacklistModalVisible(false)}
            className={
              isLoading
                ? "m-2 rounded-full bg-gray-200 py-2 px-4"
                : "m-2 rounded-full bg-gray-300 py-2 px-4"
            }
          >
            Cancel
          </button>
          <button
            disabled={isLoading}
            onClick={async () => {
              setIsLoading(true);
              if (addressInput === props.account) {
                toast("Cannot add yourself to blacklist");
                setIsLoading(false);
                return; // break early
              }

              const [hasError, errMsg] = await addToBlacklist(
                props.account,
                addressInput,
                passwordInput
              );
              if (hasError) {
                toast(errMsg);
              } else {
                if (props.blacklist.includes(addressInput)) {
                  toast("Already in blacklist");
                } else if (props.blacklist.length == 4) {
                  toast("Max blacklist size reached");
                } else {
                  props.setBlacklist((prevState) => [
                    ...prevState,
                    addressInput,
                  ]);
                  props.setAddBlacklistModalVisible(false);
                }
              }
              setIsLoading(false);
            }}
            className={
              isLoading
                ? "m-2 rounded-full bg-blue-300 py-2 px-4 text-white"
                : "m-2 rounded-full bg-blue-600 py-2 px-4 text-white"
            }
          >
            Add to Blacklist
          </button>
          {isLoading && (
            <Lottie
              animationData={loadingSpinner}
              loop
              autoplay
              style={{ height: 200, width: 200 }}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};
