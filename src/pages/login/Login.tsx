import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.scss"


const Login = () => { 
 
 const [showSignIn, setShowSignIn] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [number, setNumber] = useState('');
  
  const handleToggleSigns = () => {
    setShowSignIn((prev) => !prev);
  };

  const navigate = useNavigate();

  
  /*const handleSignIn =(e) => {
    e.preventDefault()
    // Perform sign-in logic here...
    // For now, let's just navigate to '/Layout' when the "Sign In" button is clicked
    navigate('/Layout');
  };*/

  /*const handleSignUp = (e) => {
    e.preventDefault();
    // Perform sign-up logic here...
  };*/

  const loginStyle = {
  fontFamily: 'sans-serif',
  background:'#002147',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: '0 30px',
  overflow: 'hidden'
  }

  const signInStyle = {
   border: '1px solid #96c0f0',
   textAlign: 'center',
   padding: '40px 100px',
   background:'#fff',
   borderRadius: '10px',
   color: '#05014a'
  }

  const signOutStyle ={

    border: '1px solid #96c0f0',
    textAlign: 'center',
    padding: '20px 120px',
    background: '#fff',
    borderRadius: '10px',
    color: '#05014a'
  }

  const inputStyle = {
    marginTop: '10px',
    padding: '10px',
    border: '1px solid #05014a',
    borderRadius: '8px',
    width: '100%'
  } 

  const buttonStyle = {
    marginTop: '20px',
    margiLeft: '10px',
    borderRadius: '8px',
    padding: '10px',
    width: '100px',
    background: '#200ebe',
    border: 'none',
    color: '#fff',
    cursor: 'pointer'
  }

  const spanStyle = {
    textDecoration: 'underline',
    cursor: 'pointer' 
  }

  const htagStyle = {
    fontSize: '30px',
    padding: '0'
  }
  
  return (
    <>
      <div className='form form-content' style={loginStyle}>
        { !showSignIn ? (
          <div className='sign-in' style={signInStyle}>
            <h2 style={htagStyle}>Sign In</h2>
            <p className='signs-desc'>Log into your existing account</p>
            <form id='form' className='signin-form' /*onSubmit={handleSignIn}*/>
              <div className='username'>
                <input
                  type='text'
                  placeholder='Username'
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                style={inputStyle}
                />
              </div>
              <div className='password'>
                <input
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    console.log('Password', e.target.value);
                  }}
                style={inputStyle}
                />
              </div>
              <button className='btn' type='submit' style={buttonStyle}>Sign In</button>
              <p>
                Don't have an account?{' '}
                <span onClick={handleToggleSigns} style={spanStyle}>SignUp</span>
              </p>
            </form>
          </div>
        ) : (
            <section className='register'>
                        <div className='sign-up' style={signOutStyle}>
                            <h2 style={htagStyle}>Sign Up</h2>
                            <p className='signs-desc'>Create an account with us</p>
                            <form id="form" className='signup-form'>
                                <div className='email'>
                                    <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle}></input>
                                </div>
                                <div className='username'>
                                    <input type='text' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)} style={inputStyle}></input>
                                </div>
                                <div className='password'>
                                    <input type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle}></input>
                                </div>
                                <div className='confirm password'>
                                    <input type='text'  placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={inputStyle}></input>
                                </div>
                                <div className='number'>
                                    <input type='text' placeholder='Mobile Number' value={number} onChange={(e) => setNumber(e.target.value)} style={inputStyle}>
                                    </input></div>
                                <button style={buttonStyle}>Sign Up</button>
                                <p>Already have an account?{" "}
                                    <span onClick={handleToggleSigns}>SignIn</span>
                                </p>
                            </form>
                        </div>
                    </section>
        )}
      </div>
    </>
  )
}

export default Login                                                                                                                                                                                                                                                                                                                                                                                                