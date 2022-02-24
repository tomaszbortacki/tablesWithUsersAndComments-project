import React, { FC, useEffect, useState } from "react";
import { getComments, getUsers } from "./api";
import Table from "./components/table/Table";
import { CommentsT, UsersT } from "./model";
import { v4 } from "uuid";

type dataT = Partial<Array<UsersT | CommentsT>>;

const App: FC = () => {
  const [data, setData] = useState<dataT>([]);

  useEffect(() => {
    Promise.all([getUsers(), getComments()]).then((resp) => {
      setData(() => resp.map((values) => values.data));
    });
  }, []);

  return (
    <section className="app">
      {data.map((item) => (
        <Table data={item} key={v4()} />
      ))}
    </section>
  );
};

export default App;
