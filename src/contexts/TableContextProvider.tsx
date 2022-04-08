import React, { useContext, useEffect, useState } from "react";
import { getData } from "../api";
import { Endpoints } from "../constants";
import { Data } from "../model";

interface Props {
  endpoint: Endpoints;
  children: React.ReactNode | Array<React.ReactNode>;
}

interface Context {
  setNextPage: (index: number) => void;
  data: Data;
  loading: boolean;
}

const TableContext = React.createContext<Context>({} as Context);

const TableContextProvider = ({ endpoint, children }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [endPage, setEndPage] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<Data>([]);

  const setNextPage = (index: number) => {
    if (loading || page + index < 1 || (endPage && page + index >= endPage)) {
      return;
    }

    setPage((prevState) => prevState + index);
  };

  useEffect(() => {
    setLoading(true);
    getData(endpoint, page)
      .then(({ data }: { data: Data }) => {
        if ((!data || !data.length) && page > 1) {
          setEndPage(page);
          setPage((prevState) => prevState - 1);
          return;
        }

        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [page]);

  return <TableContext.Provider value={{ setNextPage, data, loading }}>{children}</TableContext.Provider>;
};

export const useTableContext = () => useContext(TableContext);

export default TableContextProvider;
