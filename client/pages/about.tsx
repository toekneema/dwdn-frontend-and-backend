import React from "react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col justify-center space-y-10 bg-gray-800">
        <div className="relative flex flex-row justify-between px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
          <div className="flex flex-col justify-end">
            <h2 className="text-3xl font-bold font-display text-black dark:text-white sm:text-3xl">
              What is DWDN?
            </h2>
            <p className="mt-2 max-w-xl text-lg text-gray-400">
              This project aims to build a decentralized wealth distribution
              network (DWDN) on top of the Ethereum Blockchain in which users
              can make donations to all other users connected to him/her. The
              central idea here is that some could make a donation of part of
              their wealth to other users that have some connection to him/her
              in order to reduce the income inequality around the world. The
              decentralized blockchain technology would help us not only to
              transfer funds real time but also guaranteeing that there is no
              corruption risk when making a donation to other users.
            </p>
          </div>
          <div className="">
            <Image
              className="object-cover rounded-full"
              src="/fig1.png"
              height={400}
              width={400}
              alt="user_graph"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
