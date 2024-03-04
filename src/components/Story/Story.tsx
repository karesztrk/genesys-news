import type { Stories } from "@/lib/model";
import { type FC, type ComponentPropsWithoutRef } from "react";
import styles from "./Story.module.css";
import { elapsed } from "./Story.util";

interface StoryProps extends ComponentPropsWithoutRef<"article"> {
  story: Stories[number];
  storyPoints?: JSX.Element;
}

const Story: FC<StoryProps> = ({ story, storyPoints, ...rest }) => {
  const url = story.url && new URL(story.url);
  const date = elapsed(story.time_ago);
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
            <a href={`https://news.ycombinator.com/user?id=${story.by}`} target="_blank" rel="noreferrer">
              {story.by}
            </a>
          </small>
          <small>{date}</small>
          <small>[{story.descendants} Comments]</small>
          {url && (
            <small className={styles.source}>
              src/
              <a href={url.origin} target="_blank" rel="noreferrer">
                {url.hostname}
              </a>
            </small>
          )}
        </div>
      </div>
    </article>
  );
};

export default Story;
