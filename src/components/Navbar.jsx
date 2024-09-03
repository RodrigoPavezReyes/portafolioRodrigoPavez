import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { BsSubstack } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center ">
            <img className="h-9 w-auto ml-3" src={logo} alt="logo" />
        </div>

        <div className="m-7 flex items-center justify-center gap-4 text-2xl" >
       

          <a href="https://www.linkedin.com/in/rodrigopavezdev/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/RodrigoPavezReyes"target="_blank"> <FaGithub /></a>
          <a href="https://substack.com/@rodrigopavez?utm_source=user-menu"target="_blank"><BsSubstack/></a>
          <a href="https://www.instagram.com/rodrigopavezr/"target="_blank"><FaInstagram /></a>
          <a href="https://wa.me/+5493516256448"target="_blank"><BsWhatsapp/></a>
          <a href="/CvRodrigoPavezArg.pdf" download="RodrigoPavez_CV.pdf"><FaFilePdf/></a>
         
          
          
        </div>
    </nav>
  )
}

export default Navbar