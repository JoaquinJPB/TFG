import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Navigation from '../components/Navigation'

import Home from '../routes/Home'
import Advice from '../routes/Advice'
import Breathing from '../routes/Breathing'
import Meditation from '../routes/Meditation'
import Recommendations from '../routes/Recommendations'
import Videogames from '../routes/Videogames'
import Movies from '../routes/Movies'
import Books from '../routes/Books'

const LandingPage = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='advice' element={<Advice />} />
                    <Route path='breathing' element={<Breathing />} />
                    <Route path='meditation' element={<Meditation />} />
                    <Route path='recommendations' element={<Recommendations />} />
                    <Route path='recommendations/movies' element={<Movies />} />
                    <Route path='recommendations/books' element={<Books />} />
                    <Route path='recommendations/videogames' element={<Videogames />} />
                    <Route path="*" element={<Navigate to='/' />} />
                </Route>
            </Routes>
        </div>
    )
}

export default LandingPage