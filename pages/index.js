import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions, Types } from "../client/main/state";
import moment from "moment";

// console.log(moment().format("YYYYMMDD"));

export default function Home() {
  // const dispatch = useDispatch();

  useEffect(() => {
    console.log("index rendering...");
    // dispatch(actions.fetchTotalData('totalData',));
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
