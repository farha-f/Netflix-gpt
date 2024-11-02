import { useState,useRef } from "react";
import Header from "./Header";
import {checkValiDate} from "../utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/useSlice";


const Login=()=>{
  const dispatch=useDispatch();
    const [isSigninForm, setIsSigninForm]=useState(true);
    const navigate=useNavigate();
   // const name=useRef(null);
   const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const[errorMesage,setErrorMessage]=useState();
    const toggleSigninForm=()=>{
        setIsSigninForm(!isSigninForm);
    }
    const handdleButtonClick=()=>{
      const message= checkValiDate(email.current.value,password.current.value);
      setErrorMessage(message);
      if(message) return ;
      if(!isSigninForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            console.log(auth.currentUser,"auth.currentUser");
            const { uid,email,displayName,photoURL } = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browse");
            // Profile updated!
            // ...
          }).catch((error) => {
            setErrorMessage(error.message);
            // An error occurred
            // ...
          });

          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);

          // ..
        });
      }
      else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
       
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
      }
    }
    return(
        <div>
             <Header/>
        <div className="absolute">
           
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg" alt="here is the background"></img>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSigninForm? "Sign In": "Sign Up"}</h1>
            {!isSigninForm && <input type="text" ref={name}  placeholder="Name" className="p-4 my-4 w-full bg-gray-700"/>}
            <input type="text"  placeholder="Email Address" ref={email} className="p-4 my-4 w-full bg-gray-700"/>
        
            <input type="password" placeholder="Password" ref={password} className="p-4 my-4 w-full bg-gray-700"/>
            <p className="text-red-500 font-bold text-lg py-3">{errorMesage}</p>
            <button className="p-4 my-6 bg-red-700 w-full " onClick={handdleButtonClick}> {isSigninForm? "Sign In": "Sign Up"} </button>
            <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>{isSigninForm? " New to Netflix? Sign up now.": "Already Registerd ? Sign In Now"}  </p>
        </form>
        </div>
    )

}
export default Login;