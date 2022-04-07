import React, { FC } from "react";
import "./app.scss";
import TableQuery from "./components/tableQuery/TableQuery";
import { Endpoints } from "./constants";

const App: FC = () => {
  return (
    <section className="app">
      <TableQuery endpoint={Endpoints.COMMENTS} />
      <TableQuery endpoint={Endpoints.USERS} />
    </section>
  );
};

export default App;
