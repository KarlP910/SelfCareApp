import React from 'react'
import MusicImg from '../assets/music.svg'

export default function Music() {
  return (
    <div className='md:mx-28 mx-4 text-white pt-8 pb-12'>
      <div className='mx-36'>
        <h1 className='text-3xl'>Listen to some peaceful music to relax your mind</h1>
        <div
          className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl p-3 mx-auto">
          <div className="w-full grid place-items-center md:drop-shadow-3xl">
            <img src={MusicImg} width="400" height="400" alt="img" />
          </div>
          <div className="w-full md:w-2/3 text-white flex flex-col p-3">
            <h1 className="text-xl">List out some advantages to listning to music...</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 pt-8 gap-4 gap-y-6">

        <div className="shadow-2xl rounded-3xl bg-white items-center text-center cursor-pointer transition transform hover:scale-110 duration-500 drop-shadow-3xl">
          <div className="rounded-3xl">
            <img src={MusicImg} alt="" width="300" height="300" className="rounded-3xl bg-white" />
          </div>
          <div className="text-2xl pb-1 text-black font-bold tracking-wide">Music Name</div>
        </div>

        <div className="shadow-2xl rounded-3xl bg-white items-center text-center cursor-pointer transition transform hover:scale-110 duration-500 drop-shadow-3xl">
          <div className="rounded-3xl">
            <img src={MusicImg} alt="" width="300" height="300" className="rounded-3xl bg-white" />
          </div>
          <div className="text-2xl pb-1 text-black font-bold tracking-wide">Music Name</div>
        </div>

        <div className="shadow-2xl rounded-3xl bg-white items-center text-center cursor-pointer transition transform hover:scale-110 duration-500 drop-shadow-3xl">
          <div className="rounded-3xl">
            <img src={MusicImg} alt="" width="300" height="300" className="rounded-3xl bg-white" />
          </div>
          <div className="text-2xl pb-1 text-black font-bold tracking-wide">Music Name</div>
        </div>

        <div className="shadow-2xl rounded-3xl bg-white items-center text-center cursor-pointer transition transform hover:scale-110 duration-500 drop-shadow-3xl">
          <div className="rounded-3xl">
            <img src={MusicImg} alt="" width="300" height="300" className="rounded-3xl bg-white" />
          </div>
          <div className="text-2xl pb-1 text-black font-bold tracking-wide">Music Name</div>
        </div>

        <div className="shadow-2xl rounded-3xl bg-white items-center text-center cursor-pointer transition transform hover:scale-110 duration-500 drop-shadow-3xl">
          <div className="rounded-3xl">
            <img src={MusicImg} alt="" width="300" height="300" className="rounded-3xl bg-white" />
          </div>
          <div className="text-2xl pb-1 text-black font-bold tracking-wide">Music Name</div>
        </div>

        <div className="shadow-2xl rounded-3xl bg-white items-center text-center cursor-pointer transition transform hover:scale-110 duration-500 drop-shadow-3xl">
          <div className="rounded-3xl">
            <img src={MusicImg} alt="" width="300" height="300" className="rounded-3xl bg-white" />
          </div>
          <div className="text-2xl pb-1 text-black font-bold tracking-wide">Music Name</div>
        </div>

      </div>

    </div>
  )
}
