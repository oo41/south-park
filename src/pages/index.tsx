import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "~/styles/Home.module.scss";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SouthPark</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <article>
          <div
            className={styles.image}
            style={{
              backgroundImage:
                'url("https://www.hollywoodreporter.com/wp-content/uploads/2021/10/south-park-4.jpg")',
            }}
          ></div>
          <div className={styles.description}>
            <p>
              <a href="https://www.imdb.com/title/tt0121955/" target="_blank">
                South Park
              </a>{" "}
              is an american satire covering the flaws in american politics.
            </p>
          </div>
          <div className={styles.title}>
            <h2 className={styles.GradSKCK}>South Park</h2>
          </div>
          <div className={styles.nav}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6L14 18Z"
                />
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g transform="translate(24 0) scale(-1 1)">
                  <path
                    fill="currentColor"
                    d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6L14 18Z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </article>
        <article></article>
        <article></article>
        <article></article>
      </main>
    </>
  );
}
