import React, { FC, useEffect, useState } from "react";
import { getData } from "../../api";
import { ApiUrls } from "../../constants";
import { Data } from "../../model";
import Row from "../row/Row";
import "./table.scss";

interface PropsI {
  type: keyof typeof ApiUrls;
}

const Table: FC<PropsI> = ({ type }) => {
  const [data, setData] = useState<Array<Data>>([]);

  useEffect(() => {
    getData(ApiUrls[type]).then(({ data }) => {
      setData(() => data);
    });
  }, []);

  return data.length ? (
    <table className="table">
      <thead>
        <Row head={true} data={Object.keys(data[0])} />
      </thead>
      <tbody>
        {data.map((item, index) => (
          <Row head={false} data={item} key={index} />
        ))}
      </tbody>
    </table>
  ) : null;
};

export default Table;
