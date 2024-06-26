import React, { useLayoutEffect } from 'react';
import PhotoGallery from "./PhotoGallery";

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <div className="background-2 page-body">
        <div className="about-flex-container">
          <h4>About Me:</h4>
          <p>My name is Sophia (she/her) and I'm from Denver, Colorado! <br />
            I'm currently attending <strong className="pink-emphasis">Cornell University </strong>
            and studying computer science in the College of Engineering.
            <br /><br />
            I'm passionate in exploring many different niches of computer science,
            whether that may be machine learning, data science, full-stack development,
            systems infrastructure, and more.
          </p>
        </div>
        <div className="about-flex-container">
          <h4>Technical Skills</h4>
          <ul>
            <li><strong>Frontend: </strong> React, Redux, SwiftUI, HTML, CSS, Javascript, Typescript</li>
            <li><strong>Backend: </strong> Java, Python, OCaml, SQL, Prisma, Spring</li>
            <li><strong>Libraries/Frameworks: </strong> JUnit, NumPy, SciPy, Scikit-learn, MYSQL, SQLAlchemy, JQuery</li>
            <li><strong>Tools: </strong> Git, Docker, Google Cloud Platform, AWS, VSCode, IntelliJ, XCode</li>
          </ul>
        </div>

        <div className="about-flex-container">
          <h4>Relevant Coursework</h4>
          <ul>
            <li><strong className="snd-emphasis">FA22 -</strong> O-OP & DSA (Java), Multivariable Calculus</li>
            <li><strong className="snd-emphasis">SP23 -</strong> Discrete Structures, Design & Programming for the Web (HTML, CSS, JS), Intro to iOS (SwiftUI)</li>
            <li><strong className="snd-emphasis">FA23 -</strong> DSA & Functional Programming (OCaml), Data Science (Python), Intro to Backend (Flask), Probability Models and Inference</li>
            <li><strong className="snd-emphasis">SP24 -</strong> Analysis of Algorithms (Java), Machine Learning (Python, NumPy, PyTorch), Computer Vision (NumPy, Pillow) </li>
            <li><strong className="snd-emphasis">FA24 -</strong> Computer System Org. & Programming (C), Systems Programming (C, C++), Computer Networks (Python) </li>
          </ul>
        </div>

        <div className="about-flex-container">
          <h4>Campus Involvement</h4>
          <ul>
            <li><strong className="pink-emphasis">Cornell University Unmanned Air Systems</strong> (CUAir) - Imaging Systems Subteam</li>
            <li><strong className="pink-emphasis">Women in Computing At Cornell</strong> (WICC) - Faculty Relations Co-Director, Technical Committee</li>
            <li><strong className="pink-emphasis">Society of Women Engineers</strong> (SWE) - Elementary Outreach Committee Member</li>
            <li><strong className="pink-emphasis">Association of Computer Science Undergraduates</strong> (ACSU) - Social Officer</li>
          </ul>
        </div>
      </div>
      <PhotoGallery />
    </div>
  );
};

export default About;