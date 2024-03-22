"use client";
import {navigate} from "./utils";


export default function Home() {
  return (
    <>
      <h1 className="flex flex-col items-center justify-center min-h-screen py-2">Enter the address</h1>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form action={navigate}>
        <input
                className="pl-3 pr-28 py-3 mt-1 text-lg block w-full border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300"
                maxLength={150}
                placeholder="address"
                required
                type="text"
                name="address"
            />
        <input
            className="pl-3 pr-28 py-3 mt-1 text-lg block w-full border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300"
            maxLength={150}
            placeholder="token"
            required
            type="text"
            name="token"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                  Create Poll
              </button>
      </form>
        
              

        </div>
    </>
  );
}