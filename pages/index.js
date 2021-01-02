import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, Types } from "../client/main/state/index";
import moment from "moment";
import AppLayout from "../common/components/AppLayout";
import Main from "../client/main/containers/Main";

export default function Home() {
  let today = moment().format("YYYYMMDD");
  let yesterday = moment().subtract(8, "days").format("YYYYMMDD");
  const dispatch = useDispatch();
  const { totalData } = useSelector((state) => state.main);

  //데이터 잘 가져오는중.
  console.log("total", totalData);

  useEffect(() => {
    console.log("index rendering...");
    dispatch(actions.fetchTotalData({ today, yesterday }));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Covid 19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AppLayout>
          <Main />
        </AppLayout>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
