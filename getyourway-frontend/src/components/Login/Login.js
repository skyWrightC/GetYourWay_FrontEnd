import React, { useState } from 'react';
import {SERVER_URL} from '../constants.js';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify'; 
// ToastContainer
import 'react-toastify/dist/ReactToastify.css';
import { Home } from '@material-ui/icons';

const Login = () => {
  const [user, setUser] = useState({username: '', password: ''})
  const [isAuthenticated, setAuth] = useState(false);
 
  const handleChange = (event) => {
    setUser({...user, [event.target.name] : event.target.value})
  }

  





  const login = () => {
    //let jsonuser = JSON.stringify(user); 
  fetch(SERVER_URL + 'login', {
      
      method: 'POST',
      headers: { "content-type": "application/json"},
      body: JSON.stringify(user)
  
    // fetch(SERVER_URL + 'login', {
    //   method: 'POST',
    //   body: JSON.stringify(user)
    })
    .then(res => {
      const jwtToken = res.headers.get('Authorization');
      if (jwtToken !== null) {
        sessionStorage.setItem("jwt", jwtToken);
        setAuth(true);
      }
      else {
        toast.warn("Check your username and password", {
          position: toast.POSITION.TOP_CENTER
        }) 
      }
    })
    .catch(err => console.error(err)) 
  }  

  if (isAuthenticated === true) {
    return (<Home />)
  }
  else {
    return (
      <div className='login'>
            <h2>Login</h2>
            {/* below will enact the function crated earlier with the same name */}
            <form>
                <label>Please enter a Username: </label>
                <input
                  type="text"
                  placeholder="username"
                  required
                    // when the username field is typed into,
                    //it should trigger the below code and update the State of the username to match what was typed in
                  onChange={handleChange}
                  />
                  <br />
                  <label>Please choose a Password: </label>
                <input
                //   onSubmit={errorHandle}
                  type="text"
                  placeholder="password"
                  required
                  onChange={handleChange}
                  />
                  <br />
                  <button onClick={login}>Submit</button>
            </form>
        </div>
    );
  }
}

export default Login;

// {/* <div classname='loginform'>
//         <TextField 
//           name="username" 
//           label="Username" 
//           onChange={handleChange} /><br/> 
//         <TextField 
//           type="password" 
//           name="password" 
//           label="Password" 
//           onChange={handleChange} /><br/><br/> 
//         <Button 
//           variant="outlined" 
//           color="primary" 
//           onClick={login}>
//           Login
//         </Button>
//         <ToastContainer autoClose={1500} /> 
//       </div> */}