import React, { FC } from "react";
import { dataStructureT } from "../../../model";
import ConcateKeysWithValues from "../../../common/components/concateKeysWithValues/ConcateKeysWithValues";

interface PropsI {
  head: boolean;
  info: dataStructureT;
}

const Column: FC<PropsI> = ({ head, info }) => {
  return head ? <th>{info}</th> : <td>{typeof info === "object" ? <ConcateKeysWithValues data={Object.entries(info)} /> : info}</td>;
};

export default Column;
