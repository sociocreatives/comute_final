import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import styles from '../../styles/Login.module.css'
import Logo from '../../public/SVG/comute_logo.svg'
import { app } from '../../firebaseConfig'

import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup
} from 'firebase/auth'

const LoginPage = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const router = useRouter();


    const signUpWithGoogle = () => {
      signInWithPopup(auth, googleProvider)
          .then((response) => {
              sessionStorage.setItem('Token', response.user.accessToken)
              console.log(response.user)
              router.push('/')
          })
      }
      const signUpWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((response) => {
                sessionStorage.setItem('Token', response.user.accessToken)
                console.log(response.user)
                router.push('/')
            })
      }
      // useEffect(() => {
      //   let token = sessionStorage.getItem('Token')

      //   if(token){
      //       router.push('/')
      //   }
      // }, [])

  return (
    <div className={styles.container}>
      <div className={styles.logobox}>
        <Link href="/"><Image src={Logo} alt="logo" width={150} height={80} className={styles.logo}/></Link>
      </div>
      <div className={styles.forms}>
        <p>Please Select Log In Method</p>
        <button className={styles.buttons} onClick={signUpWithGoogle}><FcGoogle className={styles.icons}/>Login With Google</button>
        <button className={styles.buttons} onClick={signUpWithFacebook}><FaFacebook className={styles.icons}/>Login With Facebook</button>
      </div>
    </div>
  )
}

export default LoginPage