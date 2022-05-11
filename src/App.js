import Home from "./pages/Home";

import Login from "./pages/Login";
import "./App.css";
import ListStruk from "./pages/ListStruk";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="struk"
          element={
            <PDFViewer width={1000} height={1200}>
              <ListStruk />
            </PDFViewer>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
