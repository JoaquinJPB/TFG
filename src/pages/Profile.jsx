import { useSelector } from "react-redux"
import UserDataLayout from "../components/UserDataLayout"

const Profile = () => {
  const user = useSelector((state) => state.user)
  return (
    <UserDataLayout
      userName={user.data.username}
      userEmail={user.data.email}
    />
  )
}

export default Profile
