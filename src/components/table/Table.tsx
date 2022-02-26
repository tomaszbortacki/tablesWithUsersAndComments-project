import React, { FC, useEffect, useState } from "react";
import { v4 } from "uuid";
import { getData } from "../../api";
import { ApiUrls, ApiUrlsTypes } from "../../constants";
import { dataT } from "../../model";
import Row from "./row/Row";
import "./table.scss";

interface PropsI {
  type: keyof typeof ApiUrls;
}

const Table: FC<PropsI> = ({ type }) => {
  const [data, setData] = useState<Array<dataT>>([]);

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
        {data.map((item) => (
          <Row head={false} data={item} key={v4()} />
        ))}
      </tbody>
    </table>
  ) : null;
};

export default Table;
