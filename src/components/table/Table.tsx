import React from "react";
import { useTableContext } from "../../contexts/TableContextProvider";
import Row from "../row/Row";
import styles from "./Table.module.scss";

const Table = () => {
  const { data } = useTableContext();

  return data.length ? (
    <table className={styles.table}>
      <thead>
        <Row head={true} data={Object.keys(data[0])} />
      </thead>
      <tbody>
        {data.map((item, index) => (
          <Row head={false} data={item} key={index} />
        ))}
      </tbody>
    </table>
  ) : null;
};

export default Table;
