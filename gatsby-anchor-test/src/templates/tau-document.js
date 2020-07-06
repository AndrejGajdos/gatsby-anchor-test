import React from "react"
import TauDocuments from "../components/tau-documents"
import { graphql } from "gatsby"

export default function Template({ data }) {
  return (
    <div>
      <main
        style={{
          transition: "color 0.2s ease-out, background 0.2s ease-out",
        }}
      >
        <div
          style={{
            position: "relative",
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TauDocuments
            content={data.markdownRemark.html}
            title={data.markdownRemark.frontmatter.title}
            slug={data.markdownRemark.fields.slug}
            tableOfContent={data.markdownRemark.tableOfContents}
            disableTableOfContents={
              data.markdownRemark.frontmatter.disableTableOfContents
            }
          />
        </div>
      </main>
    </div>
  )
}

export const tauDocumentQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
        disableTableOfContents
      }
      fields {
        slug
      }
    }
  }
`
