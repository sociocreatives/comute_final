import React from 'react'
import styles from "../../styles/AboutHero.module.css"
import Image from 'next/image'
import Logo from '../../public/SVG/whitelogo.svg'
import Traffic from '../../public/SVG/traffic-police.svg'
// uis
import Robbers from '../../public/SVG/robbers.svg'
import Police from '../../public/SVG/police.svg'
import TrafficJam from '../../public/SVG/traffic.svg'
import Maintenance from '../../public/SVG/Maintenance.svg'
import Weighbridge from '../../public/SVG/weighbridge.svg'
import Popular from '../../public/SVG/popular-joint.svg'
import Gathering from '../../public/SVG/gathering.svg'
import Findme from '../../public/SVG/findme.svg'
import Tlight from '../../public/tlight.png'



const AboutHero = () => {
  return (
    <div className={styles.container}>
    <div className={styles.mainhead}>
      <div  className={styles.heading}>
      <div className={styles.logoarea}>
          <Image
          src={Logo}
          alt="car"
          width={200}
          height={50}
          className={styles.logo}/>
        </div>
        <h1>What a perfect time to devore/manger a suitable and commendable e-book.</h1>
      </div>
      <Image
        src={Traffic}
        alt="car"
        width={1000}
        height={500}
        className={styles.traffic}/>
    </div>
    <div className={styles.mapping}>
        <Image src={Tlight} alt="car" width={100} height={200} className={styles.tlight}/>
        <h2>Commit yourself to comute as a solo comuter or a jocomuter and enjoy your anxious free commuting while listining to your favorite country music or gospel song from your preferred artist and let your visitor finds </h2>
    </div>
    <div className={styles.interfaces}>
                <Image src={Robbers} alt="car" width={140} height={140} className={styles.traffic}/>
                <Image src={Police} alt="car" width={140} height={140} className={styles.traffic}/>
                <Image src={TrafficJam} alt="car" width={140} height={140} className={styles.traffic}/>
                <Image src={Maintenance} alt="car" width={140} height={140} className={styles.traffic}/>
                <Image src={Weighbridge} alt="car" width={140} height={140} className={styles.traffic}/>
                <Image src={Popular} alt="car" width={140} height={140} className={styles.traffic}/>
                <Image src={Gathering} alt="car" width={140} height={140} className={styles.traffic}/>
                <Image src={Findme} alt="car" width={140} height={140} className={styles.traffic}/>
                </div>
                
         </div>
  )
}

export default AboutHero

//  <Image
// src={Car}
// alt="car"
// width={200}
// height={300}
// className={styles.logo}/>
// <h1>About</h1>