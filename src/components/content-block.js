import React from "react"

const ContentBlock = props => {
  console.log(props)
  return (
    <>
      <h2>{props.blockTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: props.blockContent }}></div>
    </>
  )
}

export default ContentBlock
