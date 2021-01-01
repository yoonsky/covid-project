import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, Types } from "../client/main/state/index";
import moment from "moment";

export default function Home() {
  let date = moment().format("YYYYMMDD");
  const dispatch = useDispatch();
  const { totalData } = useSelector((state) => state.main);

  useEffect(() => {
    console.log("index rendering...");
    dispatch(actions.fetchTotalData(date));
  }, [totalData, dispatch]);

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
