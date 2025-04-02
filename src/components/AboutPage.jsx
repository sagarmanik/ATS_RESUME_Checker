import React from 'react';
import '../styles/aboutpage.css'; // Import CSS for styling
import goodResume from '../images/goodresume.png';
import badresume from '../images/badresume.jpg';
function AboutPage() {
  return (
    <div className="about-container">
      <h2>About ATS Resume</h2>
      <p>
        ATS (Applicant Tracking Systems) help companies filter resumes based on job descriptions. To create an
        <span className="highlight"> ATS-friendly resume</span>, follow these best practices:
      </p>

      <div className="tips-section">
        <div className="tip">
        <img src={goodResume} alt="Good ATS Resume" className="tip-image" />
          <h3>Good Resume Example</h3>
          <p>✔ Use standard headings like "Work Experience", "Skills", and "Education".</p>
          <p>✔ Include job-specific keywords from the job description.</p>
          <p>✔ Submit your resume in ATS-friendly formats like PDF or DOCX.</p>
        </div>

        <div className="tip">
          <img src={badresume} alt="Bad ATS Resume" className="tip-image" />
          <h3>Common Mistakes to Avoid</h3>
          <p>❌ Avoid using tables, graphics, or columns.</p>
          <p>❌ Don't use fancy fonts or colors—stick to standard fonts like Arial or Times New Roman.</p>
          <p>❌ Avoid including irrelevant personal details like photos or too many social links.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;