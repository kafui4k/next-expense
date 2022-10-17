import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import NavBarComponent from "../../components/navbar.component";
import SideBarComponent from "../../components/sidebar.component";

import styles from "../../styles/Home.module.css";
import { FooterComponent } from "../../components/footer.component";

const Expenses = () => {
  const [expenses, setExpenses] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Expensify | Expenses</title>
        <meta name="description" content="Keep track of your expenses" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SideBarComponent />
        <div className={styles.contentWrapper}>
          <NavBarComponent heading="Expenses" />
          {expenses && expenses ? (
            expenses
          ) : (
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
                  <Image
                    src="/static/receipt-long.svg"
                    width={100}
                    height={100}
                    alt="receipt-icon"
                  />
                  <h1>You have no expenses</h1>
                  <span>
                    Drag a receipt onto this page or create a new expense using
                    the button above.
                  </span>
                </div>
              </div>

              <FooterComponent />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Expenses;
