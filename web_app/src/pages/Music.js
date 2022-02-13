import React from 'react'
import MusicImg from '../assets/music.svg'
import {app} from '../services/firebase';
import { useEffect } from 'react';
import firebase from 'firebase';
import { HiX } from 'react-icons/hi';

export default function Music() {

  const [data, setdata] = React.useState([]);
  const [showMusic, setShowMusic] = React.useState(false);


  const ref = firebase.firestore().collection("Music");

  function getMusic(){
    
    ref.onSnapshot((querySnapshot) =>{
      const items = []
      querySnapshot.forEach((doc) =>{
        items.push(doc.data());
      });
     setdata(items)
     setShowMusic(false)
    })

  }

  useEffect(() =>{
    getMusic();
  }, []);

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
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 pt-8 gap-4 gap-y-6">

      {showMusic === false && (data.map((dev,index)=>(
        
              <div key={index} className="shadow-2xl rounded-3xl bg-white items-center text-center cursor-pointer transition transform hover:scale-110 duration-500 drop-shadow-3xl">
                  <div className="rounded-3xl">
                    <iframe src={dev.youtubeUrl} alt="" width="300" height="300" className="rounded-3xl bg-white" allowFullScreen />
                  </div>
                  <div className="text-2xl pb-1 text-black font-bold tracking-wide">{dev.name}</div>
              </div>    
            )))}    
      </div>
    </div>
  )
}
