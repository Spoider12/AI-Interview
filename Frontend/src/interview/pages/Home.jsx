import React from 'react'
import "../style/home.scss"

const Home = () => {
  return (
    <main className='home'>
        <div className="interview-input-group">
            <div className="left">
                <textarea name='jobDescription' id='jobDescription' placeholder='Enter your Job Description here...'></textarea>
            </div>
            <div className="right">
                <div className="input-group">
                    <label htmlFor='resume'>Upload your Resume</label>
                    <input type='file' name='resume' id='resume' accept='.pdf'/>
                </div>
                <div className="input-group">
                    <label htmlFor='selfDescription'>Self Description</label>
                    <textarea name='selfDescription' id='sefDescription' placeholder='Enter your Self Description here'></textarea>
                </div>
                <button className='generate-btn'>Generate Interview Report</button>
            </div>
        </div>
        
    </main>
  )
}

export default Home
