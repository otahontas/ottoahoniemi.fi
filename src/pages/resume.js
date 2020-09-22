import React from "react"
import Body from "../components/body"

const CVSection = ({ header, children }) => (
  <>
    <section>
      <h2>{header}</h2>
    </section>
    <section>{children}</section>
  </>
)

const Card = ({ header, content }) => (
  <aside>
    {header ? <h3>{header}</h3> : null}
    {Array.isArray(content) ? (
      content.map(c => <p key={c}>{c}</p>)
    ) : typeof content === "string" || content instanceof String ? (
      <p>{content}</p>
    ) : null}
  </aside>
)

const MainInfo = () => (
  <header>
    <h1>Otto Ahoniemi</h1>
    <p>
      <i>Computer scientist, programmer</i>
    </p>
    <p>
      &#111;&#116;&#116;&#111;&#64;&#111;&#116;&#116;&#111;&#97;&#104;&#111;&#110;&#105;&#101;&#109;&#105;&#46;&#102;&#105;
      | Github: otahontas | LinkedIn: ottoahoniemi
    </p>
    <p>
      <figure>
        <img src={"/otto.jpg"} />
      </figure>
    </p>
  </header>
)

const Interests = () => (
  <CVSection header="Interests">
    <Card content="Algorithms and optimization problems, audio programming, full-stack web-development, audio producing (both music and spoken content)." />
  </CVSection>
)

const Skills = () => {
  const skills = [
    {
      header: "Programming",
      content: [
        "+++ : Python, Javascript & Typescript (mainly React, Node & Gatsby), Shell scripting and unix tools, Java",
        "++ : Docker & Docker-compose, SQL (mainly Postgres), HTML, CSS & Sass), Git",
        "+ : AWS, Rust, Kubernetes",
      ],
    },
    {
      header: "Other",
      content: [
        "Project management, group leading",
        "Content creation and writing",
        "Audio producing (DAWs, mixing, mastering)",
        "Public speaking",
      ],
    },
    {
      header: "Languages",
      content: [
        "Finnish: native",
        "English: professional working proficiency",
        "Swedish: average",
      ],
    },
  ]

  return (
    <CVSection header="Skills">
      {skills.map(skill => (
        <Card header={skill.header} content={skill.content} />
      ))}
    </CVSection>
  )
}

const Education = () => {
  const education = [
    {
      header: "Bachelor of science, Helsinki university, 2018 - now",
      content: [
        "Major: Computer science",
        "Minor: Mathematics, statistics, social sciences",
      ],
    },
  ]

  return (
    <CVSection header="Education">
      {education.map(education => (
        <Card header={education.header} content={education.content} />
      ))}
    </CVSection>
  )
}

const Experience = () => {
  const experience = [
    {
      employer: "CSC - IT Center for Science",
      title: "Software developer trainee",
      description:
        "As a software engineer trainee at Services for sensitive data -team, I'm developing secure data services, such as data storage and repositories, authentication and authorization of users and secure cloud infrastructure.",
      time: "4/2020 - 8/2020",
    },
    {
      employer: "Helsinki University",
      title: "Course assistant",
      description:
        "Assisting students at programming workshop, mainly with for Java Programming basics course, Software Engineering course and occasionally for Data structures and algorithms course",
      time: "9/2019 - 5/2020",
    },
    {
      employer: "Jaksomedia",
      title: "Podcast producer",
      description:
        "I created podcast concepts, wrote scripts, recorded, edited and master podcasts and wrote additional content for different clients. Producing included both working as part of a bigger team some podcasts, but also handling the whole process for some podcast series. A few examples of series I worked with are Diginen iltapäivä for YLE and Elinkeinoelämän ääni for Confederation of Finnish Industries.",
      time: "2/2018 - 3/2019",
    },
    {
      employer: "Finnish venture capital association",
      title: "Communications",
      description:
        "I was in charge of content creation and communications, which meant writing short stories and blog posts, handling social media, writing newsletters and taking care of all video and photo content. Biggest projects I took part on were association’s brand and website renewal and marketing of yearly Growth Builder competition.",
      time: "8/2016 - 2/2018",
    },
    {
      employer: "Ministry of Education and Culture in Finland",
      title: "EU Desk assistant",
      description:
        "I did undergo my non-military service at ministry’s International relations department, mainly doing different sorts of assistant tasks, such as writing speeches and handling emails.",
      time: "4/2015 - 4/2016",
    },
    {
      employer: "Finnish high school students union",
      title: "President",
      description:
        "As a full-time president, I was in charge of lobbying for high school students rights and also lead 3-person lobbying expert team.",
      time: "1/2014 - 12/2014",
    },
  ]
  return (
    <CVSection header="Education">
      {experience.map(occupation => (
        <Card
          header={`${occupation.title}, ${occupation.employer}, ${occupation.time}`}
          content={occupation.description}
        />
      ))}
    </CVSection>
  )
}

const Resume = () => {
  return (
    <Body>
      <MainInfo />
      <Interests />
      <Skills />
      <Education />
      <Experience />
    </Body>
  )
}

export default Resume
