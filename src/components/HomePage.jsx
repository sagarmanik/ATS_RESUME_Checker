import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/homepage.css'; // Import the new CSS

function HomePage() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume || !jobDescription) {
      alert('Please upload a resume and enter a job description.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('jobDescription', jobDescription);

    try {
      const response = await axios.post('http://localhost:8080/api/ats/score', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/result', { state: { score: response.data.score } });
    } catch (error) {
      console.error('Error submitting resume', error);
      alert('Error calculating ATS score. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <div className="form-box">
        <h1>ATS Score Checker</h1>
        <form onSubmit={handleSubmit}>
          <label>Upload Resume (PDF):</label>
          <input type="file" onChange={handleResumeChange} accept=".pdf" required />

          <label>Job Description:</label>
          <textarea
            value={jobDescription}
            onChange={handleJobDescriptionChange}
            rows="6"
            placeholder="Paste job description here..."
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Calculating...' : 'Check ATS Score'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
