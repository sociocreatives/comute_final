import styles from "../../styles/NavigationBarHome.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
// import { useSession, signIn, signOut } from "next-auth/react"
import Logo from '../../public/comute_logo.png'
import {FcGoogle} from 'react-icons/fc'
import React, {useState} from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { firebaseApp } from "../../firebase-config"
import { userAccessToken, fetchUser } from "../../utils/fetchUserDetails"
import { useEffect } from "react"

const NavigationBarHome = () => {    
      const firebaseAuth = getAuth(firebaseApp);
      const provider = new GoogleAuthProvider();
      const router = useRouter();
    
      const signIn = async () => {
        const { user } = await signInWithPopup(firebaseAuth, provider);
        const { refreshToken, providerData } = user;
        console.log(refreshToken, providerData);
        localStorage.setItem("user", JSON.stringify(providerData));
        localStorage.setItem("accessToken", JSON.stringify(refreshToken));
        router.push("/profile");
      };

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
            <button className={styles.btn} onClick={signIn}>Log In</button>
                <div className={styles.userprofile}>
                    <Image
                    src={Logo}
                    alt="logo"
                    width={50}
                    height={50}
                    className={styles.picha}/>
                </div>
            </div>
        </div>
    )
    
}

export default NavigationBarHome


