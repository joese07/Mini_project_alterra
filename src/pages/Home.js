import GambarKasir from "./img/kasir.png";
import "./assets/style.css";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import ListStruk from "./ListStruk";
import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MenuMakanan from "./MenuMakanan";
import MenuMinuman from "./MenuMinuman";
import MenuStruk from "./MenuStruk";
import { gql, useMutation } from "@apollo/client";

const getStruk = gql`
  query MyQuery {
    struk {
      id
      menu
      satuan
      quantity
      total
      sub_total
      uang_bayar
      kembalian
    }
  }
`;
const insertStruk = gql`
  mutation InsertStruk(
    $kembalian: String
    $menu: String
    $quantity: String
    $satuan: String
    $sub_total: String
    $total: String
    $uang_bayar: String
  ) {
    insert_struk(
      objects: {
        menu: $menu
        satuan: $satuan
        quantity: $quantity
        total: $total
        sub_total: $sub_total
        uang_bayar: $uang_bayar
        kembalian: $kembalian
      }
    ) {
      affected_rows
    }
  }
`;

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

  // session menu minuman tehmanis
  const [esTehmanis, setEstehmanis] = useState([]);
  const [hargaEstehmanis, setHargaEstehmanis] = useState([]);
  const [totalHargaEstehmanis, setTotalEstehmanis] = useState([]);
  const [countEstehmanis, setCountEstehmanis] = useState(0);

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

  const [InsertStruk, { loading }] = useMutation(insertStruk, {
    refetchQueries: [getStruk],
  });

  const handelAirmineral = () => {
    // const menuAirmineral = menuMinuman.find((e) => e.id === 2);
    const minumanAirmineral = "Air Mineral";
    const minumanHargaAirmineral = 5000;
    setAirMineral((t) => [minumanAirmineral]);
    setHargaMineral((t) => [minumanHargaAirmineral]);
  };

  useEffect(() => {
    setTotalAirmineral(() => countAirmineral * hargaAirmineral);
  }, [countAirmineral, hargaAirmineral]);

  const handleTehhangat = () => {
    const minumanTehhangat = "Teh Hangat";
    const minumanHargaTehhangat = 4000;
    setTehhangat((t) => [minumanTehhangat]);
    setHargaTeh((t) => [minumanHargaTehhangat]);
  };

  useEffect(() => {
    setTotalTehhangat(() => countTeh * hargaTehhangat);
  }, [countTeh, hargaTehhangat]);

  const handleEsjeruk = () => {
    const minumanEsjeruk = "Jeruk Hangat";
    const minumanHargaEsjeruk = 8000;
    setEsjeruk((t) => [minumanEsjeruk]);
    setHargaesjeruk((t) => [minumanHargaEsjeruk]);
  };

  useEffect(() => {
    setTotalEsjeruk(() => countEsjeruk * hargaEsjeruk);
  }, [countEsjeruk, hargaEsjeruk]);

  const handleJusMangga = () => {
    const minumanJusmangga = "Jus Mangga";
    const minumanHargaJusmangga = 10000;
    setJusmangga((t) => [minumanJusmangga]);
    setHargajusmangga((t) => [minumanHargaJusmangga]);
  };

  useEffect(() => {
    setTotalJusmangga(() => countJusmangga * hargaJusmangga);
  }, [countJusmangga, hargaJusmangga]);

  const handleEstehmanis = () => {
    const minumanEstehmanis = "Es Teh Manis";
    const minumanHargaEstehmanis = 5000;
    setEstehmanis((t) => [minumanEstehmanis]);
    setHargaEstehmanis((t) => [minumanHargaEstehmanis]);
  };

  useEffect(() => {
    setTotalEstehmanis(() => countEstehmanis * hargaEstehmanis);
  }, [countEstehmanis, hargaEstehmanis]);

  const handleAyamGoreng = () => {
    const makananAyamGoreng = "Ayam Goreng";
    const makananHargaAyamGoreng = 20000;
    setAyamGoreng((t) => [makananAyamGoreng]);
    setHargaAyamGoreng((t) => [makananHargaAyamGoreng]);
  };

  useEffect(() => {
    setTotalAyamGoreng(() => countAyamGoreng * hargaAyamGoreng);
  }, [countAyamGoreng, hargaAyamGoreng]);

  const handleAyamBakar = () => {
    const makananAyamBakar = "Ayam Bakar";
    const makananHargaAyamBakar = 20000;
    setAyamBakar(() => [makananAyamBakar]);
    setHargaAyamBakar(() => [makananHargaAyamBakar]);
  };

  useEffect(() => {
    setTotalAyamBakar(() => countAyamBakar * hargaAyamBakar);
  }, [countAyamBakar, hargaAyamBakar]);

  const handleAyamKalasan = () => {
    const makananAyamKalasan = "Ayam Kalasan";
    const makananHargaAyamKalasan = 20000;
    setAyamKalasan((t) => [makananAyamKalasan]);
    setHargaAyamKalasan((t) => [makananHargaAyamKalasan]);
  };

  useEffect(() => {
    setTotalAyamKalasan(() => countAyamKalasan * hargaAyamKalasan);
  }, [countAyamKalasan, hargaAyamKalasan]);

  const handleAyamGeprek = () => {
    const makananAyamGeprek = "Ayam Geprek";
    const makananHargaAyamGeprek = 20000;
    setAyamGeprek((t) => [makananAyamGeprek]);
    setHargaAyamGeprek((t) => [makananHargaAyamGeprek]);
  };

  useEffect(() => {
    setTotalAyamGeprek(() => countAyamGeprek * hargaAyamGeprek);
  }, [countAyamGeprek, hargaAyamGeprek]);

  const handleAyamRicaRica = () => {
    const makananAyamRicarica = "Ayam Rica Rica";
    const makananHargaAyamRicarica = 20000;
    setAyamRicarica((t) => [makananAyamRicarica]);
    setHargaAyamRicarica((t) => [makananHargaAyamRicarica]);
  };

  useEffect(() => {
    setTotalAyamRicarica(() => countAyamRicarica * hargaAyamRicarica);
  }, [countAyamRicarica, hargaAyamRicarica]);

  useEffect(() => {
    setTotalHarga(
      () =>
        Number(totalHargaAirmineral) +
        Number(totalHargaTehhangat) +
        Number(totalHargaEsjeruk) +
        Number(totalHargaJusmangga) +
        Number(totalHargaEstehmanis) +
        Number(totalHargaAyamGoreng) +
        Number(totalHargaAyamBakar) +
        Number(totalHargaAyamKalasan) +
        Number(totalHargaAyamGeprek) +
        Number(totalHargaAyamRicarica)
    );
  }, [
    totalHargaAirmineral,
    totalHargaTehhangat,
    totalHargaEsjeruk,
    totalHargaJusmangga,
    totalHargaEstehmanis,
    totalHargaAyamGoreng,
    totalHargaAyamBakar,
    totalHargaAyamKalasan,
    totalHargaAyamGeprek,
    totalHargaAyamRicarica,
  ]);

  function totalHarga() {
    setDataKembalian(() => [dataBayar - totalHargaMenu]);
  }

  const inputanBayar = (e) => {
    setDataBayar(e.target.value);
    console.log(" Input nominal ", dataBayar);
  };

  const saveData = () => {
    InsertStruk({
      variables: {
        menu: ayamBakar.toString(),
        satuan: hargaAyamBakar.toString(),
        quantity: countAyamBakar.toString(),
        total: totalHargaAyamBakar.toString(),
        sub_total: totalHargaMenu.toString(),
        uang_bayar: dataBayar.toString(),
        kembalian: dataKembalian.toString(),
      },
    });
    console.log("sub total harga belanjaan cust " + totalHargaMenu);
    console.log("jumlah uang cust " + dataBayar);
    console.log("jumlah kembalian cust " + dataKembalian);
    console.log("makanan yang dipesan ", ayamBakar.toString());
    console.log("harga barang satuan  ", hargaAyamBakar.toString());
    console.log("banyaknya barang ", countAyamBakar);
    console.log("total harga barang ", totalHargaAyamBakar);
  };

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

            <MenuMakanan
              handleAyamBakar={handleAyamBakar}
              handleAyamGeprek={handleAyamGeprek}
              handleAyamGoreng={handleAyamGoreng}
              handleAyamKalasan={handleAyamKalasan}
              handleAyamRicaRica={handleAyamRicaRica}
            />
          </div>
          <div className="col">
            <div className="p-3 border bg-primary bg-opacity-75">
              MENU MINUMAN
            </div>
            <MenuMinuman
              handleEsjeruk={handleEsjeruk}
              handelAirmineral={handelAirmineral}
              handleEstehmanis={handleEstehmanis}
              handleJusMangga={handleJusMangga}
              handleTehhangat={handleTehhangat}
            />
          </div>
          <div className="col jarak-kanan">
            <div className="p-3 border bg-light">STRUK</div>
            <div className="row">
              <div className="col">
                <div className="p-3 border bg-light mt-4">
                  ISI STRUK
                  <MenuStruk // session struk ayam bakar
                    ayamBakar={ayamBakar}
                    hargaAyamBakar={hargaAyamBakar}
                    countAyamBakar={countAyamBakar}
                    totalHargaAyamBakar={totalHargaAyamBakar}
                    setCountAyamBakar={setCountAyamBakar}
                    // session struk ayamricarica
                    AyamRicarica={AyamRicarica}
                    hargaAyamRicarica={hargaAyamRicarica}
                    countAyamRicarica={countAyamRicarica}
                    totalHargaAyamRicarica={totalHargaAyamRicarica}
                    setCountAyamRicarica={setCountAyamRicarica}
                    // session struk ayam geprek
                    ayamGeprek={ayamGeprek}
                    hargaAyamGeprek={hargaAyamGeprek}
                    countAyamGeprek={countAyamGeprek}
                    totalHargaAyamGeprek={totalHargaAyamGeprek}
                    setCountAyamGeprek={setCountAyamGeprek}
                    // session struk ayam kalasan
                    ayamKalasan={ayamKalasan}
                    hargaAyamKalasan={hargaAyamKalasan}
                    countAyamKalasan={countAyamKalasan}
                    totalHargaAyamKalasan={totalHargaAyamKalasan}
                    setCountAyamKalasan={setCountAyamKalasan}
                    // session struk ayam goreng
                    ayamGoreng={ayamGoreng}
                    hargaAyamGoreng={hargaAyamGoreng}
                    countAyamGoreng={countAyamGoreng}
                    totalHargaAyamGoreng={totalHargaAyamGoreng}
                    setCountAyamGoreng={setCountAyamGoreng}
                    //session struk jusmangga
                    jusMangga={jusMangga}
                    hargaJusmangga={hargaJusmangga}
                    countJusmangga={countJusmangga}
                    totalHargaJusmangga={totalHargaJusmangga}
                    setCountJusmangga={setCountJusmangga}
                    //session struk airMineral
                    airMineral={airMineral}
                    hargaAirmineral={hargaAirmineral}
                    countAirmineral={countAirmineral}
                    totalHargaAirmineral={totalHargaAirmineral}
                    setCountAirmineral={setCountAirmineral}
                    //session struk tehhangat
                    tehHangat={tehHangat}
                    hargaTehhangat={hargaTehhangat}
                    countTeh={countTeh}
                    totalHargaTehhangat={totalHargaTehhangat}
                    setCountTeh={setCountTeh}
                    //session esjeruk
                    esJeruk={esJeruk}
                    hargaEsjeruk={hargaEsjeruk}
                    countEsjeruk={countEsjeruk}
                    totalHargaEsjeruk={totalHargaEsjeruk}
                    setCountEsjeruk={setCountEsjeruk}
                    //session es teh manis
                    esTehmanis={esTehmanis}
                    hargaEstehmanis={hargaEstehmanis}
                    countEstehmanis={countEstehmanis}
                    totalHargaEstehmanis={totalHargaEstehmanis}
                    setCountEstehmanis={setCountEstehmanis}
                    // session total struk
                    totalHargaMenu={totalHargaMenu}
                    dataKembalian={dataKembalian}
                    dataBayar={dataBayar}
                  />
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
                        {(close) => (
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
                            <button className="close" onClick={close}>
                              Close
                            </button>
                          </div>
                        )}
                      </Popup>
                    </div>
                    <div class="col">
                      <Popup
                        modal
                        trigger={
                          <button>
                            <div
                              class="p-3 border bg-light"
                              onClick={totalHarga}
                            >
                              Print
                            </div>
                          </button>
                        }
                      >
                        <div>
                          <PDFViewer width={800} height={500}>
                            <ListStruk
                              // session struk ayam bakar
                              ayamBakar={ayamBakar}
                              hargaAyamBakar={hargaAyamBakar}
                              countAyamBakar={countAyamBakar}
                              totalHargaAyamBakar={totalHargaAyamBakar}
                              // session struk ayamricarica
                              AyamRicarica={AyamRicarica}
                              hargaAyamRicarica={hargaAyamRicarica}
                              countAyamRicarica={countAyamRicarica}
                              totalHargaAyamRicarica={totalHargaAyamRicarica}
                              // session struk ayam geprek
                              ayamGeprek={ayamGeprek}
                              hargaAyamGeprek={hargaAyamGeprek}
                              countAyamGeprek={countAyamGeprek}
                              totalHargaAyamGeprek={totalHargaAyamGeprek}
                              // session struk ayam kalasan
                              ayamKalasan={ayamKalasan}
                              hargaAyamKalasan={hargaAyamKalasan}
                              countAyamKalasan={countAyamKalasan}
                              totalHargaAyamKalasan={totalHargaAyamKalasan}
                              // session struk ayam goreng
                              ayamGoreng={ayamGoreng}
                              hargaAyamGoreng={hargaAyamGoreng}
                              countAyamGoreng={countAyamGoreng}
                              totalHargaAyamGoreng={totalHargaAyamGoreng}
                              //session struk jusmangga
                              jusMangga={jusMangga}
                              hargaJusmangga={hargaJusmangga}
                              countJusmangga={countJusmangga}
                              totalHargaJusmangga={totalHargaJusmangga}
                              //session struk airMineral
                              airMineral={airMineral}
                              hargaAirmineral={hargaAirmineral}
                              countAirmineral={countAirmineral}
                              totalHargaAirmineral={totalHargaAirmineral}
                              //session struk tehhangat
                              tehHangat={tehHangat}
                              hargaTehhangat={hargaTehhangat}
                              countTeh={countTeh}
                              totalHargaTehhangat={totalHargaTehhangat}
                              //session esjeruk
                              esJeruk={esJeruk}
                              hargaEsjeruk={hargaEsjeruk}
                              countEsjeruk={countEsjeruk}
                              totalHargaEsjeruk={totalHargaEsjeruk}
                              //session esjeruk
                              esTehmanis={esTehmanis}
                              hargaEstehmanis={hargaEstehmanis}
                              countEstehmanis={countEstehmanis}
                              totalHargaEstehmanis={totalHargaEstehmanis}
                              // session total struk
                              totalHargaMenu={totalHargaMenu}
                              dataKembalian={dataKembalian}
                              dataBayar={dataBayar}
                            />
                          </PDFViewer>
                          <p></p>
                          <button
                            className="close"
                            onClick={() => window.location.reload()}
                          >
                            Tutup
                          </button>
                          <button onClick={saveData}>Save</button>
                        </div>
                      </Popup>
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
