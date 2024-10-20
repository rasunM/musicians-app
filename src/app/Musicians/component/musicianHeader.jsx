import Link from 'next/link'
import musicianHeaderStyle from './musicianHeader.module.css'

export default function MusicianHeader() {
  return (
    <div className={musicianHeaderStyle.header}>
        <div className={musicianHeaderStyle.category1}>
            <Link href={`/Musicians/united_states/`} className={musicianHeaderStyle.link}>UNITED STATES</Link>
        </div>
        <div className={musicianHeaderStyle.category2}>
            <Link href={`/Musicians/united_kingdom/`} className={musicianHeaderStyle.link}>UNITED KINGDOM</Link>
        </div>
        <div className={musicianHeaderStyle.category3}>
            <Link href={`/Musicians/india/`} className={musicianHeaderStyle.link}>INDIA</Link>
        </div>
        <div className={musicianHeaderStyle.category4}>
            <Link href={`/Musicians/latin_america/`} className={musicianHeaderStyle.link}>LATIN AMERICA</Link>
        </div>
        <div className={musicianHeaderStyle.category5}>
            <Link href={`/Musicians/africa/`} className={musicianHeaderStyle.link}>AFRICA</Link>
        </div>
    </div>
  )
}
