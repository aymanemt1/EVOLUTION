import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../LandingPage/navbar/navbar'
import '../auth.css'
import { FaEye, FaEyeSlash, FaMailBulk, FaMailchimp, FaUser } from 'react-icons/fa'

export const RegisterForm = () => {

   const [type, setType] = useState("password");

    const navigate = useNavigate()
    const [loadingSignup,setLoadingSignup] = useState(false)
    const [errorSignup,setErrorSignup] = useState('')
    const [signupData,setSignupData] = useState({})

    const handleSignupData = (e) => {
        setSignupData({...signupData,[e.target.name] : e.target.value})
    }

    const handleSignup = async (e) => {
        e.preventDefault()
      
            setLoadingSignup(true)
            try {
                setLoadingSignup(false)
            } catch (error) {
                setLoadingSignup(false)
            }
    }

  return (
    <>
    <Navbar />
    <div className="Wrapper-Parent">
      <div className="Wrapper">
     <h1> Create your account</h1>
            <form onSubmit={handleSignup}>
            <div className="input-box">
                <input onChange={handleSignupData} type="text" name="username" placeholder="Username"  required/>
                <FaUser className="icon" />
                </div>
            <div className="input-box">
                <input onChange={handleSignupData} type="email" name="email" placeholder="Email" required/>
                <FaMailBulk className="icon" />
               
                </div>
            <div className="input-box">
                <input onChange={handleSignupData} type="password" name="password" placeholder="Password" required/>
                <div
              className="icon"
              onClick={() => setType(type === "password" ? "text" : "password")}
            >
              {type === "password" ? <FaEyeSlash /> :<FaEye /> }
                </div>
                </div>
                {errorSignup && <div className='input_error'>{errorSignup}</div>}
                <button  type="submit">Sign Up</button>
               
                <div className="link">
                 <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
            </form>
        </div>
    </div>
    </>
  )
}
