import type { Stories } from "@/lib/model";
import { type FC } from "react";
import styles from "./StoryGrid.module.css";

interface GridProps {
  stories: Stories;
}

const Grid: FC<GridProps> = ({ stories }) => {
  return (
    <div className={styles["story-grid"]}>
      {stories.map((story) => (
        <article key={story.id} className={styles.story}>
          <div className={styles["points"]}>{story.points}</div>
          <div>
            <p>{story.title}</p>
            <small>{story.domain}</small>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Grid;
