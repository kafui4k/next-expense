import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { magic } from '../lib/magic-auth'
import {useRouter} from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    async function getUserData() {
      // Assumes a user is already logged in
      try {
        const {email}: any = await magic?.user.getMetadata();
        setEmail(email);
      } catch (error) {
        // Handle errors if required!
        console.error("Error fetching user", error);
      }
    }
    getUserData();

  }, []);

  const handleUserLogout = async () => {
    try {
      const isNotLoggedIn = await magic?.user.logout();

      if (isNotLoggedIn) {
        // route to dashboard
        router.push("/login");
      }
    } catch {
      // Handle errors if required!
    }
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Keep a tab on your | Next Expense</title>
        <meta name="description" content="Keep track of your expenses" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome: {email}</h1>

        <button onClick={handleUserLogout}>
          Logout
        </button>
      </main>
    </div>
  )
}

export default Home
