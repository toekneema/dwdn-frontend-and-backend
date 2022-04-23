import React, { useState } from "react";
import Modal from "react-modal";
import { addToBlacklist } from "../ccn/contract_interact";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import loadingSpinner from "../assets/lottie/loading_spinner.json";

export const AddBlacklistModal = ({ ...props }) => {
  const [addressInput, setAddressInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal
      isOpen={props.addBlacklistModalVisible}
      // style={styles.webModal}
      ariaHideApp={false}
    >
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
                props.setBlacklist((prevState) => [...prevState, addressInput]);
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
    </Modal>
  );
};
