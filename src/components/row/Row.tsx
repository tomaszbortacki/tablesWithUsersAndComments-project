import React, { useEffect, useState } from "react";
import { DataStructure } from "../../model";
import Column from "../column/Column";
import styles from "./Row.module.scss";

interface Props {
  head: boolean;
  data: Array<string> | object;
}

const Row = ({ head, data }: Props) => {
  const [info, setInfo] = useState<Array<DataStructure>>([]);

  useEffect(() => {
    setInfo(() => (Array.isArray(data) ? data : Object.values(data)));
  }, [data]);

  return (
    <tr className={styles.row}>
      {info.map((info, index) => (
        <Column head={head} info={info} key={index} />
      ))}
    </tr>
  );
};

export default Row;
