import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/resultpage.css'; // Updated CSS

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score } = location.state || { score: null };

  return (
    <div className="result-container">
      <div className="result-box">
        <h1 className="result-heading">ATS Score Result</h1>
        {score !== null ? (
          <div className="score-section">
            <h2 className="score-value">Your ATS Score: <span>{score}%</span></h2>
            <p className="score-description">
              This score represents how well your resume matches the job description.
            </p>
          </div>
        ) : (
          <h2 className="no-score">No Score Available</h2>
        )}
        <button className="back-button" onClick={() => navigate('/')}>Check Another Resume</button>
      </div>
    </div>
  );
}

export default ResultPage;
