import Head from "next/head";
import styles from "../styles/Home.module.css";
import AppLayout from "../common/components/AppLayout";
import Main from "../client/room/containers/Main";
import { useDispatch, useSelector } from "react-redux";
import { actions, Types } from "../client/room/state/index";
import { useEffect } from "react";

export default function Room() {
  const dispatch = useDispatch();
  const { roomData } = useSelector((state) => state.room);

  console.log(roomData);

  // useEffect(() => { 리스트 클릭시 데이터 요청! 아니다 페이지 네이션 하자!
  //   dispatch(actions.fetchRoomData());
  // }, [dispatch]);

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
