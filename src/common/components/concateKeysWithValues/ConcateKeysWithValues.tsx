import React, { FC } from "react";
import { v4 } from "uuid";
import { dataStructureT } from "../../../model";

interface PropsI {
  data: Array<Array<dataStructureT>>;
}

const enum Entry {
  KEY,
  VALUE,
}

const ConcateKeysWithValues: FC<PropsI> = ({ data }) => {
  return data.length ? (
    <ul>
      {data.map((entry) => (
        <li key={v4()}>
          <strong>{entry[Entry.KEY]}</strong>
          {typeof entry[Entry.VALUE] === "object" ? <ConcateKeysWithValues data={Object.entries(entry[Entry.VALUE])} /> : entry[1]}
        </li>
      ))}
    </ul>
  ) : null;
};

export default ConcateKeysWithValues;
