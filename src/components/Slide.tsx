import { ReactNode, useEffect, useState } from "react";
import styles from "./Slide.module.scss";

type Props = {
  navigate: Function;
  children: ReactNode;
  title: string;
  index: number;
  active: boolean;
};

export default function Slide({
  navigate,
  children,
  title,
  index,
  active,
}: Props) {
  return (
    <article
      className={styles.Slide}
      data-index={index}
      data-status={active ? "active" : "before"}
    >
      <div
        className={styles.image}
        style={{
          backgroundImage:
            'url("https://www.hollywoodreporter.com/wp-content/uploads/2021/10/south-park-4.jpg")',
        }}
      ></div>
      <div className={styles.description}>{children}</div>
      <div className={styles.title}>
        <h2 className={styles.GradSKCK}>
          {title}: {index}
        </h2>
      </div>
      <div className={styles.nav}>
        <div
          onClick={(e) =>
            navigate("left", e.currentTarget.parentNode?.parentNode)
          }
        >
          <svg
            viewBox="0 0 41 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.871437 12.021C8.69497 12.021 14.4008 21.5909 14.4597 21.7084C14.6361 22.0019 14.9891 22.0606 15.2832 21.9432C15.5773 21.7671 15.6361 21.4148 15.5185 21.1213C15.342 20.769 11.6361 14.663 5.93026 12.021L39.695 12.021C40.0479 12.021 40.2832 11.7861 40.2832 11.4339C40.2832 11.0816 40.0479 10.8468 39.695 10.8468L5.93026 10.8468C11.6361 8.20475 15.342 2.09877 15.5185 1.7465C15.6361 1.45295 15.5773 1.10068 15.2832 0.924543C14.9891 0.80712 14.6361 0.865831 14.4597 1.15939C14.4008 1.27681 8.69497 10.8468 0.871437 10.8468C0.518497 10.8468 0.283203 11.0816 0.283203 11.4339C0.283203 11.7861 0.518497 12.021 0.871437 12.021Z"
              fill="#F2F2F2"
            />
          </svg>
        </div>
        <div
          onClick={(e) =>
            navigate("right", e.currentTarget.parentNode?.parentNode)
          }
        >
          <svg
            viewBox="0 0 62 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.0882 15.6372C48.9618 15.6372 40.1176 0.803745 40.0265 0.62174C39.7529 0.166727 39.2059 0.0757228 38.75 0.257728C38.2941 0.530736 38.2029 1.07675 38.3853 1.53177C38.6588 2.07778 44.4029 11.5421 53.2471 15.6372L0.911764 15.6372C0.364705 15.6372 -7.39744e-07 16.0012 -7.15877e-07 16.5472C-6.9201e-07 17.0932 0.364705 17.4572 0.911764 17.4572L53.2471 17.4572C44.4029 21.5523 38.6588 31.0166 38.3853 31.5626C38.2029 32.0176 38.2941 32.5637 38.75 32.8367C39.2059 33.0187 39.7529 32.9277 40.0265 32.4727C40.1176 32.2907 48.9618 17.4572 61.0882 17.4572C61.6353 17.4572 62 17.0932 62 16.5472C62 16.0012 61.6353 15.6372 61.0882 15.6372Z"
              fill="#F2F2F2"
            />
          </svg>
        </div>
      </div>
    </article>
  );
}
