import { CButton, CCol, CRow } from "@coreui/react";
import React from "react";

export default function Footer() {
  return (
    <footer style={{ marginTop: "20px" }}>
      <div className="card p-5">
        <CRow className="d-none d-md-flex d-lg-flex d-xl-flex">
          {/* <CCol>
            <h3>UKM PMK ITB STIKOM BALI</h3>
            <p>Unit Kegiatan Mahasiswa Persaudaraan Mahasiswa Kristen</p>
          </CCol> */}
          <CCol>
            <h6>Konten</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <CButton type="link" to="/galeri"></CButton>Galeri
              </li>
              <li className="list-group-item">
                <CButton type="link" to="/artikel"></CButton>Artikel
              </li>
            </ul>
          </CCol>

          <CCol>
            <h6>More About PMK</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <CButton
                  type="link"
                  href="https://www.instagram.com/pmkstikombali/"
                ></CButton>
                Instagram
              </li>
              <li className="list-group-item">
                <CButton type="link" href="tel:+6285737439604"></CButton>
                WhatsApp
              </li>
            </ul>
          </CCol>

          <CRow>
            <div className="text-center col">
              CopyRight 2022 * All Rights Reversed * Frensia Tanaga Anaclaudia
            </div>
          </CRow>
        </CRow>
      </div>
    </footer>
  );
}
