import React from 'react'
import { useContext } from 'react'

export const ConnectWalletScreen = () => {
  const connectWallet = () => {
    window['aleereum'] && window['aleereum'].connect()
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">DWDN!</span>
        </h1>

        <p className="mt-3 text-2xl">
          Decentralized Wealth Distribution Network
        </p>

        <div className="mt-20 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <button
            className="rounded-full bg-blue-600 px-12 py-4 text-2xl text-white"
            onClick={() => connectWallet()}
          >
            Connect your wallet
          </button>
        </div>
      </main>
    </div>
  )
}
