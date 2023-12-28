import React from 'react';

const About = () => {
  return (
    <div className="background-2 page-body">
      <h1>About Me:</h1>

      <div className="about-flex-container">
        <div className="about-text">
          <h4>Name:</h4>
          <p>Sophia Wang (she/her)</p>
          <h4>Home:</h4>
          <p>
            I've lived in <strong>Denver, Colorado</strong> for more than 10 years now, but prior to this, I've lived
            in a small town called Elko, Nevada and in State College, PA too.
          </p>
        </div>
        {/* Source: original creation */}
        <div className="about-photo img-container">
          <img src="images/profile-picture-2.png" alt="second profile picture" />
        </div>
      </div>

      <div className="about-flex-container">
        <div className="about-text">
          <h4>College:</h4>
          <p>
            I'm currently attending <strong>Cornell University</strong> in{' '}
            <strong className="pink-emphasis">Ithaca, NY</strong> as a freshman planning on studying{' '}
            <strong>Computer Science</strong> in the College of Engineering with minors in Business and (potentially)
            Information Science.
            <br /> <br />I'm hoping to explore different niches of computer science, including computer vision and
            machine learning, in my future classes. I want to learn as much as possible here in college to prepare
            myself for a potential future in the tech industry.
          </p>
        </div>
        <div className="about-photo">
          {/* Source: original creation */}
          <div className="img-container">
            <img src="images/clock-tower.png" alt="clock tower photo" />
          </div>
        </div>
      </div>

      <h4>Relevant Coursework:</h4>
      <p>
        Object-Oriented Programming and Data Structures, Discrete Structures, Intro Design and Programming for the Web,
        Intro to iOS Development, Linear Algebra for Engineers, Multivariable Calculus for Engineers
      </p>

      <h4>Extracurriculars:</h4>
      <p>
        CUAir (Cornell University Unmanned Air Systems) Imaging Systems subteam, Elementary School Outreach Committee -
        SWE (Society of Women Engineers), WICC (Women in Computing at Cornell)
      </p>

      <h4>High School:</h4>
      <p>
        For high school, I attended Cherry Creek High School. There I participated in clubs such as the National Honor
        Society, Future Business Leaders of America, and more (you can find more details{' '}
        <a href="experience.html">here</a>).
        <br />
        <br />During my time there, I had a cumulative 4.75 weighted GPA and a 3.97 unweighted GPA. I was also a high
        honor roll student, a National Merit Finalist, and a recipient of the Exceptional Quality in Activities award.
      </p>

      <h4>Hobbies:</h4>
      <p>
        Besides coding, in my free time I love to read, listen to music, ski, travel, and hike! My favorite places I've
        traveled to include London, Redwood National Park, Yellowstone, and Guilin. Some of my favorite pieces of media
        include the tv show <em>The Good Place</em>, books by Stephanie Garber and by Victoria Schwab, and songs by
        Taylor Swift and by IU.
      </p>
    </div>
  );
};

export default About;