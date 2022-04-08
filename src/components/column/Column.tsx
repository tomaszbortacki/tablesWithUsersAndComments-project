import React from "react";
import { DataStructure } from "../../model";
import ConcatenatedList from "../concatenatedList/ConcatenatedList";
import styles from "./Column.module.scss";

interface Props {
  head: boolean;
  info: DataStructure;
}

const Column = ({ head, info }: Props) => {
  return head ? (
    <th className={styles.column__head}>{info}</th>
  ) : (
    <td className={styles.column}>
      {info ? typeof info === "object" ? <ConcatenatedList data={info as Record<string, DataStructure>} /> : info : null}
    </td>
  );
};

export default Column;
