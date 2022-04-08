import React from "react";
import Loading from "../loading/Loading";
import Pagination from "../pagination/Pagination";
import Table from "../table/Table";

const TableQuery = () => {
  return (
    <>
      <Pagination />
      <Loading />
      <Table />
    </>
  );
};

export default TableQuery;
