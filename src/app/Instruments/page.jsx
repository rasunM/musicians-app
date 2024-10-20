'use client'

import InstrumentCard from "./components/instrument_card"
import styles from './Instruments.module.css';
import Navigation from "../components/HomePage/header";
import InstrumentCategory from "./components/instrument_category";
import { useRouter } from "next/navigation";

export default function Instruments(){
    const router = useRouter();
    return (
        <div className={styles.instrumentPage}>
            <Navigation/>
            <InstrumentCategory/>
            <h2 className={styles.heading}>
               MUSIC INSTRUMENTS
            </h2>
            <h3 className={styles.subheading}>
                World Largest Music Instruments collections you can view in here
            </h3>
            <div className={styles.cardSection}>
                <InstrumentCard argImg={'/images/Instruments/display_items_instrument_page/wind.jpeg'} title={"Wind Instruments"} description={"Instruments that produce sound through air vibration."} action={()=>router.push('/Instruments/wind/')}/>
                <InstrumentCard argImg={'/images/Instruments/display_items_instrument_page/string.jpeg'} title={"String Instruments"} description={"Instruments producing sound by vibrating strings."} action={()=>router.push('/Instruments/string/')}/>
                <InstrumentCard argImg={'/images/Instruments/display_items_instrument_page/percussion.jpg'} title={"Percussion Instruments"} description={"Instruments creating rhythm through striking or shaking."} action={()=>router.push('/Instruments/percussion/')}/>
                <InstrumentCard argImg={'/images/Instruments/display_items_instrument_page/picking.jpeg'} title={"Picking Instruments"} description={"Plucked string instruments creating distinct melodic tones."} action={()=>router.push('/Instruments/picking/')}/>
            </div>

        </div>
    )
}