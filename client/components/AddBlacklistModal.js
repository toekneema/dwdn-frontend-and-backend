import React, { useState } from "react";
import Modal from "react-modal";
import { addToBlacklist } from "../ccn/contract_interact";

export const AddBlacklistModal = ({ ...props }) => {
  const [addressInput, setAddressInput] = useState("");

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
      <div>
        <button
          onClick={() => props.setAddBlacklistModalVisible(false)}
          className="m-2 rounded-full bg-gray-300 py-2 px-4"
        >
          Cancel
        </button>
        <button
          onClick={async () => {
            addToBlacklist(props.account, addressInput);
            props.setAddBlacklistModalVisible(false);
          }}
          className="m-2 rounded-full bg-blue-600 py-2 px-4 text-white"
        >
          Save
        </button>
      </div>
    </Modal>
  );
};
