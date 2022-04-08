import React from "react";
import { useTableContext } from "../../contexts/TableContextProvider";
import styles from "./Pagination.module.scss";

const Pagination = () => {
  const { setNextPage } = useTableContext();

  return (
    <section className={styles.pagination}>
      <button onClick={() => setNextPage(-1)}>Prev</button>
      <button onClick={() => setNextPage(1)}>Next</button>
    </section>
  );
};

export default Pagination;
