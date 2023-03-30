import Head from "next/head";
import styles from "~/styles/Home.module.scss";
import { createRef, useState } from "react";
import Slide from "~/components/Slide";

type NavEvent = {
  element: HTMLDivElement;
};

export default function Home() {
  const [activePage, setActivePage] = useState(0);

  /*
   * I personally apologise to anyone who has to read this code. I promise I am not this bad at programming.
   * I just haven't done web dev in a while.
   */
  function navigate(direction: string, element: any) {
    // element.setAttribute("data-status", "after");
    const activeIndex = parseInt(
      document
        .querySelector("[data-status='active']")
        ?.getAttribute("data-index") || "0"
    );
    switch (direction) {
      case "left": {
        if (activeIndex === 0) return;
        console.log(
          document
            .querySelector(`[data-index='${activeIndex - 1}'`)
            ?.setAttribute("data-status", "active")
        );
        element.setAttribute("data-status", "before");
        break;
      }
      case "right": {
        element.setAttribute("data-status", "after");
        document
          .querySelector(
            `[data-index="${parseInt(element.getAttribute("data-index")) + 1}"]`
          )
          ?.setAttribute(`data-status`, "active");
        break;
      }
    }
  }
  return (
    <>
      <Head>
        <title>South Park</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Slide
          index={0}
          active={true}
          navigate={navigate}
          title="South Park: Intro"
        >
          <p>
            <a href="https://www.imdb.com/title/tt0121955/" target="_blank">
              South Park
            </a>{" "}
            is an american satire covering the flaws in american society and
            politics.
          </p>
        </Slide>
        <Slide
          index={1}
          active={false}
          navigate={navigate}
          title="South Park: Intro"
        >
          <p>
            <a href="https://www.imdb.com/title/tt0121955/" target="_blank">
              South Park
            </a>{" "}
            follows the misadventures of four school children in a town called
            South Park located in Colorado.
          </p>
        </Slide>
      </main>
    </>
  );
}
