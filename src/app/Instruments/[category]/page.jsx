'use client'

import InstrumentCard from "../components/instrument_card";
import styles from '../Instruments.module.css';
import Navigation from "../../components/HomePage/header";
import InstrumentCategory from "../components/instrument_category";
import instrumentData from '../data/instruments';
import { useParams } from 'next/navigation';

export default function Instruments() {
    const { category } = useParams();

    console.log(category)
    
    const instrumentCategory = instrumentData[category]; 
    if (!instrumentCategory) {
        return <div>Category not found</div>;
    }

    return (
        <div className={styles.instrumentPage}>
            <Navigation />
            <InstrumentCategory />
            
            {/* Dynamically display heading and subheading */}
            <h2 className={styles.heading}>
                {instrumentCategory.heading}
            </h2>
            <h3 className={styles.subheading}>
                {instrumentCategory.subheading}
            </h3>

            <div className={styles.cardSection}>
                {/* Map over the instrument data to render each card */}
                {instrumentCategory.instrumentData.map((instrument, index) => {
                    return <InstrumentCard
                        key={index} // Ensure each card has a unique key
                        argImg={`/images/Instruments/${category}/${instrument.title.replace(/\s+/g, '')}.jpeg`}
                        title={instrument.title}
                        description={instrument.description}
                        showButton={false}
                    />
}               )}
            </div>
        </div>
    );
}
