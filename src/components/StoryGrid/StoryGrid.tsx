import type { Stories } from "@/lib/model";
import { type FC } from "react";
import styles from "./StoryGrid.module.css";
import Story from "../Story";

interface GridProps {
  stories: Stories;
}

const Grid: FC<GridProps> = ({ stories }) => {
  return (
    <div className={styles["story-grid"]} role="list">
      {stories.map((story) => (
        <Story key={story.id} story={story} role="listitem" />
      ))}
    </div>
  );
};

export default Grid;
