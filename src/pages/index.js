import React from "react"
import Body from "../components/body"

const SocialButton = ({to, children}) => <a href={to}><strong>{children}</strong></a>

const Home = () => {
  return (
    <Body>
      <header>
        <h1>Hi, I'm Otto!</h1>
        <p>
          I develop web-related stuff with <b>Python</b> and <b>Javascript</b> and study Computer Science at Helsinki University. Currently looking for new opportunities.
        </p>
      </header>
      <section>
        <SocialButton to="https://github.com/otahontas">Github</SocialButton>
        <SocialButton to="https://www.linkedin.com/in/ottoahoniemi">LinkedIn</SocialButton>
        <SocialButton to="https://matrix.to/#/@otahontas:ottoahoniemi.fi">Matrix</SocialButton>
        <SocialButton to="https://twitter.com/otahontas">Twitter</SocialButton>
      </section>
    </Body>
  )
}

export default Home
