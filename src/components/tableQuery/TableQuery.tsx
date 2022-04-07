import React, { useEffect, useState } from "react";
import { getData } from "../../api";
import { Endpoints } from "../../constants";
import { Data } from "../../model";
import Loading from "../loading/Loading";

interface Props {
  endpoint: Endpoints;
}

const TableQuery = ({ endpoint }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<Array<Data>>([]);

  useEffect(() => {
    getData(endpoint, page)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [page]);

  return loading ? <Loading /> : null;
};

export default TableQuery;
