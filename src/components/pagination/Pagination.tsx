import React from "react";
import { useTableContext } from "../../contexts/TableContextProvider";

const Pagination = () => {
  const { setNextPage } = useTableContext();

  return (
    <section>
      <button onClick={() => setNextPage(-1)}>Prev</button>
      <button onClick={() => setNextPage(1)}>Next</button>
    </section>
  );
};

export default Pagination;
