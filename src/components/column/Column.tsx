import React from "react";
import { DataStructure } from "../../model";
import ConcatenatedList from "../concatenatedList/ConcatenatedList";

interface Props {
  head: boolean;
  info: DataStructure;
}

const Column = ({ head, info }: Props) => {
  if (!info) return head ? <th></th> : <td></td>;

  return head ? <th>{info}</th> : <td>{typeof info === "object" ? <ConcatenatedList data={Object.entries(info)} /> : info}</td>;
};

export default Column;
