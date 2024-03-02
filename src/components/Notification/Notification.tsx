import { useId, type FC, type PropsWithChildren } from "react";
import styles from "./Notification.module.css";

const Notification: FC<PropsWithChildren> = ({ children }) => {
  const id = useId();

  return (
    <article role="alert" className={styles.notification} aria-label="Notification" aria-describedby={`${id}-message`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.exclamation}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 9v4" />
        <path d="M12 16v.01" />
      </svg>
      <p id={`${id}-message`} className={styles.message}>
        {children}
      </p>
    </article>
  );
};

export default Notification;
