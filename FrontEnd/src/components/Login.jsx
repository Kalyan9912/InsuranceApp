import React, { useState } from 'react';
import Dashboard from './Dashboard';

function Login() {

  const [login,setLogin] = useState(false);

  const submit = () => {
      setLogin(true);
  }

  if(login){
      return <Dashboard/>
  }

  return (
    <div style={{padding:'50px'}}>
      <h2>Insurance Login</h2>

      <input
       placeholder="username"
      /><br/><br/>

      <input
       type="password"
       placeholder="password"
      /><br/><br/>

      <button onClick={submit}>
        Login
      </button>
    </div>
  );
}

export default Login;
