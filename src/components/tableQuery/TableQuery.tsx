import React, { useEffect, useState } from "react";
import { getData } from "../../api";
import { Endpoints } from "../../constants";
import { Data } from "../../model";
import Loading from "../loading/Loading";
import Pagination from "../pagination/Pagination";
import Table from "../table/Table";

interface Props {
  endpoint: Endpoints;
}

const TableQuery = ({ endpoint }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<Data>([]);

  useEffect(() => {
    setLoading(true);
    getData(endpoint, page)
      .then(({ data }) => {
        if ((!data || !data.length) && page > 1) {
          setPage((prevState) => prevState - 1);
          return;
        }

        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [page]);

  return (
    <>
      <Pagination setPage={setPage} />
      {loading ? <Loading /> : ""}
      <Table data={data} />
    </>
  );
};

export default TableQuery;
