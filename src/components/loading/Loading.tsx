import React from "react";
import { useTableContext } from "../../contexts/TableContextProvider";
import { loading } from "./Loading.module.scss";

const Loading = () => {
  const { loading: tableLoading } = useTableContext();

  return tableLoading ? <div className={loading}></div> : null;
};

export default Loading;
