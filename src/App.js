import './App.css';
import React, { useState } from 'react';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged , signOut} from 'firebase/auth'
import {auth} from './firebase-config'


function App() {

  auth.currentUser.getIdToken().then(data => console.log(data))

  const [registerEmail, setRegisterEmail]= useState("")
  const [registerPassword, setRegisterPassword]= useState("")
  const [loginEmail, setLoginEmail]= useState("")
  const [loginPassword, setLoginPassword]= useState("")
  const [user, setUser] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser)
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth , registerEmail, registerPassword);
      console.log(user)
    } catch(error) {
      console.log(error.message)

    }
    setRegisterEmail('')
    setRegisterPassword('')

  }
  const logIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth , loginEmail, loginPassword);
      console.log(user)
    } catch(error) {
      console.log(error.message)

    }
    setRegisterEmail('')
    setRegisterPassword('')

  }

  const logout = async () => {
    await signOut(auth)

  }
  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input type="email" placeholder="Email..." value={registerEmail} onChange={(e) => {setRegisterEmail(e.target.value)}}/>
        <input type="password" placeholder="Password..." value={registerPassword} onChange={(e) => {setRegisterPassword(e.target.value)}}/>
        <button onClick={register}>Create User</button>
      </div>
      <div>
        <h3>Log In</h3>
        <input type="email" placeholder="Email..." onChange={(e) => {setLoginEmail(e.target.value)}}/>
        <input type="password" placeholder="Password..." onChange={(e) => {setLoginPassword(e.target.value)}}/>
        <button onClick={logIn}>Log In</button>
      </div>

      <h4>User Logged In:</h4>
      {user?.email}
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

export default App;
