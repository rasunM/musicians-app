import Link from 'next/link';
import styles from './catchAll.module.css'; // Adjust the import to your actual CSS file

const ErrorPage = () => {
    return (
        <div className={styles.mainFrame}>
            <div className={styles.subMainFrame}>
              <h1>Wrong Attempt. Please Try Again</h1>
              <div className={styles.wrapHeader}>
                  <Link href="/" legacyBehavior>
                      <button className={styles.link}>BACK TO HOME</button>
                  </Link>
              </div>
            </div>
        </div>
    );
};

export default ErrorPage;
