import styles from "../../styles/NavigationBarHome.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/comute_logo.png'
import React  from 'react'

const NavigationBarHome = () => {    

    return(
        <div className={styles.Container}>
            <div className={styles.body}>
                <Link href="/">
                    <Image
                    src={Logo}
                    alt="logo"
                    width={50}
                    height={50}
                    className={styles.logo}/>
                </Link>
            <Link href='/login'><button className={styles.btn}>Log In</button></Link>
            </div>
        </div>
    )
    
}

export default NavigationBarHome


