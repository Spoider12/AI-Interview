import React from 'react'
import {useNavigate, Link} from 'react-router'
const Register = () => {
    const handleSubmit = (e) =>{
    e.preventDefault();
    }
  return (
    <div>
      <main>
        <div className="form-container">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" placeholder="Enter your Username" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your Email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Type your Password" />
            </div>
            <button className='button primary-button' type="submit">Register</button>
          </form>
          <p> Already Have an Account <Link to={"/login"} >Login</Link> </p>
        </div>
      </main>
    </div>
  )
}

export default Register
