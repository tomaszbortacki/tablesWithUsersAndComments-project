import React, { FC } from "react";
import Table from "./components/table/Table";
import "./app.scss";
import TableQuery from "./components/tableQuery/TableQuery";
import { Endpoints } from "./constants";

const App: FC = () => {
  return (
    <section className="app">
      <TableQuery endpoint={Endpoints.COMMENTS} />
      {/* <Table type={ApiUrlsTypes.USERS} />
      <Table type={ApiUrlsTypes.COMMENTS} /> */}
    </section>
  );
};

export default App;
