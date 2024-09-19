import HomeBodyStyle from './HomeBody.module.css';

export default function HomeBody(){
    return (
        <div className={HomeBodyStyle.heroSection}>
            <div className={HomeBodyStyle.heroContent}>
                <h1 className={HomeBodyStyle.heading}>Discover Enchanting Flutists and Share Their Magic Globally</h1>
                    <ul>
                        <li>
                            Dive into the enchanting world of renowned flutists and other musicians. 
                        </li>
                        <li>
                            Explore their stories, albums, and live performances that captivate audiences worldwide.
                        </li>
                        <li>
                            Discover the artistry behind their music and how they push boundaries across different genres.
                        </li>
                        <li>
                            Learn about the rich history of the flute and its influence in various cultures and musical traditions.
                        </li>
                        <li>
                            Stay updated with the latest releases, concerts, and collaborations from top flutists around the globe.
                        </li>
                    </ul>
                
                <div className={HomeBodyStyle.buttonSection}>
                    <button className={HomeBodyStyle.button}>
                        Explore Now
                    </button>      
                    <button className={HomeBodyStyle.button}>
                        Reach Me
                    </button>     
                </div>
                
        </div>
        <img src='https://1.bp.blogspot.com/_nXiG8stDCfE/S87iAc6fHsI/AAAAAAAABfc/YjY7lsGlY60/s1600/desingel_13879.jpg' className={HomeBodyStyle.image}/>
    </div>

    )
}