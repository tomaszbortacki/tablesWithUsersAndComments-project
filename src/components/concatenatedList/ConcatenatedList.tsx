import React from "react";
import { DataStructure } from "../../model";

interface Props {
  data: Record<string, DataStructure>;
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
          <strong>{entry[Entry.KEY]}:&nbsp;</strong>
          {entry[Entry.VALUE] ? (
            typeof entry[Entry.VALUE] === "object" ? (
              <ConcatenatedList data={entry[Entry.VALUE] as Record<string, DataStructure>} />
            ) : (
              entry[Entry.VALUE]
            )
          ) : null}
        </li>
      ))}
    </ul>
  ) : null;
};

export default ConcatenatedList;
