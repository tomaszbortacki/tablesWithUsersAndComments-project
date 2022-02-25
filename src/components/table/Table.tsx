import React, { FC, useEffect, useState } from "react";
import { v4 } from "uuid";
import { getComments, getUsers } from "../../api";
import { ApiUrls, ApiUrlsTypes } from "../../constants";
import { CommentsT, UsersT } from "../../model";
import Row from "../row/Row";

interface PropsI {
  type: keyof typeof ApiUrls;
}

const Table: FC<PropsI> = ({ type }) => {
  const [data, setData] = useState<Array<UsersT | CommentsT>>([]);

  useEffect(() => {
    switch (type) {
      case ApiUrlsTypes.USERS:
        getUsers().then(({ data }) => {
          setData(() => data);
        });
        break;
      case ApiUrlsTypes.COMMENTS:
        getComments().then(({ data }) => {
          setData(() => data);
        });
        break;
    }
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
