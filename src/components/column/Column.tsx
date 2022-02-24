import React, { FC } from "react";

interface PropsI {
  head: boolean;
  text: string | number | object;
}

const Column: FC<PropsI> = ({ head, text }) => {
  return head ? <th>{text}</th> : <td>td</td>;
};

export default Column;
