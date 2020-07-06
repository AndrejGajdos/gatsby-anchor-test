import React, { useEffect, useMemo, Fragment } from "react"

export default function TableOfContents({ html }) {
  return (
    <div className="table-of-content">
      <div className="table-of-content-wrapper">
        <Fragment>
          <span className="table-of-content-header">TABLE OF CONTENTS</span>
        </Fragment>
        <div className="ToCs" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}
