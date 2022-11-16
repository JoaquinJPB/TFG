import { useSelector } from "react-redux"
import UserDataLayout from "../components/UserDataLayout"

const Profile = () => {
  const user = useSelector((state) => state.user)
  console.log(user.user)
  return (
    <UserDataLayout
      userName={user.data.username}
      userEmail={user.data.email}
    />
  )
}

export default Profile
