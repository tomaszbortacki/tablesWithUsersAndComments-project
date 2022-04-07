import React, { FC } from "react";
import { DataStructure } from "../../model";
import ConcateKeysWithValues from "../concateKeysWithValues/ConcateKeysWithValues";

interface PropsI {
  head: boolean;
  info: DataStructure;
}

const Column: FC<PropsI> = ({ head, info }) => {
  return head ? <th>{info}</th> : <td>{typeof info === "object" ? <ConcateKeysWithValues data={Object.entries(info)} /> : info}</td>;
};

export default Column;
