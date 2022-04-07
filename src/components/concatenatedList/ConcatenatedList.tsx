import React, { FC } from "react";
import { DataStructure } from "../../model";

interface Props {
  data: Array<Array<DataStructure>>;
}

const enum Entry {
  KEY,
  VALUE,
}

const ConcatenatedList = ({ data }: Props) => {
  return data.length ? (
    <ul>
      {data.map((entry, index) => (
        <li key={index}>
          <strong>{entry[Entry.KEY]}:&nbsp;</strong>
          {entry[Entry.VALUE] ? (
            typeof entry[Entry.VALUE] === "object" ? (
              <ConcatenatedList data={Object.entries(entry[Entry.VALUE])} />
            ) : (
              entry[Entry.VALUE]
            )
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  ) : null;
};

export default ConcatenatedList;