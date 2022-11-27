import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Navigation from "../components/Navigation"

import Home from "./Home"
import Advice from "./Advice"
import Breathing from "./Breathing"
import Meditation from "./Meditation"
import Recommendations from "./Recommendations"
import Videogames from "./Videogames"
import Movies from "./Movies"
import Books from "./Books"
import Login from "./Login"
import Profile from "./Profile"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setToken } from "../libraries/api/userSlice"
import AdminDashboard from "../admin/AdminDashboard"
import ModeratorDashboard from "../admin/ModeratorDashboard"
import Signup from "./Signup"
import ResetPassword from "./ResetPassword"
import NewPassword from "./NewPassword"
import Journal from "./Journal"
import JournalDetails from "./JournalDetails"

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
      <Route path="/password_reset" element={<ResetPassword />} />
      <Route path="/new_password/:token" element={<NewPassword />} />
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="journal" element={<Journal />} />
        <Route path="journal/:journalId" element={<JournalDetails />} />
        <Route path="advice" element={<Advice />} />
        <Route path="breathing" element={<Breathing />} />
        <Route path="meditation" element={<Meditation />} />
        <Route path="recommendations" element={<Recommendations />} />
        <Route path="recommendations/movies" element={<Movies />} />
        <Route path="recommendations/books" element={<Books />} />
        <Route path="recommendations/videogames" element={<Videogames />} />
        <Route path="user_id" element={<Profile />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="moderator" element={<ModeratorDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}

export default LandingPage
