const MenuMinuman = ({
  handleEsjeruk,
  handelAirmineral,
  handleEstehmanis,
  handleJusMangga,
  handleTehhangat,
}) => {
  return (
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-3">
      <div class="col">
        <button class="p-3 border bg-light" onClick={handleJusMangga}>
          Jus Mangga
        </button>
      </div>
      <div class="col">
        <button class="p-3 border bg-light" onClick={handelAirmineral}>
          Air Mineral
        </button>
      </div>
      <div class="col">
        <button class="p-3 border bg-light" onClick={handleTehhangat}>
          Teh Hangat
        </button>
      </div>
      <div class="col">
        <button class="p-3 border bg-light" onClick={handleEsjeruk}>
          Jeruk Hangat
        </button>
      </div>
      <div class="col">
        <button class="p-3 border bg-light" onClick={handleEstehmanis}>
          Es Teh Manis
        </button>
      </div>
    </div>
  );
};

export default MenuMinuman;
