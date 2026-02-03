import './style.css';
import { FiDownload } from "react-icons/fi";
import { useState } from 'react';

const Resume = () => {
  const [loading, setLoading] = useState(false);

  const downloadResume = async () => {
    setLoading(true);
    try {
      const response = await fetch("/SOBIKASM-resume.pdf");
      if (!response.ok) throw new Error("Network response was not ok");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "SOBIKASM-resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error(error);
      alert("Download failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="resume-section" id="resume">
      <h2>Resume</h2>
      <p className="resume-text">
        A concise overview of my education, technical skills, and projects in
        web development and AI-based applications.
      </p>

      <button onClick={downloadResume} disabled={loading} className="btn">
        {loading ? "Downloading..." : "Download Resume"}
        <FiDownload size={20} style={{ marginLeft: "8px" }} />
      </button>
    </section>
  );
};

export default Resume;
