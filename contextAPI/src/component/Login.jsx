import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {
    const [username,setusername]=useState("");
    const [password,setPassword]=useState("");
    const {setUser}=useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password});
    }
    
  return (
     <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            value={username}
           onChange={(e)=>setusername(e.target.value)}
           placeholder='enter the user name'
          />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
             value={password}
           onChange={(e)=>setPassword(e.target.value)}
            
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Login</button>
      </form>
     
    </div>

  )
}

export default Login
