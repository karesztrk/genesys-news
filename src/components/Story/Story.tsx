import type { Stories } from "@/lib/model";
import { type FC, type ComponentPropsWithoutRef } from "react";
import styles from "./Story.module.css";

interface StoryProps extends ComponentPropsWithoutRef<"article"> {
  story: Stories[number];
  storyPoints?: JSX.Element;
}

const Story: FC<StoryProps> = ({ story, storyPoints, ...rest }) => {
  return (
    <article className={styles.story} {...rest}>
      {storyPoints}
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

export default Story;
