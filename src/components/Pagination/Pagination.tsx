import { type FC } from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  page?: number;
  category?: string;
}

const Pagination: FC<PaginationProps> = ({ category = "", page = 1 }) => {
  return (
    <div className={styles.pagination}>
      {page > 1 && (
        <a className={styles["pagination-button"]} href={`/${category}?page=${page - 1}`} aria-label="Previous Page">
          Previous
        </a>
      )}{" "}
      <span className={styles["current-page"]} aria-label="Current page number">
        #{page}
      </span>{" "}
      <span>
        <a className={styles["pagination-button"]} href={`/${category}?page=${page + 1}`} aria-label="Next Page">
          Next
        </a>
      </span>
    </div>
  );
};

export default Pagination;
