import React from 'react'
import '../style/home.scss'

const Home = () => {
  return (
    <main className="home">
      <section className="page-header">
        <h1>
          Create Your Custom <span className="highlight">Interview Plan</span>
        </h1>
        <p>
          Let our AI analyze the job requirements and your unique profile to build a winning strategy.
        </p>
      </section>

      <section className="form-grid">
        <div className="card-panel target-panel">
          <div className="card-header">
            <div>
              <h2>Target Job Description</h2>
            </div>
            <span className="badge badge-required">Required</span>
          </div>

          <textarea
            className="target-textarea"
            placeholder="Paste the full job description here... e.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'"
          />

          <div className="field-note footer-note">0 / 5000 chars</div>
        </div>

        <div className="card-panel profile-panel">
          <div className="card-header">
            <h2>Your Profile</h2>
          </div>

          <div className="upload-section">
            <div className="upload-header">
              <p>Upload Resume</p>
              <span className="badge badge-best">Best Results</span>
            </div>

            <label className="dropzone" htmlFor="resume">
              <div className="upload-icon">⬆</div>
              <p className="dropzone-title">Click to upload or drag & drop</p>
              <p className="dropzone-subtitle">PDF or DOCX | Max 5MB</p>
            </label>
            <input hidden type="file" name="resume" id="resume" accept=".pdf,.doc,.docx" />
          </div>

          <div className="or-divider">
            <span>OR</span>
          </div>

          <div className="input-group">
            <label htmlFor="selfDescription">Quick Self-Description</label>
            <textarea
              name="selfDescription"
              id="selfDescription"
              placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
            />
          </div>

          <div className="notice-box">
            Either a Resume or a Self Description is required to generate a personalized plan.
          </div>
        </div>
      </section>

      <footer className="footer-panel">
        <p>AI-Powered Strategy Generation · Approx 30s</p>
        <button className="button primary-button">Generate My Interview Strategy</button>
      </footer>
    </main>
  )
}

export default Home