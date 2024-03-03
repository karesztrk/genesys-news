import type { Stories } from "@/lib/model";
import { useState, type FC, useEffect } from "react";
import styles from "./StoryPoints.module.css";

interface StoryPointsProps {
  points?: Stories[number]["points"];
}

const StoryPoints: FC<StoryPointsProps> = ({ points: pointsProp }) => {
  /**
   * Optimistic vote counter
   */
  const [points, setPoints] = useState(pointsProp ?? 0);

  /**
   * Update the points if the prop changes.
   */
  useEffect(() => {
    setPoints(pointsProp ?? 0);
  }, [pointsProp]);

  /**
   * Increase votes.
   */
  const upvote = () => {
    setPoints((prev) => prev + 1);
  };

  return (
    <div className={styles.points}>
      <button className={`outline ${styles["upvote-button"]}`} aria-label="Upvote" onClick={upvote}>
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0L13.9282 12H0.0717969L7 0Z" fill="currentColor" />
        </svg>
      </button>
      <small>{points}</small>
    </div>
  );
};

export default StoryPoints;
