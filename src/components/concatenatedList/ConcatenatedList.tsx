import React, { FC } from "react";
import { DataStructure } from "../../model";

interface Props {
  data: object;
}

const enum Entry {
  KEY,
  VALUE,
}

const ConcatenatedList = ({ data }: Props) => {
  return data ? (
    <ul>
      {Object.entries(data).map((entry, index) => (
        <li key={index}>
          {() => console.log(entry)}
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
