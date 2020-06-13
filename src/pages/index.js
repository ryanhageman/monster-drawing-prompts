import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Maybe You Should Draw This?!</h1>
    <Image />
  </Layout>
)

export default IndexPage
