import React from 'react'

const Register = () => {
  return (
    <div>
      <main>
        <div className="form-container">
          <h1>Register</h1>
          <form>
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
            <button type="submit">Register</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Register
