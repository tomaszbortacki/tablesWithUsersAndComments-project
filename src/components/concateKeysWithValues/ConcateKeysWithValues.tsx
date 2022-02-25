import React, { FC } from "react";
import { dataStructureT } from "../../model";

interface PropsI {
  data: Array<Array<dataStructureT>>;
}

const ConcateKeysWithValues: FC<PropsI> = ({ data }) => {
  return data.length ? (
    <ul>
      {data.map((entry) => (
        <li>
          <strong>{entry[0]}</strong>
          {typeof entry[1] === "object" ? <ConcateKeysWithValues data={Object.entries(entry[1])} /> : entry[1]}
        </li>
      ))}
    </ul>
  ) : null;
};

export default ConcateKeysWithValues;
