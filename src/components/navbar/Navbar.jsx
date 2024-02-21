import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >Shuham Sanwariya
        </motion.span>
        <div className="social">
          <a href="https://github.com/shubham-sanvariya?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src="/github-64.png" alt="" />
          </a>
          <a href="https://www.facebook.com/ronit.savariya?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <img src="/facebook-64.png" alt="" />
          </a>
          <a href="https://www.instagram.com/ronitsavariya?utm_source=qr&igsh=MWg2Njh5NXhyNjYyeA==" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-64.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shubham-sanvariya-88870526a" target="_blank" rel="noopener noreferrer">
            <img src="/linkIn.png" alt="" />
          </a>
          <a href="https://x.com/RonitSanvariya?t=t1Gf2JiY5L75TukK8JKsvw&s=08" target="_blank" rel="noopener noreferrer">
            <img src="/X.png" alt="" />
          </a>

        </div>
      </div>
    </div>
  )
}
