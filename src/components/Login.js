import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [isSigninForm, setIsSigninForm]=useState(true)
    const toggleSigninForm=()=>{
        setIsSigninForm(!isSigninForm);
    }
    return(
        <div>
             <Header/>
        <div className="absolute">
           
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg" alt="here is the background"></img>
        </div>
        <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSigninForm? "Sign In": "Sign Up"}</h1>
            {!isSigninForm && <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700"/>}
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
            <button className="p-4 my-6 bg-red-700 w-full ">Sign In</button>
            <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>{isSigninForm? " New to Netflix? Sign up now.": "Already Registerd ? Sign In Now"}  </p>
        </form>
        </div>
    )

}
export default Login;