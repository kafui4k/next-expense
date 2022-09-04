import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Landing from './landing/landing';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Keep a tab on your | Next Expense</title>
        <meta name="description" content="Keep track of your expenses" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <Landing />
      </main>
    </div>
  )
}

export default Home
