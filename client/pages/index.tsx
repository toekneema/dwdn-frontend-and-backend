import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import { MainScreen } from "../components/MainScreen";
import { ConnectWalletScreen } from "../components/ConnectWalletScreen";

const Home: NextPage = () => {
  // check if wallet connected here
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(null);
  const [isLocked, setIsLocked] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStuff = () => {
      if (typeof window.aleereum !== "undefined") {
        const provider = window["aleereum"];
        if (provider.isAle) {
          // initial settings
          setIsLoading(true);
          setAccount(provider.account);
          setIsConnected(provider.isConnected);
          setIsLocked(provider.islocked);

          // listeners
          window.aleereum.on("on_islocked_change", (status) => {
            setIsLocked(status);
          });
          window.aleereum.on("on_isConnected_change", (status) => {
            setIsConnected(status);
          });
          window.aleereum.on("on_account_change", (newAccount) => {
            setAccount(newAccount);
          });
        }
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchStuff();
    }, 40 /* ms */);
  }, [account, isConnected, isLocked]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!isConnected || isLocked) {
    return <ConnectWalletScreen />;
  } else {
    return (
      <MainScreen
        account={account}
        isConnected={isConnected}
        isLocked={isLocked}
      />
    );
  }
};

export default Home;
