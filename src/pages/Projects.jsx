import './style.css'

const Projects = () => {
  const projectList = [

    {
      title: "Fact Learning Website",
      tech: "React.js · MongoDB · Node.js · Express.js",
      description:
        "Designed and developed a full-stack interactive learning platform that provides structured information about astronomy, the periodic table, and world countries, enabling users to explore educational content in an engaging way.",
      github: "https://github.com/SOBIKASM/happyLearning",
      visit: "https://happy-learning-iota.vercel.app/",
      img: "./Country page.png"
    },
    {
      title: "Sign Language Recognition",
      tech: "Python · OpenCV · MediaPipe · TensorFlow",
      description:
        "Developed a real-time sign language recognition system using computer vision. The model detects hand gestures from webcam and translates ASL alphabets into corresponding Indian Sign Language representations, improving accessibility.",
      github: "https://github.com/SOBIKASM/TALK-WITH-HANDS-backend",
      img: "https://tse3.mm.bing.net/th/id/OIP.K968ye3grQd_A4PjQ2ldngHaEK?pid=Api&P=0&h=180"
    },
    {
      title: "Gesture Control Projects",
      tech: "Python · OpenCV",
      description:
        "Built multiple computer vision–based applications such as finger counting, system volume control, and a virtual mouse. These projects demonstrate real-time hand tracking and gesture-based human–computer interaction.",
      github: "https://github.com/SOBIKASM/Hand-Gesture-Projects",
      img: "https://tse2.mm.bing.net/th/id/OIP.UDLULN5ar9ZqNSctwOH5DAHaEK?pid=Api&P=0&h=180"
    },
    {
      title: "Breathing Visualizer",
      tech: "React.js ",
      description:
        "A visually appealing breathing exercise visualizer built with React.js, providing a calming and interactive way to practice mindfulness and stress relief.",
      github: "https://github.com/SOBIKASM/relaxed",
      visit: "https://relaxed-ten.vercel.app/",
      img: "./relaxed.png"
    },
  ];



  return (
    <div className='project-section' id='projects'>
      <h2 className="project-title">My Projects</h2>
      <div className='project-container'>
        {projectList.map((p, index) => (
          <div className='card-container' key={index}>
            <img className="project-thumbnail" src={p.img} alt="project thumbnail" />
            <h4>{p.title}</h4>
            <p className='card-tech'>{p.tech}</p>
            <p><strong>Description:</strong> {p.description}</p>
            <div className="project-buttons">
              <a
                className="github-link"
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                className="visit-link"
                href={p.visit}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>


          </div>
        ))}
      </div>
    </div>

  )
}
export default Projects