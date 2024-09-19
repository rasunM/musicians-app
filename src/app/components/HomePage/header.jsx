import NavigationStyle from './Navigation.module.css'
import Link from 'next/link'

export default function Navigation() {
    return (
        <div className={NavigationStyle.header}>
            <div className={NavigationStyle.wrapHeader}>
                <div className={NavigationStyle.home}> 
                    <Link href="/" legacyBehavior>
                        <a className={NavigationStyle.link}>Home</a>
                    </Link> 
                </div>
                <div className={NavigationStyle.about}>
                    <Link href="/Musicians" legacyBehavior>
                        <a className={NavigationStyle.link}>Musicians</a>
                    </Link> 
                </div>
                <div className={NavigationStyle.gallery}>
                    <Link href="/Instruments" legacyBehavior>
                        <a className={NavigationStyle.link}>Instruments</a>
                    </Link> 
                </div>
                <div className={NavigationStyle.contact}>
                    <Link href="/ReachMe" legacyBehavior>
                        <a className={NavigationStyle.link}>Reach Me</a>
                    </Link> 
                </div>
            </div>
        </div>
    )
}
