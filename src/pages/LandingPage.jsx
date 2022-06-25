import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'

import { Videogames } from '../components/Videogames'
import { Movies } from '../components/Movies'
import { Books } from '../components/Books'
import Recommendations from '../components/Recommendations'

const LandingPage = () => {
    return (
        <div>
            <Routes>
                <Route path='/recommendations/movies' element={<Movies />} />
                <Route path='/recommendations/books' element={<Books />}  />
                <Route path='/recommendations/videogames' element={<Videogames />}/>
                <Route path='/recommendations' element={<Recommendations />}/>
            </Routes>
        </div>
    )
}

export default LandingPage