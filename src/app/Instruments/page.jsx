import InstrumentCard from "./components/instrument_card"
import styles from './Instruments.module.css';
import Navigation from "../components/HomePage/header";

export default function Instruments(){
    return (
        <div className={styles.instrumentPage}>
            <Navigation/>
            <h2 className={styles.heading}>
                WOOD WIND INSTRUMENTS
            </h2>
            <h3 className={styles.subheading}>
                World Largest wood wind collections you can view in here
            </h3>
            <div className={styles.cardSection}>
                <InstrumentCard argImg={'https://th.bing.com/th/id/R.4e14aeb8f856f22764df64a93de5e6b6?rik=oywPIJT95EF%2bpQ&pid=ImgRaw&r=0'}/>
                <InstrumentCard argImg={'https://th.bing.com/th/id/R.53d3e3887e7393a47e6f3a550070c3a2?rik=4e4BzNno49RLPQ&pid=ImgRaw&r=0'}/>
                <InstrumentCard argImg={'https://th.bing.com/th/id/R.f5a96cdcb9e8219b7cf72cd1918d6eff?rik=vmbo5FQ6bfJwuA&riu=http%3a%2f%2f1panflute.com%2f79-thickbox_default%2fschool-pan-flute.jpg&ehk=uK41aRgntOziyK%2f8oJQ3eydqTRGTcYOPtb%2fteTs3ArA%3d&risl=&pid=ImgRaw&r=0'}/>
                <InstrumentCard argImg={'https://th.bing.com/th/id/R.4e14aeb8f856f22764df64a93de5e6b6?rik=oywPIJT95EF%2bpQ&pid=ImgRaw&r=0'}/>
                <InstrumentCard argImg={'https://th.bing.com/th/id/R.53d3e3887e7393a47e6f3a550070c3a2?rik=4e4BzNno49RLPQ&pid=ImgRaw&r=0'}/>
                <InstrumentCard argImg={'https://th.bing.com/th/id/R.f5a96cdcb9e8219b7cf72cd1918d6eff?rik=vmbo5FQ6bfJwuA&riu=http%3a%2f%2f1panflute.com%2f79-thickbox_default%2fschool-pan-flute.jpg&ehk=uK41aRgntOziyK%2f8oJQ3eydqTRGTcYOPtb%2fteTs3ArA%3d&risl=&pid=ImgRaw&r=0'}/>
                <InstrumentCard argImg={'https://th.bing.com/th/id/R.4e14aeb8f856f22764df64a93de5e6b6?rik=oywPIJT95EF%2bpQ&pid=ImgRaw&r=0'}/>
                <InstrumentCard argImg={'https://th.bing.com/th/id/R.53d3e3887e7393a47e6f3a550070c3a2?rik=4e4BzNno49RLPQ&pid=ImgRaw&r=0'}/>
                <InstrumentCard argImg={'https://th.bing.com/th/id/R.f5a96cdcb9e8219b7cf72cd1918d6eff?rik=vmbo5FQ6bfJwuA&riu=http%3a%2f%2f1panflute.com%2f79-thickbox_default%2fschool-pan-flute.jpg&ehk=uK41aRgntOziyK%2f8oJQ3eydqTRGTcYOPtb%2fteTs3ArA%3d&risl=&pid=ImgRaw&r=0'}/>
                <InstrumentCard argImg={'https://th.bing.com/th/id/R.4e14aeb8f856f22764df64a93de5e6b6?rik=oywPIJT95EF%2bpQ&pid=ImgRaw&r=0'}/>
                <InstrumentCard argImg={'https://th.bing.com/th/id/R.53d3e3887e7393a47e6f3a550070c3a2?rik=4e4BzNno49RLPQ&pid=ImgRaw&r=0'}/>
                <InstrumentCard argImg={'https://th.bing.com/th/id/R.f5a96cdcb9e8219b7cf72cd1918d6eff?rik=vmbo5FQ6bfJwuA&riu=http%3a%2f%2f1panflute.com%2f79-thickbox_default%2fschool-pan-flute.jpg&ehk=uK41aRgntOziyK%2f8oJQ3eydqTRGTcYOPtb%2fteTs3ArA%3d&risl=&pid=ImgRaw&r=0'}/>
                
            </div>

        </div>
    )
}