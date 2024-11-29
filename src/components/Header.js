import {  signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/useSlice";
import {headerLogo} from "../utils/constants"
const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector((store)=>store.user)
    
   const handleSignout=()=>{
  
    signOut(auth).then(() => {
        // Sign-out successful.

        //navigate("/");
    }).catch((error) => {
        // An error happened.
        navigate("/error");
    });
   }
   
 
   useEffect(() => {
       
      const unsubscribe= onAuthStateChanged(auth, (user) => {
          
           if (user) {
               // User is signed in, see docs for a list of available properties
               // https://firebase.google.com/docs/reference/js/auth.user
               const { uid,email,displayName,photoURL } = user;
               dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
               
               navigate("/browse");
               // ...
           } else {
               // User is signed out
               // ...
               dispatch(removeUser());
               navigate("/")
             
           }
       });
       //this will be unsubscribe when component unmount
       return()=>unsubscribe();
   }, [])
    
    return user &&(
<div className="absolute px-8 py-8 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img className="w-44" src={headerLogo} alt="here is the logo"></img>
            {/* <img src="/images/netflix-logo.png" alt="here is the logo"></img> */}
            <div className="flex p-2 text-white">
                <img alt="Signout" className="profile-icon w-12 h-12 " src="https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABf_9vt2uJToO3_Wz6XhG_1dVxXzmDbsQxx5w_4Zh2GqVy5E78ZJhzevo5aXtp3dYvkXfC8yKfjqeHEoG_QHUDgwSrhu2P7MAIJz2-06W-KiAYgDMYpCVqnR2Nq8h15Gd8bgyDf1U9bhrhw.png?r=a4b" />
                <button onClick={handleSignout} className="font-bold ">Sign Out</button>
            </div>
        </div>
    ) 
 

}
export default Header;