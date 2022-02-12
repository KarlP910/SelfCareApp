import React from 'react'
import firebase from "firebase";

export default function Profile() {
  return (
    <div className='md:mx-28 mx-4 text-white pt-8 pb-12'>
      <div className='mx-36'>
        <h1 className='text-3xl'>My profile</h1>
        <div
          className="flex flex-col md:flex-row space-y-3 md:space-y-0 drop-shadow-3xl p-3 mx-auto">
          <div className="w-full grid place-items-center md:drop-shadow-3xl">
            <img src={firebase.auth().currentUser.photoURL} width="200" height="200" alt="img" className='rounded-full' />
          </div>
          <div className="w-full md:w-2/3 text-white flex flex-col p-3">
            <h1 className="text-xl">{firebase.auth().currentUser.displayName}</h1>
            <h1 className="text-xl">{firebase.auth().currentUser.email}</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">
        <div className="m-8">
          <div className="w-52 h-52 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-tertiary rounded-lg bg-primary">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white px-4">Account Info</div>
          </div>
        </div>

        <div className="m-8">
          <div className="w-52 h-52 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-tertiary rounded-lg bg-primary">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white px-4">Crypto Transfer</div>
          </div>
        </div>

        <div className="m-8">
          <div className="w-52 h-52 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-tertiary rounded-lg bg-primary">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white px-4">Contract Call</div>
          </div>
        </div>

        <div className="m-8">
          <div className="w-52 h-52 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-tertiary rounded-lg bg-primary">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white px-4">Contract Deploy</div>
          </div>
        </div>

        <div className="m-8">
          <div className="w-52 h-52 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-tertiary rounded-lg bg-primary">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white px-4">File Deploy</div>
          </div>
        </div>

        <div className="m-8">
          <div className="w-52 h-52 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-tertiary rounded-lg bg-primary">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white px-4">File Retrieve</div>
          </div>
        </div>

        <div className="m-8">
          <div className="w-52 h-52 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-tertiary rounded-lg bg-primary">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white px-4">Topic Create</div>
          </div>
        </div>

        <div className="m-8">
          <div className="w-52 h-52 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-tertiary rounded-lg bg-primary">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white px-4">Topic Update</div>
          </div>
        </div>

      </div>

    </div>
  )
}
