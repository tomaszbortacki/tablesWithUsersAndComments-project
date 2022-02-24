import React, { FC, useEffect } from "react";
import { v4 } from "uuid";
import { CommentsT, UsersT } from "../../model";
import Row from "../row/Row";

interface PropsI {
  data: Array<UsersT | CommentsT>;
}

const Table: FC<PropsI> = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, []);

  return data.length ? (
    <table>
      <thead>
        <Row head={true} data={Object.keys(data[0])} />
      </thead>
      <tbody>{/* {data.map(item => item.email)} */}</tbody>
    </table>
  ) : null;
};

export default Table;
