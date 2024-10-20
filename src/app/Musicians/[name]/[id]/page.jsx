'use client'
import templateOfDetails from './TemplateOfDetails.module.css';
import templateOfDetailsStyle from "./TemplateOfDetails.module.css";
import dataSetMusician from '../../data/musicianData'
import { useRouter } from 'next/navigation';

export default function TemplateOfDetails({params}) {
    const country = dataSetMusician[decodeURIComponent(params.name)];
    if (!country) {
        return <div>Country not found</div>;
    }
    const musician = country.musicianData.filter(m => {
        console.log(m.name.toLowerCase().replace(/\s+/g, '_'))
        return m.name.toLowerCase().replace(/\s+/g, '_') === decodeURIComponent(params.id).toLowerCase()
    }
      );
    console.log(params.id)
    console.log(musician)
    if (!musician) {
        return <div>Musician not found</div>;
    }

    const router = useRouter();
  return (    
    <div className={templateOfDetailsStyle.heroSection} key={musician[0].name}>
        <h2 className={templateOfDetails.heading}>
            {musician[0].name}
        </h2>
        <div className={templateOfDetailsStyle.horeContentAndImages}>
            <div className={templateOfDetailsStyle.heroContent}>
                <h1 className={templateOfDetailsStyle.subheading}>1. Biography and Background</h1>
                <ul className={templateOfDetailsStyle.ul}>
                    <li>
                        <span className={templateOfDetails.spanText}>Full Name:</span> {musician[0].fullName}
                    </li>
                    <li>
                        <span className={templateOfDetails.spanText}>Origin:</span> Born on {musician[0].origin}
                    </li>
                    <li>
                        <span className={templateOfDetails.spanText}>Early Influences:</span> {musician[0].earlyInfluence}
                    </li>
                    <li>
                        <span className={templateOfDetails.spanText}>Musical Genre:</span> {musician[0].musicalGenre}
                    </li>
                    <li>
                        <span className={templateOfDetails.spanText}>Instruments:</span> {musician[0].instruments}
                    </li>
                </ul>

                <h1 className={templateOfDetailsStyle.subheading}>2. Career Highlights</h1>
                <ul className={templateOfDetailsStyle.ul}>
                    <li>
                        {musician[0].careerHighlights}
                    </li>
                </ul>

                <h1 className={templateOfDetailsStyle.subheading}>3. Current and Future Endeavors</h1>
                <ul className={templateOfDetailsStyle.ul}>
                    <li>
                    {musician[0].currentAndFutureDetails}
                    </li>
                </ul>

                                    
                <div className={templateOfDetailsStyle.buttonSection}>
                    <button className={templateOfDetailsStyle.button} onClick={()=> router.push("/Musicians")}>
                        Explore More Musicians
                    </button>           
                </div>
            </div>
        
            <img src={`/images/Instruments/${country.imagesFolderName}/${musician[0].name.replace(/\s+/g, '')}.jpeg`} className={templateOfDetailsStyle.image} />
        
        </div>
        
        
        
    </div>
  )
}
