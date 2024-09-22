'use client'

import HomeBodyStyle from './HomeBody.module.css';
import { useRouter } from 'next/navigation';

export default function HomeBody(){
    const router = useRouter();
    return (
        <div className={HomeBodyStyle.heroSection}>
            <div className={HomeBodyStyle.heroContent}>
                    <h1 className={HomeBodyStyle.heading}>Discover Enchanting Musicians and Instruments from Around the World</h1>
                    <ul>
                        <li>
                            Dive into the captivating world of renowned musicians, from flutists to guitarists, violinists, drummers, and more.
                        </li>
                        <li>
                            Explore their stories, albums, and live performances that captivate audiences worldwide.
                        </li>
                        <li>
                            Discover the artistry behind their music and how they push boundaries across different genres and instruments.
                        </li>
                        <li>
                            Learn about the rich history of various instruments and their influence in different cultures and musical traditions.
                        </li>
                        <li>
                            Stay updated with the latest releases, concerts, and collaborations from top musicians and instrumentalists globally.
                        </li>
                    </ul>

                
                <div className={HomeBodyStyle.buttonSection}>
                    <button className={HomeBodyStyle.button} onClick={()=>router.push("/Musicians")}>
                        Explore Now
                    </button>      
                    <button className={HomeBodyStyle.button} onClick={()=>router.push("/Instruments")}>
                        Click Here
                    </button>     
                </div>
                
        </div>
        <img src='https://1.bp.blogspot.com/_nXiG8stDCfE/S87iAc6fHsI/AAAAAAAABfc/YjY7lsGlY60/s1600/desingel_13879.jpg' className={HomeBodyStyle.image}/>
    </div>

    )
}