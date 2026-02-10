import './style.css';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2>Education</h2>

      <div className="education-grid">
        <div className="education-card">
          <h3>B.E – Computer Science and Engineering</h3>
          <p className="edu-institute">
            Bannari Amman Institute of Technology, Sathyamangalam
          </p>
          <p className="edu-duration">2023 – 2027</p>
          <p className="edu-score">
            CGPA: <strong>7.97</strong> (till 5th semester)
          </p>
        </div>

        <div className="education-card">
          <h3>Higher Secondary Certificate (HSC)</h3>
          <p className="edu-institute">
            Little Flower Matric. Hr. Sec. School, Sathyamangalam
          </p>
          <p className="edu-duration">2022 – 2023</p>
          <p className="edu-score">
            Percentage: <strong>97.16%</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
