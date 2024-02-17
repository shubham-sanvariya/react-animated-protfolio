import React from 'react'
import { motion } from "framer-motion"

const variants = {
    open:{
        transition : {
            staggerChildren : 0.1
        },
    },
    closed: {
        transition : {
            staggerChildren: 0.5,
            staggerDirection: -1,
        }
    }
}
const itemVariants = {
    open:{
        y : 0,
        opacity: 1,
    },
    closed: {
       y : 50,
       opacity: 0,
    }
}

const items =[
    "HomePage",
    "Service",
    "Portfolio",
    "Contact",
    "About"
];

const Links = () => {
  return (
    <motion.div className='links' variants={variants}>
        {items.map(item => (
            <motion.a href={`#${item}`} key={item} variants={itemVariants}>
                {item}
            </motion.a>
        ))}
    </motion.div>
  )
}

export default Links
