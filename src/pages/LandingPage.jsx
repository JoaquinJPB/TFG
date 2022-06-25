import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'

import { Videogames } from '../components/Videogames'
import { Movies } from '../components/Movies'
import { Books } from '../components/Books'

const LandingPage = () => {
    return (
        <div>
                <Routes>
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/books' element={<Books />}  />
                    <Route path='/videogames' element={<Videogames />}/>
                </Routes>
        </div>
    )
}

export default LandingPage