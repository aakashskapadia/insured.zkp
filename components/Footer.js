import Image from 'next/image'
import styles from './Footer.module.scss'

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footercontent}>
                <div className={styles.footcopy}>
                    <div className={styles.footcopycont}>
                        {/* <Image
                            // src="/logowobg.png"
                            alt="Strive"
                            width={80}
                            height={80}
                            className={styles.mainnavimg}
                            priority
                        /> */}
                        <h2>insured.ZPK</h2>
                        <h2></h2>
                    </div>
                    <p className={styles.copyR}></p>
                </div>
                <div className={styles.footsocials}>
                    {/* <div>
                    <h4>Follow Us</h4>

                    </div> */}
                    
                   
                    
                   
                </div>
                <div className={styles.footcontact}>
                   
                    
                    
                </div>
            </div>
        </div>
    )
}