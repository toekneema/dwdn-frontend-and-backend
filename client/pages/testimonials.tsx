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
          <p className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-20">
            Testimonials
          </p>
          <div className="space-y-8">
            <div className="bg-white dark:bg-blue-300 rounded-3xl w-1/2 mx-auto p-8">
              <p className="text-gray-600 dark:text-gray-700 w-full md:w-2/3 m-auto text-center text-lg md:text-3xl">
                <span className="font-bold text-blue-500">“</span>I love
                philanthropy. I've donated heaps of my wealth to charities. With
                DWDN, I'm able to securely donate an equal amount to every
                person.
                <span className="font-bold text-blue-500">”</span>
              </p>
              <div className="flex items-center justify-center mt-8">
                <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src="https://935650.smushcdn.com/2437829/wp-content/uploads/2021/09/Sam-Bankman-Fried-shares-why-FTX-is-making-its-way-with.jpeg?lossy=1&strip=1&webp=1"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <div className="flex ml-2 items-center justify-center">
                  <span className="font-semibold text-blue-500 mr-2 text-lg">
                    Sam Bankman-Fried
                  </span>
                  <span className="text-gray-700 text-xl font-light">/</span>
                  <span className="text-gray-600 text-md ml-2">CEO of FTX</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-blue-300 rounded-3xl w-1/2 mx-auto p-8">
              <p className="text-gray-600 dark:text-gray-700 w-full md:w-2/3 m-auto text-center text-lg md:text-3xl">
                <span className="font-bold text-blue-500">“</span>
                DWDN to the moon 🚀 ! Open source donations are the first step
                towards ending world hunger!
                <span className="font-bold text-blue-500">”</span>
              </p>
              <div className="flex items-center justify-center mt-8">
                <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src="https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <div className="flex ml-2 items-center justify-center">
                  <span className="font-semibold text-blue-500 mr-2 text-lg">
                    Elon Musk
                  </span>
                  <span className="text-gray-700 text-xl font-light">/</span>
                  <span className="text-gray-600 text-md ml-2">
                    CEO of Tesla
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-blue-300 rounded-3xl w-1/2 mx-auto p-8">
              <p className="text-gray-600 dark:text-gray-700 w-full md:w-2/3 m-auto text-center text-lg md:text-3xl">
                <span className="font-bold text-blue-500">“</span>Even though I
                like #bitcoin more than #CCN and #ETH, I cannot deny that DWDN
                is a first of its kind platform.
                <span className="font-bold text-blue-500">”</span>
              </p>
              <div className="flex items-center justify-center mt-8">
                <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src="https://pbs.twimg.com/profile_images/1115644092329758721/AFjOr-K8_400x400.jpg"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <div className="flex ml-2 items-center justify-center">
                  <span className="font-semibold text-blue-500 mr-2 text-lg">
                    Jack Dorsey
                  </span>
                  <span className="text-gray-700 text-xl font-light">/</span>
                  <span className="text-gray-600 text-md ml-2">
                    CEO of Block
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
