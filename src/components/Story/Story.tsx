import type { Stories } from "@/lib/model";
import { type FC } from "react";
import styles from "./Story.module.css";

interface GridProps {
  story: Stories[number];
}

const Grid: FC<GridProps> = ({ story }) => {
  return (
    <article key={story.id} className={styles.story}>
      <div className={styles.points}>
        <button className={`outline ${styles["upvote-button"]}`}>
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L13.9282 12H0.0717969L7 0Z" fill="currentColor" />
          </svg>
        </button>
        <small>{story.points}</small>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>
          <strong>
            <a href={story.url} className="contrast" target="_blank" rel="noreferrer">
              {story.title}
            </a>
          </strong>
        </p>
        <div className={styles.details}>
          <small>
            u/
            <a href={`https://news.ycombinator.com/user?id=${story.user}`} target="_blank" rel="noreferrer">
              {story.user}
            </a>
          </small>
          <small>{story.time_ago}</small>
          <small>[{story.comments_count} Comments]</small>
          {story.domain && (
            <small className={styles.source}>
              src/
              <a href={story.domain} target="_blank" rel="noreferrer">
                {story.domain}
              </a>
            </small>
          )}
        </div>
      </div>
    </article>
  );
};

export default Grid;
