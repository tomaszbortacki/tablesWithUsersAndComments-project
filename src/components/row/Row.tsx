import React, { FC, useEffect, useState } from "react";
import { DataStructure } from "../../model";
import Column from "../column/Column";

interface PropsI {
  head: boolean;
  data: Array<string> | object;
}

const Row: FC<PropsI> = ({ head, data }) => {
  const [info, setInfo] = useState<Array<DataStructure>>([]);

  useEffect(() => {
    setInfo(() => (Array.isArray(data) ? data : Object.values(data)));
  }, []);

  return (
    <tr>
      {info.map((info, index) => (
        <Column head={head} info={info} key={index} />
      ))}
    </tr>
  );
};

export default Row;
