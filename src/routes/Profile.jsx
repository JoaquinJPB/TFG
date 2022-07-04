
import UserDataLayout from "../components/UserDataLayout";
import favItems from '../favItems.json'

const Profile = () => {
  return (
      <UserDataLayout userName={"Usuario"} fullName={"Usuario apellido1 apellido2"} userEmail={"pruebacorreo@gmail.com"} itemsFav={favItems}/>
  );
};

export default Profile;
