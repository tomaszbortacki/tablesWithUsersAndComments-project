import React, { FC, useEffect } from "react";
import Row from "../row/Row";
import Table from "../table/Table";

interface PropsI {
  head: boolean;
  info: string | object;
}

const Column: FC<PropsI> = ({ head, info }) => {
  useEffect(() => {
    // console.log(info);
  }, []);

  return head ? <th>{info}</th> : <td></td>;
};

export default Column;
