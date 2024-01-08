import React from "react";

const experiences = [
  {
    title: "Google | Student Training in Engineering Program (STEP) Intern",
    date: "May 2023 - Aug. 2023",
    points: ["a"],
  },
  {
    title: "Cornell University Unmanned Air Systems (CUAir) | Imaging Systems Subteam Member",
    date: "October 2022 - Present",
    points: [
      "A software subteam responsible for the acquisition and management of aerial images taken during the plane's flight.",
      "Currently onboarding: attending workshops for Git, React, and Rust. Created a frontend & backend target-marking web app using React, Springboot, and HTML GET and POST requests to send and receive target information.",
    ],
  },
  {
    title: "Google | Computer Science Summer Institute (CSSI) | Online",
    date: "July 2022 - Aug. 2022",
    points: [
      "Participated in a 4-week intensive computer science summer program for high-achieving students",
      "Completed an introductory project-based HTML/CSS and JavaScript curriculum taught by Google engineers",
      "Configured 3 unique partner coding projects in JavaScript by using concepts such as variables, data types, and functions",
      "Attended product design, resume development, and software engineering interview workshops",
      "Created a live Monkeypox case tracker that displays worldwide case numbers, cases per country, an interactive map, and data charts with a partner using HTML, CSS, Javascript, libraries such as Google Charts and JQuery, and APIs",
      "Delivered a collaborative final project presentation that included a live demonstration to Google employees and community leaders",
    ],
  },
  {
    title: "STEM Mentorship Academy 501 (c)(3) | Senior Officer | Virtual Position (based in NC)",
    date: "June 2021 - Present",
    points: [
      "Helped further the mission of providing K-12 students, especially those of disadvantaged backgrounds, with mentorship, guidance, and tutoring in succeeding in STEM by coordinating mentorship opportunities with Google Forms and more",
      "Developed 45+ detailed STEM activities for teachers and mentors to use in in-person and virtual mentorship",
      "Contacted 3000+ people for mentee recruitment and curated the weekly newsletters",
      "Helped craft press releases for local NC news outlets and social media posts (i.e. Instagram)",
    ],
  },
  {
    title: "Future Business Leaders of America (FBLA) | District 5 Officer, Member",
    date: "Aug. 2021 - April 2022, Aug. 2019 - May 2022 (member)",
    points: [
      "Organized the keynote speaker, arranged lunch catering, and spoke at the District Leadership Conference (500+ students)",
      "Helped direct a product-development workshop for 200-300 FBLA members",
      "Competed at District, State, and National conferences in business topics such as E-Business (created a baking subscription site) and Public Service Announcement (crafted a video and presentation on vaping, State Champion)",
      "6x District Medalist, 3x State Top 10, 1x Nationals Competitor for live events (presentations) and objective tests",
    ],
  },
  {
    title: "Denver Chinese School | Math Enrichment Teacher",
    date: "Aug. 2020 - May 2022",
    points: [
      "Created lesson plans and engaging activities such as Fraction Bingo to teach second- to fourth-grade level math (long division, geometry, etc) to a group of 6-8 elementary-age students (1st Year: Virtual, 2nd Year: In-Person)",
    ],
  },
  {
    title: "National Honor Society (NHS) | Publicity and Records Executive Board",
    date: "Aug. 2021 - May 2022",
    points: [
      "Helped organize induction and other school events (eg: Brain Bowl fundraiser for Bags of Fun helping pediatric patients)",
      "Tracked hours on Google Sheets for all 300 members and closely managed ~30 members (acted as their point of contact)",
    ],
  },
];

function ExperienceItem({ title, date, points }) {
  return (
    <div className="exp-body">
      <h4>{title}</h4>
      <h5>{date}</h5>
      {points && (
        <ul>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Experience() {
  return (
    <div className="background-2 page-body">
      <h3>Current & Past Experiences</h3>
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </div>
  );
}

export default Experience;