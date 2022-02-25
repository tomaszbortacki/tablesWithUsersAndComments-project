import React, { FC } from "react";
import Table from "./components/table/Table";
import { ApiUrlsTypes } from "./constants";
import "./app.scss";

const App: FC = () => {
  return (
    <section className="app">
      <Table type={ApiUrlsTypes.USERS} />
      <Table type={ApiUrlsTypes.COMMENTS} />
    </section>
  );
};

export default App;
