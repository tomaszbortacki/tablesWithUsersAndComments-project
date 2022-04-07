import React from "react";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ setPage }: Props) => {
  return (
    <section>
      <button onClick={() => setPage((prevState) => (prevState > 1 ? prevState - 1 : 1))}>Prev</button>
      <button onClick={() => setPage((prevState) => prevState + 1)}>Next</button>
    </section>
  );
};

export default Pagination;
