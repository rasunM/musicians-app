'use client'
import Navigation from "../components/HomePage/header";
import readMeStyles from './reachMe.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function ReachMe() {
  const router = useRouter();
  return (
    <div className={readMeStyles.body}>
      <Navigation/>
      <div className={readMeStyles.content}>
        <div className={readMeStyles.textContent}>
          <h1 className={readMeStyles.heading}>
            So, who am I?
          </h1>
          <p className={readMeStyles.psg}>
              I'm Rasun Manohara, an undergraduate at the University of Sri Jayewardenepura pursuing a degree in Information Technology. I'm passionate about mobile application development and have been honing my skills in building intuitive, user-friendly apps. In addition to mobile development, I also have experience in web development, where I enjoy crafting dynamic and responsive websites. My goal is to continue expanding my expertise in both fields, always aiming to create impactful digital solutions.
          </p>
          <p className={readMeStyles.psg}>
            Reach Me:
          </p>
        </div>
      </div>
      <div className={readMeStyles.socialLinks}>
        <FaFacebook className={readMeStyles.icon} onClick={()=>router.push('https://www.facebook.com/profile.php?id=100029767420995')}/>
        <FaLinkedin className={readMeStyles.icon} onClick={()=>router.push('https://www.linkedin.com/in/rasun-manohara-6a4208247/')}/>
        <FaInstagramSquare className={readMeStyles.icon} onClick={()=>router.push('https://www.instagram.com/rasun_manohara/?hl=en')}/>
        <FaGithub className={readMeStyles.icon} onClick={()=>router.push('https://github.com/rasunM')}/>
      </div>
    </div>
  )
}
