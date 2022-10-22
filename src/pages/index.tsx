import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { magic } from "../lib/magic-auth";
import { useRouter } from "next/router";

import SideBarComponent from "../components/sidebar/sidebar.component";
import NavBarComponent from "../components/navbar/navbar.component";
import { FooterComponent } from "../components/footer/footer.component";

const Home: NextPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    async function getUserData() {
      // Assumes a user is already logged in
      try {
        const { email }: any = await magic?.user.getMetadata();
        setEmail(email);
      } catch (error) {
        // Handle errors if required!
        console.error("Error fetching user", error);
      }
    }
    getUserData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Expensify| Inbox</title>
        <meta name="description" content="Keep track of your expenses" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SideBarComponent />
        <div className={styles.contentWrapper}>
          <NavBarComponent heading="Inbox" />
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "column",
              background: "#F8F8F8",
              overflowY: "scroll",
            }}
          >
            <div className={styles.contentContainer}>
              <div className={styles.content}>
                <h1>Your inbox here...</h1>
                <span>Messages appears here</span>
              </div>
            </div>
            <FooterComponent />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
