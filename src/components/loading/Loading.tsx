import React from "react";
import { useTableContext } from "../../contexts/TableContextProvider";
import styles from "./Loading.module.scss";

const Loading = () => {
  const { loading } = useTableContext();

  return loading ? <div className={styles.loading}></div> : null;
};

export default Loading;
