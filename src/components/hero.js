import React from "react"

const Hero = props => {
  console.log(props)
  return (
    <section
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{props.heroText}</h1>
    </section>
  )
}

export default Hero
