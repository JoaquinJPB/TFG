import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Navigation from "../components/Navigation"

import Home from "../routes/Home"
import Advice from "../routes/Advice"
import Breathing from "../routes/Breathing"
import Meditation from "../routes/Meditation"
import Recommendations from "../routes/Recommendations"
import Videogames from "../routes/Videogames"
import Movies from "../routes/Movies"
import Books from "../routes/Books"
import Login from "../components/Login"
import Profile from "../routes/Profile"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setToken } from "../libraries/api/userSlice"
import AdminDashboard from "../admin/AdminDashboard"
import Signup from "../components/Signup"

const LandingPage = () => {
  const userAuth = useSelector((state) => state.user)
  const userSession = sessionStorage.getItem("token")
  const dispatch = useDispatch()

  useEffect(() => {
    if (userAuth.token === undefined && userSession !== null) {
      dispatch(setToken(userSession))
    }
  }, [userAuth, userSession, dispatch])

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="advice" element={<Advice />} />
        <Route path="breathing" element={<Breathing />} />
        <Route path="meditation" element={<Meditation />} />
        <Route path="recommendations" element={<Recommendations />} />
        <Route path="recommendations/movies" element={<Movies />} />
        <Route path="recommendations/books" element={<Books />} />
        <Route path="recommendations/videogames" element={<Videogames />} />
        <Route path="user_id" element={<Profile />} />
        <Route path="admindashboard" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}

export default LandingPage
