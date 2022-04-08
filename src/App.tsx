import React from "react";
import "./app.scss";
import TableQuery from "./components/tableQuery/TableQuery";
import { Endpoints } from "./constants";
import TableContextProvider from "./contexts/TableContextProvider";

const App = () => {
  return (
    <section className="app">
      <TableContextProvider endpoint={Endpoints.COMMENTS}>
        <TableQuery />
      </TableContextProvider>
      <TableContextProvider endpoint={Endpoints.USERS}>
        <TableQuery />
      </TableContextProvider>
    </section>
  );
};

export default App;
