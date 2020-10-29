import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DrawingPrompt from "../components/DrawingPrompt"

const IndexPage = () => (
  <Layout>
    <SEO title="Draw This" />
    <DrawingPrompt />
  </Layout>
)

export default IndexPage
