import { getAuth, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const navigate=useNavigate();
    const user=useSelector((store)=>store.user)
    
   const handleSignout=()=>{
  
    signOut(auth).then(() => {
        // Sign-out successful.

        navigate("/");
    }).catch((error) => {
        // An error happened.
        navigate("/error");
    });
   }
    
    return user &&(
<div className="absolute px-8 py-8 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="here is the logo"></img>
            {/* <img src="/images/netflix-logo.png" alt="here is the logo"></img> */}
            <div className="flex p-2">
                <img alt="Signout" className="profile-icon w-12 h-12 " src="https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABf_9vt2uJToO3_Wz6XhG_1dVxXzmDbsQxx5w_4Zh2GqVy5E78ZJhzevo5aXtp3dYvkXfC8yKfjqeHEoG_QHUDgwSrhu2P7MAIJz2-06W-KiAYgDMYpCVqnR2Nq8h15Gd8bgyDf1U9bhrhw.png?r=a4b" />
                <button onClick={handleSignout} className="font-bold ">Sign Out</button>
            </div>
        </div>
    ) 
       
        
    

}
export default Header;