import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'


const items = [
  {
    id: 1,
    title: "SpringFramework lakeSide Hotel",
    img: "./springlogo.webp",
    link: "https://github.com/shubham-sanvariya/Spring_lake_side_hotel_backend",
    desc: `Welcome to SpringFramework LakeSide Hotel,
     an elegant and efficient hotel booking site designed
      to elevate the hospitality experience. This project
       showcases the seamless integration of cutting-edge
        technologies within the SpringFramework ecosystem,
         including Lombok, JDBC, and Spring Web,
          coupled with MySQL database management
          .At its core, SpringFramework LakeSide Hotel
           offers a user- friendly interface for booking
            accommodations with ease.Leveraging the power
             of Spring Framework's versatile architecture,
              the site provides a comprehensive calendar-based
               booking system, ensuring a hassle-free reservation
                process for guests.`
  },
  {
    id: 2,
    title: "SpringFramework Pet Clinic",
    img: "./springlogo.webp",
    link: "https://github.com/shubham-sanvariya/SpringFramework-Pet-Clinic",
    desc: `In my portfolio, I present a significant project
     developed using the Spring Framework, known as the Spring 
     Pet Clinic. This project encapsulates a sophisticated
      implementation of a pet clinic management system,
       featuring intricate models such as Pet, PetType,
        Owner, Vet, and Speciality. Through meticulous design
         and coding, I established robust relationships between
          these models, ensuring seamless data flow and efficient
           management within the clinic ecosystem.

One of the noteworthy aspects of this project is the utilization
 of Mockito for testing purposes. By employing Mockito,
  I rigorously tested the functionalities of the system,
   guaranteeing its reliability and stability under
    various scenarios. This comprehensive testing
     approach reflects my commitment to delivering high-quality
      software solutions.`
  },
  {
    id: 3,
    title: "SpringFramework recipe app",
    img: "./springlogo.webp",
    link: "https://github.com/shubham-sanvariya/spring5-recipe-app",
    desc: `Within my portfolio, I proudly present my Spring Framework Recipe App, a dynamic web application designed to ignite culinary creativity and streamline recipe management. This project showcases my proficiency in Java development, Spring Framework, and database management, along with my passion for creating intuitive and efficient software solutions.

At the heart of this project lies an array of meticulously crafted models tailored to specific tasks. These models, including Difficulty, Category, Ingredients, Notes, and Recipe, form the backbone of the application, enabling users to seamlessly create, organize, and discover recipes.`
  },
  {
    id: 4,
    title: "SpringFramework Excel To Database",
    img: "./springlogo.webp",
    link: "https://github.com/shubham-sanvariya/Spring-Framework-excel-to-database",
    desc: `In my portfolio, I showcase a cutting-edge project that exemplifies my proficiency in Spring Framework and database integration – the Spring Framework Excel to Database solution. This project demonstrates my ability to leverage advanced technologies to streamline data management processes, enhance efficiency, and ensure seamless interoperability between disparate systems.

At the core of this project is the seamless transfer of data from Excel files to a MySQL database, facilitated by the Apache POI-OOXML dependency. Through meticulous implementation and integration with Spring Framework, I developed a robust and reliable solution that automates the extraction, transformation, and loading (ETL) process, minimizing manual effort and reducing the risk of errors.`
  },
]

const Single = ({ item }) => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>see demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio