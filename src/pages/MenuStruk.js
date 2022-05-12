const MenuStruk = ({
  ayamBakar,
  hargaAyamBakar,
  countAyamBakar,
  totalHargaAyamBakar,
  setCountAyamBakar,
  AyamRicarica,
  hargaAyamRicarica,
  countAyamRicarica,
  totalHargaAyamRicarica,
  setCountAyamRicarica,
  ayamGeprek,
  hargaAyamGeprek,
  countAyamGeprek,
  totalHargaAyamGeprek,
  setCountAyamGeprek,
  ayamKalasan,
  hargaAyamKalasan,
  countAyamKalasan,
  totalHargaAyamKalasan,
  setCountAyamKalasan,
  ayamGoreng,
  hargaAyamGoreng,
  countAyamGoreng,
  totalHargaAyamGoreng,
  setCountAyamGoreng,
  jusMangga,
  hargaJusmangga,
  countJusmangga,
  totalHargaJusmangga,
  setCountJusmangga,
  airMineral,
  hargaAirmineral,
  countAirmineral,
  totalHargaAirmineral,
  setCountAirmineral,
  tehHangat,
  hargaTehhangat,
  countTeh,
  totalHargaTehhangat,
  setCountTeh,
  esJeruk,
  hargaEsjeruk,
  countEsjeruk,
  totalHargaEsjeruk,
  setCountEsjeruk,
  esTehmanis,
  hargaEstehmanis,
  countEstehmanis,
  totalHargaEstehmanis,
  setCountEstehmanis,
  totalHargaMenu,
  dataKembalian,
  dataBayar,
}) => {
  return (
    <table className="table">
      <thead>
        <th scope="col">Menu</th>
        <th scope="col">Satuan</th>
        <th scope="col"></th>
        <th scope="col">Qty</th>
        <th scope="col"></th>
        <th scope="col">Total</th>
      </thead>
      <tbody>
        {AyamRicarica.map((todo) => {
          return (
            <tr>
              <td>{todo}</td>
              <td>{hargaAyamRicarica}</td>
              <td>
                <button onClick={() => setCountAyamRicarica((c) => c - 1)}>
                  -
                </button>
              </td>
              <td>{countAyamRicarica}</td>
              <td>
                <button onClick={() => setCountAyamRicarica((c) => c + 1)}>
                  +
                </button>
              </td>
              <td>{totalHargaAyamRicarica}</td>
            </tr>
          );
        })}
        {ayamGeprek.map((todo) => {
          return (
            <tr>
              <td>{todo}</td>
              <td>{hargaAyamGeprek}</td>
              <td>
                <button onClick={() => setCountAyamGeprek((c) => c - 1)}>
                  -
                </button>
              </td>
              <td>{countAyamGeprek}</td>
              <td>
                <button onClick={() => setCountAyamGeprek((c) => c + 1)}>
                  +
                </button>
              </td>
              <td>{totalHargaAyamGeprek}</td>
            </tr>
          );
        })}
        {ayamKalasan.map((todo) => {
          return (
            <tr>
              <td>{todo}</td>
              <td>{hargaAyamKalasan}</td>
              <td>
                <button onClick={() => setCountAyamKalasan((c) => c - 1)}>
                  -
                </button>
              </td>
              <td>{countAyamKalasan}</td>
              <td>
                <button onClick={() => setCountAyamKalasan((c) => c + 1)}>
                  +
                </button>
              </td>
              <td>{totalHargaAyamKalasan}</td>
            </tr>
          );
        })}
        {ayamBakar.map((todo) => {
          return (
            <tr>
              <td>{todo}</td>
              <td>{hargaAyamBakar}</td>
              <td>
                <button onClick={() => setCountAyamBakar((c) => c - 1)}>
                  -
                </button>
              </td>
              <td>{countAyamBakar}</td>
              <td>
                <button onClick={() => setCountAyamBakar((c) => c + 1)}>
                  +
                </button>
              </td>
              <td>{totalHargaAyamBakar}</td>
            </tr>
          );
        })}
        {ayamGoreng.map((todo) => {
          return (
            <tr>
              <td>{todo}</td>
              <td>{hargaAyamGoreng}</td>
              <td>
                <button onClick={() => setCountAyamGoreng((c) => c - 1)}>
                  -
                </button>
              </td>
              <td>{countAyamGoreng}</td>
              <td>
                <button onClick={() => setCountAyamGoreng((c) => c + 1)}>
                  +
                </button>
              </td>
              <td>{totalHargaAyamGoreng}</td>
            </tr>
          );
        })}
        {/* session minuman */}
        {jusMangga.map((todo) => {
          return (
            <tr>
              <td>{todo}</td>
              <td>{hargaJusmangga}</td>
              <td>
                <button onClick={() => setCountJusmangga((c) => c - 1)}>
                  -
                </button>
              </td>
              <td>{countJusmangga}</td>
              <td>
                <button onClick={() => setCountJusmangga((c) => c + 1)}>
                  +
                </button>
              </td>
              <td>{totalHargaJusmangga}</td>
            </tr>
          );
        })}
        {airMineral.map((todo) => {
          return (
            <tr>
              <td>{todo}</td>
              <td>{hargaAirmineral}</td>
              <td>
                <button onClick={() => setCountAirmineral((c) => c - 1)}>
                  -
                </button>
              </td>
              <td>{countAirmineral}</td>
              <td>
                <button onClick={() => setCountAirmineral((c) => c + 1)}>
                  +
                </button>
              </td>
              <td>{totalHargaAirmineral}</td>
            </tr>
          );
        })}
        {tehHangat.map((todo) => {
          return (
            <tr>
              <td>{todo}</td>
              <td>{hargaTehhangat}</td>
              <td>
                <button onClick={() => setCountTeh((c) => c - 1)}>-</button>
              </td>
              <td>{countTeh}</td>
              <td>
                <button onClick={() => setCountTeh((c) => c + 1)}>+</button>
              </td>
              <td>{totalHargaTehhangat}</td>
            </tr>
          );
        })}
        {esJeruk.map((todo) => {
          return (
            <tr>
              <td>{todo}</td>
              <td>{hargaEsjeruk}</td>
              <td>
                <button onClick={() => setCountEsjeruk((c) => c - 1)}>-</button>
              </td>
              <td>{countEsjeruk}</td>
              <td>
                <button onClick={() => setCountEsjeruk((c) => c + 1)}>+</button>
              </td>
              <td>{totalHargaEsjeruk}</td>
            </tr>
          );
        })}
        {esTehmanis.map((todo) => {
          return (
            <tr>
              <td>{todo}</td>
              <td>{hargaEstehmanis}</td>
              <td>
                <button onClick={() => setCountEstehmanis((c) => c - 1)}>
                  -
                </button>
              </td>
              <td>{countEstehmanis}</td>
              <td>
                <button onClick={() => setCountEstehmanis((c) => c + 1)}>
                  +
                </button>
              </td>
              <td>{totalHargaEstehmanis}</td>
            </tr>
          );
        })}
        <tr>
          <td>
            <strong>Total</strong>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{totalHargaMenu}</td>
        </tr>
        <tr>
          <td>
            <strong>Bayar</strong>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{dataBayar}</td>
        </tr>
        <tr>
          <td>
            <strong>Kembalian</strong>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{dataKembalian}</td>
        </tr>
      </tbody>
      {/* <ListStruk data={todos} name={todoss} /> */}
    </table>
  );
};
export default MenuStruk;
