import React, { FC, useEffect, useState } from "react";
import { v4 } from "uuid";
import Column from "../column/Column";

interface PropsI {
  head: boolean;
  data: Array<string> | object;
}

const Row: FC<PropsI> = ({ head, data }) => {
  const [info, setInfo] = useState<Array<string | object>>([]);

  useEffect(() => {
    setInfo(() => (Array.isArray(data) ? data : Object.values(data)));
  }, []);

  return (
    <tr>
      {info.map((info) => (
        <Column head={head} info={info} key={v4()} />
      ))}
    </tr>
  );
};

export default Row;
