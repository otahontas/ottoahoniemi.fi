import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Container = styled.header`
  display: flex;
  height: 5rem;
  justify-content: flex-end;
`

const Nav = styled.nav`
  align-items: center;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  margin-bottom: 7rem;
`

const StyledListItem = styled.li`
  display: inline-block;
  margin: 0 0.5rem;
  position: relative;
  text-align: left;

  a {
    color: DarkSlateBlue;
    display: inline-block;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.5rem;
  }

  a:hover {
    filter: brightness(1.2);
    text-decoration: underline;
  }
`

const listStyle = css`
  list-style: none;
  padding: 0;
`

const ListLink = ({to, children}) => (
  <StyledListItem>
    <Link to={to}>{children}</Link>
  </StyledListItem>
)

const Header = () => {
  return (
    <Container>
      <Nav>
        <ul css={listStyle}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
        </ul>
      </Nav>
    </Container>
  )
}

export default Header
