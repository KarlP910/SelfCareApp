import React from 'react'
import JournalImg from '../assets/journal.svg'
import firebase from 'firebase';
import { HiX } from 'react-icons/hi';
import { useEffect } from 'react';
import { collection, addDoc,getDocs } from "firebase/firestore"; 

export default function Journal() {

  const [showDetails, setShowDetails] = React.useState(false);
  const [data, setdata] = React.useState([]);

  //UseState for adding a new journal 
  const [newName, setNewName]= React.useState("");
  const [newDate, setNewDate] = React.useState("");
  const [newDescription,setNewDescription]= React.useState("");
  const [showAdd,setAdd]= React.useState(false);
  

  const ref = firebase.firestore().collection("Journal");


  function getJournal(){
    ref.onSnapshot((querySnapshot) =>{
      const items = []
      querySnapshot.forEach((doc) =>{
        items.push(doc.data());
      });
     setdata(items)
     setShowDetails(true)
    })
  }


  //Pretty close to it but for some reason I can't import the addDoc maybe use setDoc but I'm pretty tired so i'll check it out tomorrow if you haven't
  const createJournal = async () => {
  //  await addDoc(ref, {name:newName, date:newDate,description: newDescription})

  }

  useEffect(() =>{
    getJournal();
  }, []);

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
            <h1 className="text-xl text-justify">Seeing your progress can also give you a serious confidence boost. You can feel proud looking back at the challenges you faced and seeing how far you’ve come.</h1>
            <button className='bg-secondary py-2 px-8 rounded-md text-lg my-4' onClick={() => setAdd(false)}>Add</button>
          </div>
        </div>
      </div>
      {showAdd === true ? (
        <div>
          <input placeholder='Name...'
            onChange={(event) => {
              setNewName(event.target.value);
            }} />
          <input placeholder='Date ...'
                onChange={(event) => {
            setNewDate(event.target.value)}}/>
          <input placeholder='Description..'
          onChange={(event) => {
            setNewDescription(event.target.value)}}/>
          <button onClick={createJournal}>Create Journal</button>
        </div>
      ): null}
      <div className="flex flex-wrap justify-around w-full px-6 gap-y-6">

      {showDetails === true && (data.map((dev,index)=> (
        <div key={index} className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-5 py-3 w-96 mx-auto border border-white bg-white">
          <div className="w-full bg-white flex flex-col p-3">
            <h1 className="font-black text-gray-800 text-2xl">{dev.name}</h1>
            <h2 className="font-black text-gray-400 text-lg">{dev.date}</h2>
            
            <h1 className="font-black text-gray-800 text-xl py-2">{dev.description}</h1>
            <div className='flex justify-around space-x-2 mx-4'>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg' onClick={() => setShowDetails(false)}>View</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Edit</button>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg'>Delete</button>
            </div>
          </div>

        </div>
          )))}
            {showDetails === false && (data.map((dev,index)=> (
      <div>
      <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-24 z-50 outline-none focus:outline-none"
      >
        <div className="relative my-6 mx-auto w-screen">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-solid rounded-t">
              <div className="text-2xl font-base tracking-wide cursor-pointer">
                Guided Meditation for Positive Energy, Relaxation, Peace
              </div>

              <button className="absolute right-6" onClick={() => setShowDetails(true)} aria-hidden="false" aria-label="button">
                <HiX className="h-7 w-7" aria-hidden="false" />
              </button>

            </div>

            <div className="grid justify-center">
              <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
            </div>

            <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
            >
              <iframe src="https://www.youtube.com/embed/syx3a1_LeFo" height={400} width={700} />
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
    </div>
          )))}
            </div>
          </div>
  )
}
