import React from "react"
import Body from "../components/body"
import SEO from "../components/seo"

const SocialButton = ({ to, children }) => (
  <a href={to}>
    <strong>{children}</strong>
  </a>
)

const Home = () => {
  return (
    <>
      <SEO title="Home" />
      <Body>
        <header>
          <h1>Hi, I'm Otto!</h1>
          <p>
            I develop web-related stuff and study Computer Science at Helsinki
            University. I'm nowadays mostly a programmer, but have been involved
            in many great projects / workplaces during recent years. These, to
            name a few, include producing podcasts, hosting a weekly radio show
            about startups, producing music and leading the Finnish high school
            students union.
          </p>
          <p>I'm currently looking for interesting new opportunities!</p>
        </header>
        <section>
          <SocialButton to="https://github.com/otahontas">Github</SocialButton>
          <SocialButton to="https://www.linkedin.com/in/ottoahoniemi">
            LinkedIn
          </SocialButton>
          <SocialButton to="https://matrix.to/#/@otahontas:ottoahoniemi.fi">
            Matrix
          </SocialButton>
          <SocialButton to="https://twitter.com/otahontas">
            Twitter
          </SocialButton>
        </section>
      </Body>
    </>
  )
}

export default Home
