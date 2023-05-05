import React, { useState } from 'react';

import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';

const Login = () => {
    const [user,setUser]=useState(null)

    // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleAuthProvider=new GoogleAuthProvider();
const githubAuthProvider=new GoogleAuthProvider();

const handleGoogleSign=()=>{
    signInWithPopup(auth,googleAuthProvider)
    .then(result=>{
        const loginUser=result.user;
        console.log(loginUser)
        setUser(loginUser)
    })
.catch(error=>{
    console.log('error',error.message)
})


    
}


const handleGithubSign=()=>{
    signInWithPopup(auth,githubAuthProvider)
    .then(result=>{
        console.log("ff")
        const loginUser=result.user;
        console.log(loginUser)
        setUser(loginUser)
    })
.catch(error=>{
    console.log('error',error.message)
})

}

const handleSignOut=()=>{
    signOut(auth)
    .then(result=>{
     //   const loggedUser=result.user;
      //  console.log(loggedUser)
        setUser(null)
    
    })
    .catch(error=>{
        console.log(error.message)
    })
}
    return (
        <div>


{/* user thakle signout dekhabe otherwisena */}
 {user?
          <button onClick={handleSignOut}>sign out</button>:
          <>
           <button onClick={handleGoogleSign}>google login</button>
           <button onClick={handleGithubSign}>github login</button>
          </>
  
 }
           {user && <div>
            <h3>{user.displayName}</h3>
            <h4>{user.email}</h4>
            <img src={user.photoURL} alt="" />
           </div>
           }
        </div>
    );
};

export default Login;