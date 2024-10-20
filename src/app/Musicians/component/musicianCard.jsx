"use client";

import { useRouter } from 'next/navigation'; 
import musicianCardStyle from './musicianCard.module.css';
import Link from 'next/link';


export default function musicianCard({imageName, title, description, link, onClick}) {
  const router = useRouter();
  return (
    <div className={musicianCardStyle.mainComponent} onClick={onClick}>
        <img src={imageName} className={musicianCardStyle.image}/>
        <div className={musicianCardStyle.text}>
            <div className={musicianCardStyle.titleAndDescriptionOfText}>
                <h1 className={musicianCardStyle.heading}>
                    {title}
                </h1>
                <p className={musicianCardStyle.description}>
                    <span>{title}</span> {description}
                </p>
            </div>
            <div className={musicianCardStyle.clickHereLink}>
                <Link href={link} className={musicianCardStyle.link} >
                    Learn More
                </Link>
            </div>
            
            
            
        </div>
    </div>
  )
}
