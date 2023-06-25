import styles from "./Pagination.module.scss";

const Pagination = ({
  currPage,
  setCurrPage,
  booksOnPageNumber,
}: {
  currPage: number;
  setCurrPage?: any;
  booksOnPageNumber: number;
}) => {
  return (
    <div className={styles.pagination_box}>
      <button
        className={styles.pagination_btn}
        onClick={() => setCurrPage(currPage - 1)}
        disabled={currPage === 1 ? true : false}
      >
        {"<"}
      </button>
      <div className={styles.pagination_counter}>page {currPage}</div>
      <button
        className={styles.pagination_btn}
        onClick={() => setCurrPage(currPage + 1)}
        disabled={booksOnPageNumber < 2 ? true : false}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
