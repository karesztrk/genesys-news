import { type FC, type PropsWithChildren } from "react";
import styles from "./StoryGrid.module.css";

const Grid: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles["story-grid"]} role="list" aria-label="Stories">
      {children}
    </div>
  );
};

export default Grid;
