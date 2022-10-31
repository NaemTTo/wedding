import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import useDialog from '../dialogs/store';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [showAlertDialog, showConfirmDialog] = useDialog((state) => [
    state.showAlertDialog,
    state.showConfirmDialog,
  ]);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.weddingImg}></div>
        <div className={styles.weddingText}>
          <div className={styles.weddingName}>
            <p className={styles.weddingFirstName}>홍길동</p>
            <p>심춘향</p>
          </div>
          <div className={styles.weddingDate}>
            <p>2022.10.23 SUN PM 1:00</p>
            <p>어디서 결혼식 하는지 적을 주소</p>
          </div>
        </div>
        <section className={styles.weddingInvite}>
          <div className={styles.weddingInviteWrap}>
            <h4>가장 소중하고 아름다운 순간에 초대합니다!</h4>
            <div className="">
              <button
                onClick={() =>
                  showAlertDialog(
                    'Test Alert Dialog',
                    'This is simple alert dialog for test.',
                  )
                }
              >
                Alert
              </button>
              <button
                onClick={() =>
                  showConfirmDialog(
                    'Test Confirm Dialog',
                    'This is simple confirm dialog for test.',
                    () => {},
                  )
                }
              >
                Confirm
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          powered by sujin
        </a>
      </footer>
    </div>
  );
};

export default Home;
