import React from 'react'
import HeroImg from '../assets/hero.svg'
import InspirationImg from '../assets/inspiration.svg'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='md:mx-28 mx-4 text-white pt-8 md:pt-20 pb-12'>
      <div className='md:grid md:grid-cols-2 items-center'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>Who we are</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'>About the web app</p>

          <Link to="/music">
            <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Listen Music</button>
          </Link>

        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={HeroImg} alt="img" width="600" height="600" />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 items-center'>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={InspirationImg} alt="img" width="600" height="600" />
        </div>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>What else do we have</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'>Features such as Web Monetization, Hedera</p>
        </div>
      </div>
    </div>
  )
}
