import "./navbar.scss"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration: 0.5}}
            >Shuham Sanwariya
            </motion.span>
            <div className="social">
                  <a href="https://www.facebook.com/ronit.savariya?mibextid=ZbWKwL">
                    <img src="/facebook-64.png" alt="" />
                  </a>
                  <a href="https://www.instagram.com/ronitsavariya?utm_source=qr&igsh=MWg2Njh5NXhyNjYyeA==">
                    <img src="/instagram-64.png" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/in/shubham-sanvariya-88870526a">
                      <img src="/linkIn.png" alt="" />
                  </a>
                  <a href="https://x.com/RonitSanvariya?t=t1Gf2JiY5L75TukK8JKsvw&s=08">
                    <img src="/X.png" alt="" />
                  </a>
            </div>
        </div>
    </div>
  )
}
