import React from "react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import Image from "next/image";

const Team: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex bg-gray-800 min-h-screen flex-col items-center space-y-10 bg-slate-900">
        <div className="w-full flex items-center flex-col p-8">
          <p className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-20">
            Meet the team!
          </p>
          <div className="flex items-center flex-col md:flex-row justify evenly">
            <div className="p-4">
              <div className="text-center mb-4 opacity-90">
                <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQFbMqkPoV2Qlw/profile-displayphoto-shrink_800_800/0/1631225269273?e=1656547200&v=beta&t=bNdY2ibXDDHhiTaB9eaZT_Y4UIR7IbREtg2CHat0H5g"
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  Lucas Amaral
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                  Smart Contract Developer
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                  Lucas is a director of financial products at XP Inc in Sao
                  Paulo, Brazil where he leads the market making and arbitrage
                  desk.
                </p>
              </div>
              <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-evenly">
                <a
                  href="https://github.com/LucasRabechiniAmaral"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-rabechini-996b5014b"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="p-4">
              <div className="text-center mb-4 opacity-90">
                <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQHHmeO1BlZAZA/profile-displayphoto-shrink_800_800/0/1596549867933?e=1656547200&v=beta&t=p643oR97Nuzv8fmCsm7N44CWEJFiZRxUw26fGrJXQXQ"
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  Tony Ma
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                  Frontend Developer
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                  Tony is a software engineer at Google working on modernizing
                  the YouTube android app.
                </p>
              </div>
              <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-evenly">
                <a
                  href="https://github.com/toekneema"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/toekneema/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
