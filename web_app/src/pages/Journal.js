import React from 'react'
import JournalImg from '../assets/journal.svg'

export default function Journal() {
  return (
    <div className='md:mx-28 mx-4 text-white pt-8 pb-12'>
      <div className='mx-36'>
        <h1 className='text-3xl'>Your daily Journal is here</h1>
        <div
          className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl p-3 mx-auto">
          <div className="w-full grid place-items-center md:drop-shadow-3xl">
            <img src={JournalImg} width="400" height="400" alt="img" />
          </div>
          <div className="w-full md:w-2/3 text-white flex flex-col p-3">
            <h1 className="text-xl">List out some advantages of writing...</h1>
            <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Create</button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-around w-full px-6 gap-y-6">

        <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-5 py-3 w-96 mx-auto border border-white bg-white">
          <div className="w-full bg-white flex flex-col p-3">
            <h1 className="font-black text-gray-800 text-2xl">Name</h1>
            <p className="font-black text-gray-400 text-lg">Last update time</p>
            <h1 className="font-black text-gray-800 text-xl py-2">Description</h1>
            <div className='flex justify-around space-x-2 mx-4'>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>View</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Edit</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Delete</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-5 py-3 w-96 mx-auto border border-white bg-white">
          <div className="w-full bg-white flex flex-col p-3">
            <h1 className="font-black text-gray-800 text-2xl">Name</h1>
            <p className="font-black text-gray-400 text-lg">Last update time</p>
            <h1 className="font-black text-gray-800 text-xl py-2">Description</h1>
            <div className='flex justify-around space-x-2 mx-4'>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>View</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Edit</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Delete</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-5 py-3 w-96 mx-auto border border-white bg-white">
          <div className="w-full bg-white flex flex-col p-3">
            <h1 className="font-black text-gray-800 text-2xl">Name</h1>
            <p className="font-black text-gray-400 text-lg">Last update time</p>
            <h1 className="font-black text-gray-800 text-xl py-2">Description</h1>
            <div className='flex justify-around space-x-2 mx-4'>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>View</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Edit</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Delete</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-5 py-3 w-96 mx-auto border border-white bg-white">
          <div className="w-full bg-white flex flex-col p-3">
            <h1 className="font-black text-gray-800 text-2xl">Name</h1>
            <p className="font-black text-gray-400 text-lg">Last update time</p>
            <h1 className="font-black text-gray-800 text-xl py-2">Description</h1>
            <div className='flex justify-around space-x-2 mx-4'>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>View</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Edit</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Delete</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-5 py-3 w-96 mx-auto border border-white bg-white">
          <div className="w-full bg-white flex flex-col p-3">
            <h1 className="font-black text-gray-800 text-2xl">Name</h1>
            <p className="font-black text-gray-400 text-lg">Last update time</p>
            <h1 className="font-black text-gray-800 text-xl py-2">Description</h1>
            <div className='flex justify-around space-x-2 mx-4'>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>View</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Edit</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Delete</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-5 py-3 w-96 mx-auto border border-white bg-white">
          <div className="w-full bg-white flex flex-col p-3">
            <h1 className="font-black text-gray-800 text-2xl">Name</h1>
            <p className="font-black text-gray-400 text-lg">Last update time</p>
            <h1 className="font-black text-gray-800 text-xl py-2">Description</h1>
            <div className='flex justify-around space-x-2 mx-4'>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>View</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Edit</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Delete</button>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}
