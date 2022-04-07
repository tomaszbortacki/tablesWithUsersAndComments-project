import React from "react";
import { Data } from "../../model";
import Row from "../row/Row";
import { table } from "./Table.module.scss";

interface Props {
  data: Data;
}

const Table = ({ data }: Props) => {
  return data.length ? (
    <table className={table}>
      <thead>
        <Row head={true} data={Object.keys(data[0])} />
      </thead>
      <tbody>
        {data.map((item, index) => (
          <Row head={false} data={item} key={item?.id && typeof item.id === "number" ? item.id : index} />
        ))}
      </tbody>
    </table>
  ) : null;
};

export default Table;
