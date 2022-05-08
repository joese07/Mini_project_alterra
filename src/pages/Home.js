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
    nama: "air mineral",
    harga: 5000,
  },
  {
    id: 3,
    nama: "teh hangat",
    harga: 4000,
  },
  {
    id: 4,
    nama: "es jeruk",
    harga: 10000,
  },
];

function Home(props) {
  // session total bayar dan kembalian
  const [totalHargaMenu, setTotalHarga] = useState([]);
  const [dataBayar, setDataBayar] = useState("");
  const [dataKembalian, setDataKembalian] = useState([]);

  // session menu minuman air mineral
  const [airMineral, setAirMineral] = useState([]);
  const [hargaAirmineral, setHargaMineral] = useState([]);
  const [totalHargaAirmineral, setTotalAirmineral] = useState([]);
  const [countAirmineral, setCountAirmineral] = useState(0);

  // session menu minuman teh hangat
  const [tehHangat, setTehhangat] = useState([]);
  const [hargaTehhangat, setHargaTeh] = useState([]);
  const [totalHargaTehhangat, setTotalTehhangat] = useState([]);
  const [countTeh, setCountTeh] = useState(0);

  // session menu minuman esjeruk
  const [esJeruk, setEsjeruk] = useState([]);
  const [hargaEsjeruk, setHargaesjeruk] = useState([]);
  const [totalHargaEsjeruk, setTotalEsjeruk] = useState([]);
  const [countEsjeruk, setCountEsjeruk] = useState(0);

  // session menu minuman jusmangga
  const [jusMangga, setJusmangga] = useState([]);
  const [hargaJusmangga, setHargajusmangga] = useState([]);
  const [totalHargaJusmangga, setTotalJusmangga] = useState([]);
  const [countJusmangga, setCountJusmangga] = useState(0);

  //session menu makanan ayamgoreng
  const [ayamGoreng, setAyamGoreng] = useState([]);
  const [hargaAyamGoreng, setHargaAyamGoreng] = useState([]);
  const [totalHargaAyamGoreng, setTotalAyamGoreng] = useState([]);
  const [countAyamGoreng, setCountAyamGoreng] = useState(0);

  //session menu makanan ayambakar
  const [ayamBakar, setAyamBakar] = useState([]);
  const [hargaAyamBakar, setHargaAyamBakar] = useState([]);
  const [totalHargaAyamBakar, setTotalAyamBakar] = useState([]);
  const [countAyamBakar, setCountAyamBakar] = useState(0);

  //session menu makanan ayamkalasan
  const [ayamKalasan, setAyamKalasan] = useState([]);
  const [hargaAyamKalasan, setHargaAyamKalasan] = useState([]);
  const [totalHargaAyamKalasan, setTotalAyamKalasan] = useState([]);
  const [countAyamKalasan, setCountAyamKalasan] = useState(0);

  //session menu makanan ayamgeprek
  const [ayamGeprek, setAyamGeprek] = useState([]);
  const [hargaAyamGeprek, setHargaAyamGeprek] = useState([]);
  const [totalHargaAyamGeprek, setTotalAyamGeprek] = useState([]);
  const [countAyamGeprek, setCountAyamGeprek] = useState(0);

  //session menu makanan AyamRicarica
  const [AyamRicarica, setAyamRicarica] = useState([]);
  const [hargaAyamRicarica, setHargaAyamRicarica] = useState([]);
  const [totalHargaAyamRicarica, setTotalAyamRicarica] = useState([]);
  const [countAyamRicarica, setCountAyamRicarica] = useState(0);

  const handelAirmineral = () => {
    const menuAirmineral = menuMinuman.find((e) => e.id === 2);
    const minumanAirmineral = menuAirmineral.nama;
    const minumanHargaAirmineral = menuAirmineral.harga;
    setAirMineral((t) => [minumanAirmineral]);
    setHargaMineral((t) => [minumanHargaAirmineral]);
  };

  useEffect(() => {
    setTotalAirmineral(() => countAirmineral * hargaAirmineral);
  }, [countAirmineral]);

  const handleTehhangat = () => {
    const menuTehhangat = menuMinuman.find((e) => e.id === 3);
    const minumanTehhangat = menuTehhangat.nama;
    const minumanHargaTehhangat = menuTehhangat.harga;
    setTehhangat((t) => [minumanTehhangat]);
    setHargaTeh((t) => [minumanHargaTehhangat]);
  };

  useEffect(() => {
    setTotalTehhangat(() => countTeh * hargaTehhangat);
  }, [countTeh]);

  const handleEsjeruk = () => {
    const menuEsjeruk = menuMinuman.find((e) => e.id === 4);
    const minumanEsjeruk = menuEsjeruk.nama;
    const minumanHargaEsjeruk = menuEsjeruk.harga;
    setEsjeruk((t) => [minumanEsjeruk]);
    setHargaesjeruk((t) => [minumanHargaEsjeruk]);
  };

  useEffect(() => {
    setTotalEsjeruk(() => countEsjeruk * hargaEsjeruk);
  }, [countEsjeruk]);

  const handleJusMangga = () => {
    const menuJusmangga = menuMinuman.find((e) => e.id === 1);
    const minumanJusmangga = menuJusmangga.nama;
    const minumanHargaJusmangga = menuJusmangga.harga;
    setJusmangga((t) => [minumanJusmangga]);
    setHargajusmangga((t) => [minumanHargaJusmangga]);
  };

  useEffect(() => {
    setTotalJusmangga(() => countJusmangga * hargaJusmangga);
  }, [countJusmangga]);

  const handleAyamGoreng = () => {
    const menuAyamGoreng = menuMakanan.find((e) => e.id === 1);
    const makananAyamGoreng = menuAyamGoreng.nama;
    const makananHargaAyamGoreng = menuAyamGoreng.harga;
    setAyamGoreng((t) => [makananAyamGoreng]);
    setHargaAyamGoreng((t) => [makananHargaAyamGoreng]);
  };

  useEffect(() => {
    setTotalAyamGoreng(() => countAyamGoreng * hargaAyamGoreng);
  }, [countAyamGoreng]);

  const handleAyamBakar = () => {
    const menuAyamBakar = menuMakanan.find((e) => e.id === 2);
    const makananAyamBakar = menuAyamBakar.nama;
    const makananHargaAyamBakar = menuAyamBakar.harga;
    setAyamBakar((t) => [makananAyamBakar]);
    setHargaAyamBakar((t) => [makananHargaAyamBakar]);
  };

  useEffect(() => {
    setTotalAyamBakar(() => countAyamBakar * hargaAyamBakar);
  }, [countAyamBakar]);

  const handleAyamKalasan = () => {
    const menuAyamKalasan = menuMakanan.find((e) => e.id === 3);
    const makananAyamKalasan = menuAyamKalasan.nama;
    const makananHargaAyamKalasan = menuAyamKalasan.harga;
    setAyamKalasan((t) => [makananAyamKalasan]);
    setHargaAyamKalasan((t) => [makananHargaAyamKalasan]);
  };

  useEffect(() => {
    setTotalAyamKalasan(() => countAyamKalasan * hargaAyamKalasan);
  }, [countAyamKalasan]);

  const handleAyamGeprek = () => {
    const menuAyamGeprek = menuMakanan.find((e) => e.id === 4);
    const makananAyamGeprek = menuAyamGeprek.nama;
    const makananHargaAyamGeprek = menuAyamGeprek.harga;
    setAyamGeprek((t) => [makananAyamGeprek]);
    setHargaAyamGeprek((t) => [makananHargaAyamGeprek]);
  };

  useEffect(() => {
    setTotalAyamGeprek(() => countAyamGeprek * hargaAyamGeprek);
  }, [countAyamGeprek]);

  const handleAyamRicaRica = () => {
    const menuAyamRicarica = menuMakanan.find((e) => e.id === 5);
    const makananAyamRicarica = menuAyamRicarica.nama;
    const makananHargaAyamRicarica = menuAyamRicarica.harga;
    setAyamRicarica((t) => [makananAyamRicarica]);
    setHargaAyamRicarica((t) => [makananHargaAyamRicarica]);
  };

  useEffect(() => {
    setTotalAyamRicarica(() => countAyamRicarica * hargaAyamRicarica);
  }, [countAyamRicarica]);

  const totalHarga = () => {
    setTotalHarga(() => [
      Number(totalHargaAirmineral) +
        Number(totalHargaTehhangat) +
        Number(totalHargaEsjeruk) +
        Number(totalHargaJusmangga) +
        Number(totalHargaAyamGoreng) +
        Number(totalHargaAyamBakar) +
        Number(totalHargaAyamKalasan),
    ]);
    setDataKembalian(() => [dataBayar - totalHargaMenu]);
  };

  const inputanBayar = (e) => {
    setDataBayar(e.target.value);
    console.log(" Input nominal ", dataBayar);
  };

  console.log(ayamGoreng + totalHargaAyamGoreng);
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
            <div className="p-3 border bg-danger bg-opacity-75">
              MENU MAKANAN
            </div>

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
                <button
                  class="p-3 border bg-light"
                  onClick={handleAyamRicaRica}
                >
                  Ayam Rica Rica
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-primary bg-opacity-75">
              MENU MINUMAN
            </div>
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
                  Es Jeruk
                </button>
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
                      {" "}
                      {AyamRicarica.map((todo) => {
                        return (
                          <tr>
                            <td>{todo}</td>
                            <td>{hargaAyamRicarica}</td>
                            <td>
                              <button
                                onClick={() =>
                                  setCountAyamRicarica((c) => c - 1)
                                }
                              >
                                -
                              </button>
                            </td>
                            <td>{countAyamRicarica}</td>
                            <td>
                              <button
                                onClick={() =>
                                  setCountAyamRicarica((c) => c + 1)
                                }
                              >
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
                              <button
                                onClick={() => setCountAyamGeprek((c) => c - 1)}
                              >
                                -
                              </button>
                            </td>
                            <td>{countAyamGeprek}</td>
                            <td>
                              <button
                                onClick={() => setCountAyamGeprek((c) => c + 1)}
                              >
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
                              <button
                                onClick={() =>
                                  setCountAyamKalasan((c) => c - 1)
                                }
                              >
                                -
                              </button>
                            </td>
                            <td>{countAyamKalasan}</td>
                            <td>
                              <button
                                onClick={() =>
                                  setCountAyamKalasan((c) => c + 1)
                                }
                              >
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
                              <button
                                onClick={() => setCountAyamBakar((c) => c - 1)}
                              >
                                -
                              </button>
                            </td>
                            <td>{countAyamBakar}</td>
                            <td>
                              <button
                                onClick={() => setCountAyamBakar((c) => c + 1)}
                              >
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
                              <button
                                onClick={() => setCountAyamGoreng((c) => c - 1)}
                              >
                                -
                              </button>
                            </td>
                            <td>{countAyamGoreng}</td>
                            <td>
                              <button
                                onClick={() => setCountAyamGoreng((c) => c + 1)}
                              >
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
                              <button
                                onClick={() => setCountJusmangga((c) => c - 1)}
                              >
                                -
                              </button>
                            </td>
                            <td>{countJusmangga}</td>
                            <td>
                              <button
                                onClick={() => setCountJusmangga((c) => c + 1)}
                              >
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
                              <button
                                onClick={() => setCountAirmineral((c) => c - 1)}
                              >
                                -
                              </button>
                            </td>
                            <td>{countAirmineral}</td>
                            <td>
                              <button
                                onClick={() => setCountAirmineral((c) => c + 1)}
                              >
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
                              <button onClick={() => setCountTeh((c) => c - 1)}>
                                -
                              </button>
                            </td>
                            <td>{countTeh}</td>
                            <td>
                              <button onClick={() => setCountTeh((c) => c + 1)}>
                                +
                              </button>
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
                              <button
                                onClick={() => setCountEsjeruk((c) => c - 1)}
                              >
                                -
                              </button>
                            </td>
                            <td>{countEsjeruk}</td>
                            <td>
                              <button
                                onClick={() => setCountEsjeruk((c) => c + 1)}
                              >
                                +
                              </button>
                            </td>
                            <td>{totalHargaEsjeruk}</td>
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
