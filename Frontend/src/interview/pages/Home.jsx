import React from 'react'
import "../style/home.scss"

const Home = () => {
  return (
    <main className='home'>
        <div className='left'>
            <textarea name='jobDescription' id='jobDescription' placeholder='Enter your job Description here'></textarea>
        </div>
        <div className="right">
            <div className="input-group">
                <label htmlFor='resume'> Upload your Resume</label>
                <input type='file' name='resume' id='resume' accept='pdf'/>
            </div>
            <div className="input-group">
                <label htmlFor='selfDescription'>Slef Description</label>
                <textarea name='selfDescription' id='selfDescription' placeholder='Describe yourself in few Sentences...'></textarea>
            </div>
            <button className='generate-btn'>Generate Innterview Report</button>
        </div>
    </main>
  )
}

export default Home
