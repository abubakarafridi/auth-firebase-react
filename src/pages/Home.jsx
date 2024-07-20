import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import "./Home.css"
function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignInActive, setIsSignInActive] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  
  function handleEmailChange(e) {
      setEmail(e.target.value);
    }
    
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    
    function handleMethodChange() {
      setIsSignInActive(!isSignInActive);
      setError("");
    }

  function handleSignIn(e) {
    e.preventDefault();
    if (!email || !password) {
        setError("Please enter email and password!");
    }
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate('/private');
    })
    .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
    });
}

function handleSignUp(e) {
    e.preventDefault();
    if (!email || !password) {
        setError("Please enter email and password!");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => {
        const errorMessage = error.message
        setError(errorMessage)
      });
  }

  return (
      <div className='form-container'>
        <form className='form'>
          <h2>{isSignInActive ? <span style={{color:"green"}}>Signin</span> : <span style={{color: "#2196f3"}}>Signup</span>}</h2>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            onChange={handleEmailChange}
            placeholder="Enter Your Email"
            className='input-field'
          />
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            onChange={handlePasswordChange}
            placeholder="Enter Your Password"
            className='input-field'
          />
          {isSignInActive ? <button onClick={handleSignIn} className='button sign-in-btn'>Signin</button> : <button onClick={handleSignUp} className='button sign-up-btn'>Signup</button>}
          {error && <p className='error-message'>{error}</p>}
          <p className='form-switch'>
            {isSignInActive
              ? "Don't have an account? "
              : 'Already have an account? '}
            <span onClick={handleMethodChange} className='form-switch-link'>
              {isSignInActive ? 'signup' : 'Signin'}
            </span>
          </p>
        </form>
      </div>
      /* {isSignIn && <div className="signup-signin-form">
          <h2>login</h2>
            <label>Email</label>
            <input type="email" id="emailInput" onChange={handleEmailChange} required/>
            <label>Password</label>
            <input type="password" id="passwordInput" onChange={handlePasswordChange} required/>
            <button onClick={handleSignIn}>login</button>
            <a onClick={handleIsSignIn}>do you have an account? SignUp</a>
        </div>
        }
        
        {!isSignIn && <div className="signup-signin-form">
          <h2>Sign Up</h2>
            <label>Email</label>
            <input type="email" id="emailInput" onChange={handleEmailChange} required/>
            <label>Password</label>
            <input type="password" id="passwordInput" onChange={handlePasswordChange} required/>
            <button onClick={handleSignUp}>Sign Up</button>
            <a onClick={handleIsSignIn}>already have an account? SignIn</a>
        </div>} */
  );
}

export default Home;
