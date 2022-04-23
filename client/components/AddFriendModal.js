import React, { useState } from "react";
import Modal from "react-modal";
import { addToFriendlist } from "../ccn/contract_interact";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import loadingSpinner from "../assets/lottie/loading_spinner.json";

export const AddFriendModal = ({ ...props }) => {
  const [addressInput, setAddressInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal
      isOpen={props.addFriendModalVisible}
      // style={styles.webModal}
      ariaHideApp={false}
    >
      <p>Input a CCN wallet address:</p>
      <input
        className="rounded-full bg-gray-200 p-3 text-gray-800"
        placeholder="ex: 0x43254534"
        onChange={(event) => {
          setAddressInput(event.target.value);
        }}
      />
      <p>Input wallet password:</p>
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
          onClick={() => props.setAddFriendModalVisible(false)}
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
            const [hasError, errMsg] = await addToFriendlist(
              props.account,
              addressInput,
              passwordInput
            );
            if (hasError) {
              toast(errMsg);
            } else {
              props.setFriendlist((prevState) => [...prevState, addressInput]);
              props.setAddFriendModalVisible(false);
            }
            setIsLoading(false);
          }}
          className={
            isLoading
              ? "m-2 rounded-full bg-blue-300 py-2 px-4 text-white"
              : "m-2 rounded-full bg-blue-600 py-2 px-4 text-white"
          }
        >
          Add Friend
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
