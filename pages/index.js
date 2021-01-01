import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const SERVICE_KEY = process.env.SERVICE_KEY;
  const SERVER_URL = process.env.SERVER_PORT;

  const fetchApi = () => {
    axios.post("/").then((response) => console.log(response.data));
  };

  useEffect(() => {
    console.log("render");
    fetchApi();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Covid 19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>hello client index!</main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
