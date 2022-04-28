import GambarKasir from "./img/kasir.png";
import "./assets/style.css";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import React from "react";
import ListStruk from "./ListStruk";

// const menuSatu = "Ayam Goreng";
// const hargaSatu = 15000;

const menuMakanan = [
  {
    id: 1,
    nama: "ayam goreng",
    harga: 15000,
  },
  {
    id: 2,
    nama: "ayam bakar",
    harga: 25000,
  },
  {
    id: 3,
    nama: "ayam kalasan",
    harga: 45000,
  },
  {
    id: 4,
    nama: "ayam geprek",
    harga: 35000,
  },
  {
    id: 5,
    nama: "ayam rica rica",
    harga: 25000,
  },
];

const menuMinuman = [
  {
    id: 1,
    nama: "jus mangga",
    harga: 10000,
  },
  {
    id: 2,
    nama: "teh manis",
    harga: 5000,
  },
  {
    id: 3,
    nama: "teh hangat",
    harga: 25000,
  },
  {
    id: 4,
    nama: "es jeruk",
    harga: 10000,
  },
];

function Home(props) {
  const [count, setCount] = useState(0);
  const [countSatu, setCountSatu] = useState(0);
  const [todos, setTodos] = useState([]);
  const [todoss, setTodoss] = useState([]);
  const [toTotal, setTotal] = useState(0);

  const [toSatuMakanan, setMakanan] = useState([]);
  const [toHargaMakanan, setHarga] = useState([]);
  const [totalHargaMenu, setTotalHarga] = useState([]);
  const [dataBayar, setDataBayar] = useState("");
  const [dataKembalian, setDataKembalian] = useState([]);
  const [toTotalMakanan, setTotalMakanan] = useState(0);

  const [menuAbakar, setMakanAbakar] = useState([]);
  const [hargaAbakar, setHargaAbakar] = useState([]);

  useEffect(() => {
    setTotal(() => count * todoss);
  }, [count]);

  useEffect(() => {
    setTotalMakanan(() => countSatu * toHargaMakanan);
  }, [countSatu]);

  // const styles = StyleSheet.create({
  //   page: {
  //     flexDirection: "row",
  //     backgroundColor: "#E4E4E4",
  //   },
  //   section: {
  //     margin: 10,
  //     padding: 10,
  //     flexGrow: 1,
  //   },
  // });

  // const MyDocument = () => (
  //   <Document>
  //     <Page size="A4" style={styles.page}>
  //       <View style={styles.section}>
  //         <Text>Section #1</Text>
  //       </View>
  //       <View style={styles.section}>
  //         <Text>Section #2</Text>
  //       </View>
  //     </Page>
  //   </Document>
  // );

  const handleMenuMinum = () => {
    const menuSatu = menuMinuman.find((e) => e.id === 1);
    const minumanSatu = menuSatu.nama;
    const minumanHargaSatu = menuSatu.harga;
    setTodos(() => [minumanSatu]);
    setTodoss(() => [minumanHargaSatu]);
  };

  const totalHarga = () => {
    setTotalHarga(() => [
      Number(toTotal) + Number(toTotalMakanan) + Number(hargaAbakar),
    ]);
    setDataKembalian(() => [dataBayar - totalHargaMenu]);
  };

  const inputanBayar = (e) => {
    setDataBayar(e.target.value);
    console.log(" Input nominal ", dataBayar);
  };

  const handleMenuMakan = () => {
    const menuSatu = menuMakanan.find((e) => e.id === 1);
    const makananSatu = menuSatu.nama;
    const makananHargaSatu = menuSatu.harga;
    setMakanan(() => [makananSatu]);
    setHarga(() => [makananHargaSatu]);
  };

  const handleMenuDua = () => {
    const menuDua = menuMakanan.find((e) => e.id === 2);
    const makananDua = menuDua.nama;
    const makananHargaDua = menuDua.harga;
    setMakanAbakar((t) => [makananDua]);
    setHargaAbakar((t) => [makananHargaDua]);
    console.log(makananDua);
    console.log(makananHargaDua);
  };

  const handleMenuTiga = () => {
    const menuTiga = menuMakanan.find((e) => e.id === 3);
    console.log(menuTiga.nama);
    console.log(menuTiga.harga);
  };

  const handleMenuEmpat = () => {
    const menuEmpat = menuMakanan.find((e) => e.id === 4);
    console.log(menuEmpat.nama);
    console.log(menuEmpat.harga);
  };

  const handleMenuLima = () => {
    const menuLima = menuMakanan.find((e) => e.id === 5);
    console.log(menuLima.nama);
    console.log(menuLima.harga);
  };

  // const increment = () => {
  //   setCount(count + 1);
  //   const totalHarga = count * todoss;
  //   setTotal((e) => [totalHarga]);
  // };

  // const incrementMin = () => {
  //   setCount(count - 1);
  //   const totalHarga = toTotal - todoss;
  //   setTotal((e) => [totalHarga]);
  // };

  // const totalHargaChange = () => {
  //   const totalHarga = count * todoss;
  //   setTotal((e) => [totalHarga]);
  // };

  // console.log(count);
  // console.log(toTotal);

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="d-flex justify-content-start container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={GambarKasir}
              alt=""
              width={45}
              className="d-inline-block align-text-top"
            />
          </a>
          <h4>Aplikasi Kasir</h4>
        </div>
      </nav>
      <p></p>
      <div className="overflow-hidden jarak-kiri">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 border bg-light">MENU MAKANAN</div>
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-3">
              <div class="col">
                <button class="p-3 border bg-light" onClick={handleMenuMakan}>
                  Ayam Goreng
                </button>
              </div>
              <div class="col">
                <button class="p-3 border bg-light" onClick={handleMenuDua}>
                  Ayam Bakar
                </button>
              </div>
              <div class="col">
                <button class="p-3 border bg-light" onClick={handleMenuTiga}>
                  Ayam Kalasan
                </button>
              </div>
              <div class="col">
                <button class="p-3 border bg-light" onClick={handleMenuEmpat}>
                  Ayam Geprek
                </button>
              </div>
              <div class="col">
                <button class="p-3 border bg-light" onClick={handleMenuLima}>
                  Ayam Rica Rica
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">MENU MINUMAN</div>
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-3">
              <div class="col">
                <button class="p-3 border bg-light" onClick={handleMenuMinum}>
                  Add Todo
                </button>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 2</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 3</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 4</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 5</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 6</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 7</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 8</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 9</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 10</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 1</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 2</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 3</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 4</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Menu 5</div>
              </div>
            </div>
          </div>
          <div className="col jarak-kanan">
            <div className="p-3 border bg-light">STRUK</div>
            <div className="row">
              <div className="col">
                <div className="p-3 border bg-light mt-4">
                  ISI STRUK
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
                      <tr>
                        <td>
                          <span>{todos}</span>
                        </td>
                        <td>
                          <span>{todoss}</span>
                        </td>
                        <td>
                          <button onClick={() => setCount((c) => c - 1)}>
                            -
                          </button>
                        </td>
                        <td>{count}</td>
                        <td>
                          <button onClick={() => setCount((c) => c + 1)}>
                            +
                          </button>
                        </td>
                        <td>{toTotal}</td>
                      </tr>
                      <tr>
                        <td>{toSatuMakanan}</td>
                        <td>{toHargaMakanan}</td>
                        <td>
                          <button onClick={() => setCountSatu((c) => c - 1)}>
                            -
                          </button>
                        </td>
                        <td>{countSatu}</td>
                        <td>
                          <button onClick={() => setCountSatu((c) => c + 1)}>
                            +
                          </button>
                        </td>
                        <td>{toTotalMakanan}</td>
                      </tr>
                      <tr>
                        <td>{menuAbakar}</td>
                        <td>{hargaAbakar}</td>
                        <td>
                          <button onClick={() => setCountSatu((c) => c - 1)}>
                            -
                          </button>
                        </td>
                        <td>{countSatu}</td>
                        <td>
                          <button onClick={() => setCountSatu((c) => c + 1)}>
                            +
                          </button>
                        </td>
                        <td>{hargaAbakar}</td>
                      </tr>
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
                  <div className="row">
                    <div class="col">
                      <Popup
                        modal
                        trigger={
                          <button>
                            <div class="p-3 border bg-light">Bayar</div>
                          </button>
                        }
                      >
                        <div className="posisi-popup">
                          <label>Masukkan Nominal Bayar</label>
                          <br></br>
                          <input
                            type="number"
                            placeholder="Rupiah"
                            onChange={inputanBayar}
                          ></input>
                          <br></br>
                          <button onClick={totalHarga}>Bayar</button>
                        </div>
                      </Popup>
                    </div>
                    <div class="col">
                      <button>
                        <div class="p-3 border bg-light">Print</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
