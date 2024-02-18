import "./services.scss"
import { motion } from 'framer-motion'

const Services = () => {
    return (
        <motion.div className="services">
            <motion.div className="textContainer">
                <p>
                    I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer">
                <div className="title">
                    <img src="./people.webp" alt="" />
                    <h1>
                        <b>Unique Ideas</b>
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <b>For Your</b> Business.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ex, error. Vitae itaque dolores ducimus sequi magni sed
                      explicabo, voluptas in nihil libero ea. Maxime numquam,
                       voluptatum explicabo vero iste rem!
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ex, error. Vitae itaque dolores ducimus sequi magni sed
                      explicabo, voluptas in nihil libero ea. Maxime numquam,
                       voluptatum explicabo vero iste rem!
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ex, error. Vitae itaque dolores ducimus sequi magni sed
                      explicabo, voluptas in nihil libero ea. Maxime numquam,
                       voluptatum explicabo vero iste rem!
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ex, error. Vitae itaque dolores ducimus sequi magni sed
                      explicabo, voluptas in nihil libero ea. Maxime numquam,
                       voluptatum explicabo vero iste rem!
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services