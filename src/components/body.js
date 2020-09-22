import React from "react"
import Header from "./header"
import Footer from "./footer"

const Body = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Body
