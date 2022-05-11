import React from "react";

import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#3778C2";
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 30,
    flexGrow: 1,
    textAlign: "center",
  },
  sectionOne: {
    marginBottom: 10,
    padding: 10,
    textAlign: "center",
  },
  address: {
    fontSize: 20,
  },
  pageItem: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    flexGrow: 15,
  },
  title: {
    marginBottom: 400,
    padding: 15,
  },
  container: {
    flexDirection: "row",
    borderBottomColor: "#3778C2",
    backgroundColor: "#3778C2",
    color: "#fff",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 30,
    textAlign: "center",
    fontStyle: "bold",
  },
  description: {
    width: "60%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  qty: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  rate: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  amount: {
    width: "15%",
  },
});

const stylesItem = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#3778C2",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  description: {
    width: "60%",
    textAlign: "center",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  qty: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  rate: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  amount: {
    width: "15%",
    textAlign: "right",
    paddingRight: 8,
  },
  subtotaltitle: {
    width: "85%",
    borderRightColor: borderColor,
    textAlign: "left",
    paddingRight: 8,
  },
  subtotal: {
    width: "15%",
    borderLeftColor: borderColor,
    borderLeftWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
});

const MyDocument = ({
  ayamBakar,
  hargaAyamBakar,
  countAyamBakar,
  totalHargaAyamBakar,
  AyamRicarica,
  hargaAyamRicarica,
  countAyamRicarica,
  totalHargaAyamRicarica,
  ayamGeprek,
  hargaAyamGeprek,
  countAyamGeprek,
  totalHargaAyamGeprek,
  ayamKalasan,
  hargaAyamKalasan,
  countAyamKalasan,
  totalHargaAyamKalasan,
  ayamGoreng,
  hargaAyamGoreng,
  countAyamGoreng,
  totalHargaAyamGoreng,
  jusMangga,
  hargaJusmangga,
  countJusmangga,
  totalHargaJusmangga,
  airMineral,
  hargaAirmineral,
  countAirmineral,
  totalHargaAirmineral,
  tehHangat,
  hargaTehhangat,
  countTeh,
  totalHargaTehhangat,
  esJeruk,
  hargaEsjeruk,
  countEsjeruk,
  totalHargaEsjeruk,
  totalHargaMenu,
  dataKembalian,
  dataBayar,
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Joe'La Coffee & Cake </Text>
          <Text style={styles.address}>Jl Bhineka 2 No 1</Text>
        </View>
        <View style={styles.title}>
          <View style={styles.container}>
            <Text style={styles.description}>Item</Text>
            <Text style={styles.qty}>Harga</Text>
            <Text style={styles.rate}>Qty</Text>
            <Text style={styles.amount}>Total</Text>
          </View>
          {AyamRicarica.map((nama) => (
            <View style={stylesItem.row}>
              <Text style={stylesItem.description}>{nama}</Text>
              <Text style={stylesItem.qty}>{hargaAyamRicarica}</Text>
              <Text style={stylesItem.rate}>{countAyamRicarica}</Text>
              <Text style={stylesItem.amount}>{totalHargaAyamRicarica}</Text>
            </View>
          ))}
          {ayamGeprek.map((nama) => (
            <View style={stylesItem.row}>
              <Text style={stylesItem.description}>{nama}</Text>
              <Text style={stylesItem.qty}>{hargaAyamGeprek}</Text>
              <Text style={stylesItem.rate}>{countAyamGeprek}</Text>
              <Text style={stylesItem.amount}>{totalHargaAyamGeprek}</Text>
            </View>
          ))}
          {ayamKalasan.map((nama) => (
            <View style={stylesItem.row}>
              <Text style={stylesItem.description}>{nama}</Text>
              <Text style={stylesItem.qty}>{hargaAyamKalasan}</Text>
              <Text style={stylesItem.rate}>{countAyamKalasan}</Text>
              <Text style={stylesItem.amount}>{totalHargaAyamKalasan}</Text>
            </View>
          ))}
          {ayamBakar.map((nama) => (
            <View style={stylesItem.row}>
              <Text style={stylesItem.description}>{nama}</Text>
              <Text style={stylesItem.qty}>{hargaAyamBakar}</Text>
              <Text style={stylesItem.rate}>{countAyamBakar}</Text>
              <Text style={stylesItem.amount}>{totalHargaAyamBakar}</Text>
            </View>
          ))}
          {ayamGoreng.map((nama) => (
            <View style={stylesItem.row}>
              <Text style={stylesItem.description}>{nama}</Text>
              <Text style={stylesItem.qty}>{hargaAyamGoreng}</Text>
              <Text style={stylesItem.rate}>{countAyamGoreng}</Text>
              <Text style={stylesItem.amount}>{totalHargaAyamGoreng}</Text>
            </View>
          ))}
          {jusMangga.map((nama) => (
            <View style={stylesItem.row}>
              <Text style={stylesItem.description}>{nama}</Text>
              <Text style={stylesItem.qty}>{hargaJusmangga}</Text>
              <Text style={stylesItem.rate}>{countJusmangga}</Text>
              <Text style={stylesItem.amount}>{totalHargaJusmangga}</Text>
            </View>
          ))}
          {airMineral.map((nama) => (
            <View style={stylesItem.row}>
              <Text style={stylesItem.description}>{nama}</Text>
              <Text style={stylesItem.qty}>{hargaAirmineral}</Text>
              <Text style={stylesItem.rate}>{countAirmineral}</Text>
              <Text style={stylesItem.amount}>{totalHargaAirmineral}</Text>
            </View>
          ))}
          {tehHangat.map((nama) => (
            <View style={stylesItem.row}>
              <Text style={stylesItem.description}>{nama}</Text>
              <Text style={stylesItem.qty}>{hargaTehhangat}</Text>
              <Text style={stylesItem.rate}>{countTeh}</Text>
              <Text style={stylesItem.amount}>{totalHargaTehhangat}</Text>
            </View>
          ))}
          {esJeruk.map((nama) => (
            <View style={stylesItem.row}>
              <Text style={stylesItem.description}>{nama}</Text>
              <Text style={stylesItem.qty}>{hargaEsjeruk}</Text>
              <Text style={stylesItem.rate}>{countEsjeruk}</Text>
              <Text style={stylesItem.amount}>{totalHargaEsjeruk}</Text>
            </View>
          ))}
          <View style={stylesItem.row}>
            <Text style={stylesItem.subtotaltitle}>SUB Total</Text>
            <Text style={stylesItem.subtotal}>{totalHargaMenu}</Text>
          </View>
          <View style={stylesItem.row}>
            <Text style={stylesItem.subtotaltitle}>Bayar</Text>
            <Text style={stylesItem.subtotal}>{dataBayar}</Text>
          </View>
          <View style={stylesItem.row}>
            <Text style={stylesItem.subtotaltitle}>Kembalian</Text>
            <Text style={stylesItem.subtotal}>{dataKembalian}</Text>
          </View>
        </View>

        <View style={styles.sectionOne}>
          <Text>Terimakasih, Semoga Datang Kembali</Text>
          <Text>Kepuasaan Pelanggan Adalah Prioritas kami </Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
