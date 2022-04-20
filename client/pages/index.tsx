import type { NextPage } from "next";
import { MainScreen } from "../components/MainScreen";

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
};

const Home: NextPage = () => {
  // check if wallet connected here

  return <MainScreen aleerumProvider={null} />;
};

export default Home;
