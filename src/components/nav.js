import React from "react"
import { Link as GatsbyLink } from "gatsby"

const Link = ({to, children}) => (
  <li><GatsbyLink to={to}>{children}</GatsbyLink></li>
)

const Nav = () => {
  return (
      <nav class="navigation">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
          </ul>
      </nav>
  )
}

export default Nav
