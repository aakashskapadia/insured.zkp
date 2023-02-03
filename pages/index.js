import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { MainNav } from '../components/Nav.js'
import { CoursesCard } from '../components/Card'
import { PrimaryButton } from '../components/Button'
import { Footer } from '../components/Footer'
// import Timeline from '@/components/timeline/timeline'

export default function Courses() {
  return (
    <>
      <Head>
        <title>insured.ZPK</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNav />
      <main className={styles.landingpage}>
        <div className={styles.welcome}>
          <div className={styles.welleft}>
            <h1>One stop shop</h1>
            <h1>for easy insurance</h1>
            <h4></h4>
            {/* <PrimaryButton title="Join Now" /> */}
          </div>

          <h2></h2>
          <div style={{ marginTop: '-30px' }} className={styles.welright}>
            <img
              // src="/welcome.gif"
              src="/mainpage.png"
              alt="Create NFT"
           
              className={styles.welcomeimg}
              priority
            />
          </div>
        </div>
      </main>
      <div className={styles.about}>
        {/* <h2>Simplied health benefits procedure to ease the patients pain :)</h2> */}
      </div>
      <div className={styles.coursespage}>
        
        <div className={styles.coursescards}>
          <CoursesCard
          
            title="Doctor"
            img="/courses/doctor.jpg"
            link="https://insider.in/invest-in-cryptocurrency-like-a-pro--jan21-2023/event"
          />
          
          <CoursesCard
            title="Patient"
            img="/courses/patient.jpg"
            link="https://insider.in/everything-you-need-to-know-about-cryptocurrency-feb5-2023/event"
          />
          <CoursesCard
            title="Insurance"
            img="/courses/insurance.jpg"
            link="https://insider.in/nft-masterclass-for-beginners-feb19-2023/event "
          />
          
        </div>
      </div>
      {/* <Timeline/> */}
      <Footer />
    </>
  )
}
