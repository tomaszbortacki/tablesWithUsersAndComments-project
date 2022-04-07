import React, { FC } from "react";
import { DataStructure } from "../../model";

interface PropsI {
  data: Array<Array<DataStructure>>;
}

const enum Entry {
  KEY,
  VALUE,
}

const ConcateKeysWithValues: FC<PropsI> = ({ data }) => {
  return data.length ? (
    <ul>
      {data.map((entry, index) => (
        <li key={index}>
          <strong>{entry[Entry.KEY]}:&nbsp;</strong>
          {typeof entry[Entry.VALUE] === "object" ? (
            <ConcateKeysWithValues data={Object.entries(entry[Entry.VALUE])} />
          ) : (
            entry[Entry.VALUE]
          )}
        </li>
      ))}
    </ul>
  ) : null;
};

export default ConcateKeysWithValues;
