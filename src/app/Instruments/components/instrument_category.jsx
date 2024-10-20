import Link from 'next/link'
import instrumentCategoryStyle from './instrument_category.module.css'


export default function InstrumentCategory() {
  return (
    <div className={instrumentCategoryStyle.header}>
        <div className={instrumentCategoryStyle.category1}>
            <Link href={`/Instruments/wind/`} className={instrumentCategoryStyle.link}>Wind Instruments</Link>
        </div>
        <div className={instrumentCategoryStyle.category2}>
            <Link href={`/Instruments/string/`} className={instrumentCategoryStyle.link}>String Instruments</Link>
        </div>
        <div className={instrumentCategoryStyle.category3}>
            <Link href={`/Instruments/percussion/`} className={instrumentCategoryStyle.link}>Percussion Instruments</Link>
        </div>
        <div className={instrumentCategoryStyle.category4}>
            <Link href={`/Instruments/picking/`} className={instrumentCategoryStyle.link}>Picking Instruments</Link>
        </div>
    </div>
  )
}
