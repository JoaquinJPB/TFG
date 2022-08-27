import { useSelector } from "react-redux";
import UserDataLayout from "../components/UserDataLayout";
import favItems from '../favItems.json'

const Profile = () => {
  const user = useSelector((state) => state.user)
  console.log(user.user)
  return (
      <UserDataLayout userName={user.user.username} userEmail={user.user.email} itemsFav={favItems}/>
  );
};

export default Profile;
