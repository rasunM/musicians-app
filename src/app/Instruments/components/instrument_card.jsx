import instrumentCardStyle from './InstrumentCard.module.css';


export default function InstrumentCard({argImg}) {
  return (
    <div className={instrumentCardStyle.card}>
        <img src={argImg} className={instrumentCardStyle.image}/>
        <div className={instrumentCardStyle.cardText}>
            <h3 className={instrumentCardStyle.instrumentName}>
              Instrument
            </h3>
            <p className={instrumentCardStyle.instrumentSubText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptate!
            </p>
            <button className={instrumentCardStyle.button}>
              See more
            </button>
        </div>
    </div>
  )
}
