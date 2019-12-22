import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ContentBlock from "../components/content-block"

const PageTemplate = ({ pageContext }) => {
  return (
    <Layout>
      {pageContext.title !== "Home" ? <h1>{pageContext.title}</h1> : null}
      {pageContext.layout.map(block => {
        const { fieldGroupName } = block
        switch (fieldGroupName) {
          case "page_Pagecontent_Layout_Hero":
            return <Hero {...block} />
          case "page_Pagecontent_Layout_ContentBlock":
            return <ContentBlock {...block} />

          default:
            return null
        }
      })}
    </Layout>
  )
}

export default PageTemplate
