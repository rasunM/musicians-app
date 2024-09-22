import instrumentCardStyle from './InstrumentCard.module.css';


export default function InstrumentCard({argImg, title, description, showButton=true, action}) {
  return (
      <div className={instrumentCardStyle.cardBorder} style={{paddingBottom: !showButton ? '104px' : ''}}>
        <div className={instrumentCardStyle.card}>
          <img src={argImg} className={instrumentCardStyle.image}/>
          <div className={instrumentCardStyle.cardText} style={{height: showButton ? '60%' : '40%'}}>
              <h3 className={instrumentCardStyle.instrumentName}>
                {title}
              </h3>
              <p className={instrumentCardStyle.instrumentSubText}>
                {description}
              </p>
              {showButton ? <button className={instrumentCardStyle.button} onClick={action}>
                See more
              </button>:<></>} 
          </div>
        </div>
      </div>
  )
}
