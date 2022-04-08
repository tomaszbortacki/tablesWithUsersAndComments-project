import React from "react";
import { DataStructure } from "../../model";
import ConcatenatedList from "../concatenatedList/ConcatenatedList";
import styles from "./Column.module.scss";

interface Props {
  head: boolean;
  info: DataStructure;
}

const Column = ({ head, info }: Props) => {
  if (!info) return head ? <th className={styles.column__head}></th> : <td className={styles.column}></td>;

  return head ? (
    <th className={styles.column__head}>{info}</th>
  ) : (
    <td className={styles.column}>{typeof info === "object" ? <ConcatenatedList data={info} /> : info}</td>
  );
};

export default Column;
