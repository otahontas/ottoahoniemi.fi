import React from "react"
import Body from "../components/body"

const occupations = [
  { employer: "CSC - IT Center for Science",
    title: "Software developer trainee",
    description: "As a software engineer trainee at Services for sensitive data -team, I'm developing secure data services, such as data storage and repositories, authentication and authorization of users and secure cloud infrastructure.",
    time: "4/2020 - 8/2020"
  },
  { employer: "Helsinki University",
    title: "Course assistant",
    description: "Assisting students at programming workshop, mainly with for Java Programming basics course, Software Engineering course and occasionally for Data structures and algorithms course",
    time: "9/2019 - 5/2020"
  },
  { employer: "Jaksomedia",
    title: "Podcast producer",
    description: "I created podcast concepts, wrote scripts, recorded, edited and master podcasts and wrote additional content for different clients. Producing included both working as part of a bigger team some podcasts, but also handling the whole process for some podcast series. A few examples of series I worked with are Diginen iltapäivä for YLE and Elinkeinoelämän ääni for Confederation of Finnish Industries.",
    time: "2/2018 - 3/2019"
  },
  { employer: "Finnish venture capital association",
    title: "Communications",
    description: "I was in charge of content creation and communications, which meant writing short stories and blog posts, handling social media, writing newsletters and taking care of all video and photo content. Biggest projects I took part on were association’s brand and website renewal and marketing of yearly Growth Builder competition.",
    time: "8/2016 - 2/2018"
  },
  { employer: "Ministry of Education and Culture in Finland",
    title: "EU Desk assistant",
    description: "I did undergo my non-military service at ministry’s International relations department, mainly doing different sorts of assistant tasks, such as writing speeches and handling emails.",
    time: "4/2015 - 4/2016"
  },
  { employer: "Finnish high school students union",
    title: "President",
    description: "As a full-time president, I was in charge of lobbying for high school students rights and also lead 3-person lobbying expert team.",
    time: "1/2014 - 12/2014"
  },
]


const Resume = () => {
  return (
    <Body>
      <h1>About me</h1>
      <p>
        I'm nowadays mostly a programmer, but have been involved in many great projects / workplaces during recent years. These, to name a few, include producing podcasts, hosting a weekly radio show about startups, producing music and leading the Finnish high school students union.
      </p>
      <hr />
      <h1>Resume</h1>
      <p>
        <i>Computer scientist, programmer</i>
      </p>
      <p>
        <img src={'/otto.jpg'} alt="Resume picture" />
      </p>

      <h2>Currently</h2>
      <p>
      Studying Computer science and assisting courses at Helsinki University. Also building open source hobby projects and making music.
      </p>

      <h2>Interests</h2>
      <p>
      Algorithms and optimization problems, audio programming, full-stack web-development, audio producing (both music and spoken content).
      </p>
      <h2>Skills</h2>

      <h3>Programming related</h3>
      <ul>
        <li>+++ : Python, Javascript & Typescript (mainly React, Node & Gatsby), Shell scripting and unix tools, Java</li>
        <li>++ : Docker & Docker-compose, SQL (mainly Postgres), HTML, CSS & Sass)</li>
        <li>+ : AWS, Rust, Kubernetes</li>
      </ul>

      <h3>Other</h3>
      <ul>
        <li>Project management, group leading</li>
        <li>Content creation and writing</li>
        <li>Audio producing (DAWs, mixing, mastering)</li>
        <li>Public speaking</li>
      </ul>

      <h3>Languages</h3>
      <ul>
        <li>Finnish: native</li>
        <li>English: professional working proficiency</li>
        <li>Swedish: average</li>
      </ul>

      <h2>Education</h2>
      <h3>Bachelor of science, Helsinki university, 2018 - now</h3>
      <ul>
        <li>Major: Computer science</li>
        <li>Minor: Mathematics, statistics, social sciences</li>
      </ul>

      <h2>Experience</h2>
      {occupations.map(occupation => 
      <>
        <h3>{occupation.title}, {occupation.employer}, {occupation.time}</h3>
        <p>{occupation.description}</p>
      </>
      )}
    </Body>
  )
}

export default Resume
