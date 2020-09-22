import React from "react"
import styled from "@emotion/styled"
import Header from "./header"
import Footer from "./footer"

const Container = styled.div`
  background: white;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 1rem 0;
  margin: 3rem auto;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
`

const Body = ({ children }) => {
  return (
      <Container>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      </Container>
  )
}

export default Body
