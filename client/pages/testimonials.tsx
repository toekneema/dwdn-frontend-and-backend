import React from "react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import Image from "next/image";

const Testimonials: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col justify-center bg-slate-900">
        <div className="bg-white dark:bg-gray-800 p-8">
          {/* start of tailwind stuff*/}
          <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Testimonials
          </p>
          <div className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
            <div className="bg-gradient-to-br from-slate-400 to-slate-600 w-72 shadow-lg mx-auto rounded-xl p-4">
              <p className="text-gray-600 dark:text-white">
                <span className="font-bold text-blue-700 text-lg">“</span>
                DWDN to the moon 🚀 ! Open source donations are the first step
                towards ending world hunger!
                <span className="font-bold text-blue-700 text-lg">”</span>
              </p>
              <div className="flex items-center mt-4">
                <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src="https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <div className="flex flex-col ml-2 justify-between">
                  <span className="font-semibold text-blue-700 text-sm">
                    Elon Musk
                  </span>
                  <span className="dark:text-gray-300 text-xs flex items-center">
                    CEO of Tesla
                    <img src="/icons/rocket.svg" className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-400 to-slate-600 w-72 shadow-lg mx-auto rounded-xl p-4">
              <p className="text-gray-600 dark:text-white">
                <span className="font-bold text-blue-700 text-lg">“</span>I love
                philanthropy. I've donated heaps of my wealth to charities. With
                DWDN, I'm able to securely donate an equal amount to every
                person.
                <span className="font-bold text-blue-700 text-lg">”</span>
              </p>
              <div className="flex items-center mt-4">
                <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src="https://935650.smushcdn.com/2437829/wp-content/uploads/2021/09/Sam-Bankman-Fried-shares-why-FTX-is-making-its-way-with.jpeg?lossy=1&strip=1&webp=1"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <div className="flex flex-col ml-2 justify-between">
                  <span className="font-semibold text-blue-700 text-sm">
                    Sam Bankman-Fried
                  </span>
                  <span className="dark:text-gray-300 text-xs flex items-center">
                    CEO of FTX
                    <img src="/icons/rocket.svg" className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-400 to-slate-600 w-72 shadow-lg mx-auto rounded-xl p-4">
              <p className="text-gray-600 dark:text-white">
                <span className="font-bold text-blue-700 text-lg">“</span>
                Even though I like #bitcoin more than #CCN and #ETH, I cannot
                deny that DWDN is a first of its kind platform.
                <span className="font-bold text-blue-700 text-lg">”</span>
              </p>
              <div className="flex items-center mt-4">
                <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src="https://pbs.twimg.com/profile_images/1115644092329758721/AFjOr-K8_400x400.jpg"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <div className="flex flex-col ml-2 justify-between">
                  <span className="font-semibold text-blue-700 text-sm">
                    Jack Dorsey
                  </span>
                  <span className="dark:text-gray-300 text-xs flex items-center">
                    CEO of Block
                    <img src="/icons/rocket.svg" className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* end of tailwind stuff*/}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
