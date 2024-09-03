import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { RiJavascriptFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiHandlebarsdotjs } from "react-icons/si";
import { animate, inView, motion, transform } from "framer-motion";



const iconVariants = (duration) => ({
    initial: {y: -15},
    animate: {
        y: [10, -20],
        transition: {
            duration: duration,
            easy:"linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});

const Technologies = () => {
  return <div className="border-b border-neutral-800 pb-24">
            <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technologies
            
            </motion.h2>

            <motion.div 
            whileInView={{opacity:1,X:0}} 
            initial={{opacity:0, x:-50}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-end gap-4">
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptFill className="text-7xl text-yellow-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaWordpress className="text-7xl text-blue-500"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNode className="text-7xl text-green-600"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoTypescript className="text-7xl text-blue-600"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiHandlebarsdotjs className="text-7xl"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaFigma className="text-7xl text-red-400"/>
                </motion.div>

                
            </motion.div>
        </div>
  
}

export default Technologies