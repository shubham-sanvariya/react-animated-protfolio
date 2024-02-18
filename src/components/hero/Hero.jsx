import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>SHUBHAM SANWARIYA</h2>
          <h1>Java-React Full Stack devloper</h1>
          <div className="buttons">
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <div className="imagecontainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero