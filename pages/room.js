import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

export default function Room() {
  useEffect(() => {
    console.log("render");
    // fetchApi();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Covid 19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>hello client Triage Room!</main>

      <footer className={styles.footer}></footer>
    </div>
  );
}