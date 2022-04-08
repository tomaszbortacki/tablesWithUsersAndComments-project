import React from "react";
import Loading from "../loading/Loading";
import Pagination from "../pagination/Pagination";
import Table from "../table/Table";
import styles from "./TableWrapper.module.scss";

const TableWrapper = () => {
  return (
    <section className={styles.tableWrapper}>
      <section className={styles.tableWrapper__top}>
        <Pagination />
        <Loading />
      </section>
      <Table />
    </section>
  );
};

export default TableWrapper;
