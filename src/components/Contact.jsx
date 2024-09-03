import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
  <div className="border-b border-neutral-900 pb-20">
    <motion.h2 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration:0.5}}
    className="my-10 text-center text-4xl4">Contact me</motion.h2>
    <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}
        className="my-4">{CONTACT.address}</motion.p>

        <div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="my-4 flex flex-wrap justify-center items-center">
            
        <BsWhatsapp/>
        <a
        href="https://wa.me/+5493516256448"
        target="blank"
        
        >{CONTACT.phone}</a>
            </motion.div>
        </div>

       <a href="#" className="no-underline font-bold">{CONTACT.email}</a>
    </div>
    </div>
  )
}

export default Contact