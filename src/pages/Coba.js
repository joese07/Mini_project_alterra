const Coba = ({ cobas }) => {
  return (
    <>
      {cobas.map((coba, index) => {
        return (
          <tr className="table">
            <span key={index}>{coba}</span>
          </tr>
        );
      })}
    </>
  );
};

export default Coba;
