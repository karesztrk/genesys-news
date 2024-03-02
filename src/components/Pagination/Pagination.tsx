import { type FC } from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  page?: number;
  category?: string;
}

const Pagination: FC<PaginationProps> = ({ category = "", page = 1 }) => {
  return (
    <div role="group" className={styles.pagination}>
      {page > 1 && (
        <a
          role="button"
          className={`secondary ${styles["pagination-button"]}`}
          href={`/${category}?page=${page - 1}`}
          aria-label="Previous Page"
        >
          Previous
        </a>
      )}
      <a
        role="button"
        className={`secondary ${styles["pagination-button"]}`}
        href={`/${category}?page=${page + 1}`}
        aria-label="Next Page"
      >
        Next
      </a>
    </div>
  );
};

export default Pagination;
