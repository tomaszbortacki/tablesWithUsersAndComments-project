import React, { useEffect, useState } from "react";
import { DataStructure } from "../../model";
import Column from "../column/Column";

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
    <tr>
      {info.map((info, index) => (
        <Column head={head} info={info} key={index} />
      ))}
    </tr>
  );
};

export default Row;
