import React from "react"
import TableOfContents from "./table-of-contents"

const TauDocuments = ({ content, tableOfContent, disableTableOfContents }) => {
  return (
    <React.Fragment>
      <div className="tau-documents-container">
        <div className="docs-content-wrap">
          <div className="docs-content" style={{ margin: "0 30px" }}>
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>
          {!disableTableOfContents && (
            <TableOfContents
              class="table-of-content-list"
              html={tableOfContent}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default TauDocuments
