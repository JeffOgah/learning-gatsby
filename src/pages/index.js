import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div>
    <Header />
    <Link to="/about"><h2>About</h2></Link>
    Hello Gatsby!
  </div>
)
