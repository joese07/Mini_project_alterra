const MenuMakanan = ({
  handleAyamBakar,
  handleAyamGeprek,
  handleAyamKalasan,
  handleAyamGoreng,
  handleAyamRicaRica,
}) => {
  return (
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-3">
      <div class="col">
        <button class="p-3 border bg-light" onClick={handleAyamGoreng}>
          Ayam Goreng
        </button>
      </div>
      <div class="col">
        <button class="p-3 border bg-light" onClick={handleAyamBakar}>
          Ayam Bakar
        </button>
      </div>
      <div class="col">
        <button class="p-3 border bg-light" onClick={handleAyamKalasan}>
          Ayam Kalasan
        </button>
      </div>
      <div class="col">
        <button class="p-3 border bg-light" onClick={handleAyamGeprek}>
          Ayam Geprek
        </button>
      </div>
      <div class="col">
        <button class="p-3 border bg-light" onClick={handleAyamRicaRica}>
          Ayam Rica Rica
        </button>
      </div>
    </div>
  );
};

export default MenuMakanan;
