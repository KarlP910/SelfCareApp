import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Music from '../pages/Music';
import Journal from '../pages/Journal';
import Quote from '../pages/Quote';
import Exercise from '../pages/Exercise';
import Profile from '../pages/Profile';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/music" element={<Music />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/quote" element={<Quote />} />
                <Route path="/exercise" element={<Exercise />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
