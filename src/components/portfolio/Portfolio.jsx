import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring } from 'framer-motion'


const items = [
  {
    id: 1,
    title: "SpringFramework lakeSide Hotel",
    img: "./spring.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vitae blanditiis veritatis unde sed, quidem sapiente aspernatur itaque fugit autem totam. Laborum nisi voluptate cum magnam. Quo a quaerat aliquam."
  },
  {
    id: 2,
    title: "SpringFramework Pet Clinic",
    img: "./spring.png",
    desc: ""
  },
  {
    id: 3,
    title: "SpringFramework recipe app",
    img: "./spring.png",
    desc: ""
  },
  {
    id: 4,
    title: "SpringFramework Excel To Database",
    img: "./spring.png",
    desc: ""
  },
]

const Single = ({item}) => {
  return (
    <section>
      {item.title}
    </section>
  )
}

const Portfolio = () => {

  const ref = useRef();

  const {scrollYProgress} = useScroll({
     target: ref,
      offset: ["end end","start start"]
    });

    const scaleX = useSpring(scrollYProgress,{
      stiffness : 100,
      damping : 30,
    })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio