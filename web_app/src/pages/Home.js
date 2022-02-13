import React, { useEffect, useState } from "react"
import HeroImg from '../assets/hero.svg'
import InspirationImg from '../assets/inspiration.svg'
import { IoReload } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Home() {

  const [quote, setQuote] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingQuote, setLoadingQuote] = useState("");
  const [quoteCopied, setQuoteCopied] = useState(false);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  async function fetchRandomQuote() {
    try {
      setLoadingQuote(true);
      setErrorMessage("");
      setQuoteCopied(false);
      const quoteObject = await axios.get("https://api.quotable.io/random");
      setQuote(quoteObject.data);
      setLoadingQuote(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoadingQuote(false);
    }
  }

  function copyQuote() {
    navigator.clipboard.writeText(quote.content + " - " + quote.author);
    setQuoteCopied(true);
  }

  return (
    <div className='md:mx-28 mx-4 text-white pt-10 pb-12'>

      <div className="flex flex-row w-full items-center justify-center">
        <div className="grid place-items-center">
          <p className="italic text-2xl text-center">"{quote.content}"</p>
          <p className="text-right text-2xl">- {quote.author}</p>
        </div>
        <div className="relative float-right cursor-pointer pl-4" onClick={fetchRandomQuote}><IoReload className="text-white w-6 h-6 font-bold" /></div>
      </div>

      <div className='md:grid md:grid-cols-2 items-center pt-10'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>Who we are</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'>Your exclusive space to practice self-care, strengthen your health and build positivity. </p>

          <Link to="/music">
            <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Listen Music</button>
          </Link>

        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={HeroImg} alt="img" width="600" height="600" />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-12 items-center'>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={InspirationImg} alt="img" width="600" height="600" />
        </div>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>What else do we have</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'> Good space is a web app where you can:
          </p>
          <ul className="text-xl">
            <li className="list-disc">Access curated video selection to boost your physical and mental health through meditation, stretches and breathing exercises. </li>
            <li className="list-disc">Get inspired everyday with words of wisdom </li>
            <li className="list-disc">Record good moments in your life with Journal</li>
            <li className="list-disc">Access curated music selection to help you relax, focus or sleep better</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
