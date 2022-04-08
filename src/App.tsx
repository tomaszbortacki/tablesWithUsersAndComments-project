import React from "react";
import TableContextProvider from "./contexts/TableContextProvider";
import styles from "./App.module.scss";
import { Endpoints } from "./constants";
import TableWrapper from "./components/tableWrapper/TableWrapper";

const App = () => {
  return (
    <section className={styles.app}>
      <TableContextProvider endpoint={Endpoints.COMMENTS}>
        <TableWrapper />
      </TableContextProvider>
      <TableContextProvider endpoint={Endpoints.USERS}>
        <TableWrapper />
      </TableContextProvider>
    </section>
  );
};

export default App;
