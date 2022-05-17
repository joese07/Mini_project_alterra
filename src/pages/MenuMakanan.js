const MenuMakanan = ({
  handleAyamBakar,
  handleAyamGeprek,
  handleAyamKalasan,
  handleAyamGoreng,
  handleAyamRicaRica,
}) => {
  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-3 ">
      <div className="col">
        <button
          className="p-3 border bg-danger bg-opacity-75"
          onClick={handleAyamGoreng}
        >
          Ayam Goreng
        </button>
      </div>
      <div className="col">
        <button
          className="p-3 border bg-danger bg-opacity-75"
          onClick={handleAyamBakar}
        >
          Ayam Bakar
        </button>
      </div>
      <div className="col">
        <button
          className="p-3 border bg-danger bg-opacity-75"
          onClick={handleAyamKalasan}
        >
          Ayam Kalasan
        </button>
      </div>
      <div className="col">
        <button
          className="p-3 border bg-danger bg-opacity-75"
          onClick={handleAyamGeprek}
        >
          Ayam Geprek
        </button>
      </div>
      <div className="col">
        <button
          className="p-3 border bg-danger bg-opacity-75"
          onClick={handleAyamRicaRica}
        >
          Ayam Rica Rica
        </button>
      </div>
    </div>
  );
};

export default MenuMakanan;
