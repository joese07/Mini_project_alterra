const MenuMinuman = ({
  handleEsjeruk,
  handelAirmineral,
  handleEstehmanis,
  handleJusMangga,
  handleTehhangat,
}) => {
  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-3">
      <div className="col">
        <button
          className="p-3 border  bg-primary bg-opacity-75"
          onClick={handleJusMangga}
        >
          Jus Mangga
        </button>
      </div>
      <div className="col">
        <button
          className="p-3 border  bg-primary bg-opacity-75"
          onClick={handelAirmineral}
        >
          Air Mineral
        </button>
      </div>
      <div className="col">
        <button
          className="p-3 border  bg-primary bg-opacity-75"
          onClick={handleTehhangat}
        >
          Teh Hangat
        </button>
      </div>
      <div className="col">
        <button
          className="p-3 border  bg-primary bg-opacity-75"
          onClick={handleEsjeruk}
        >
          Jeruk Hangat
        </button>
      </div>
      <div className="col">
        <button
          className="p-3 border  bg-primary bg-opacity-75"
          onClick={handleEstehmanis}
        >
          Es Teh Manis
        </button>
      </div>
    </div>
  );
};

export default MenuMinuman;
