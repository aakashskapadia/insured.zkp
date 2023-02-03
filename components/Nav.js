import Image from 'next/image'
import styles from './Nav.module.scss'
import { mainNavData } from '../data/nav'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

export function MainNav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  const router = useRouter()
  const currentRoute = router.pathname
  return (<>
    <div className={click ? styles.mainContainer : ""}  onClick={()=>Close()} />
    <nav className={styles.navbar} onClick={e => e.stopPropagation()}>
      <div className={styles.navContainer}>
        <div exact to="/" className={styles.navLogo}>
          {/* <img src='./strivelogo.jpg' alt=''/> */}
          <a className={styles.navlogo}>insured.ZKP</a>
        </div>
        <div className={click ? styles.active2: styles.navMenu}>
          <div className={styles.navItem}>
            <div
              exact
              to="/"
              activeClassName={styles.active}
              className={!click ? styles.navLinks2 : styles.navLinks}
              onClick={click ? handleClick : null}
            >
              
            </div>
          </div>
          <div className={styles.navItem}>
            <div
              exact
              to="/"
              activeClassName={styles.active}
              className={!click ? styles.navLinks2 : styles.navLinks}
              onClick={click ? handleClick : null}
            >
              
            </div>
          </div>
          <div className={styles.navItem}>
            <div
              exact
              to="/"
              activeClassName={styles.active}
              className={!click ? styles.navLinks2 : styles.navLinks}
              onClick={click ? handleClick : null}
            >
              
            </div>
          </div>
         
        </div>
        <div className={styles.navIcon} onClick={handleClick}>
          {/* <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
           */}
           <img src={!click ? './menu.png':'./close.svg'} alt=''/>
        </div>
      </div>
    </nav>
  </>
  )
}