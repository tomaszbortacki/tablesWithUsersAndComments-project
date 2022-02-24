import React, { FC } from "react";
import { v4 } from "uuid";
import Column from "../column/Column";

interface PropsI {
  head: boolean;
  data: Array<string | number | object>;
}

const Row: FC<PropsI> = ({ head, data }) => {
  return (
    <tr>
      {data.map((text) => (
        <Column head={head} text={text} key={v4()} />
      ))}
    </tr>
  );
};

export default Row;
