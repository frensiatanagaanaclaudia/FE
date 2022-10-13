import { CCol, CEmbed, CEmbedItem, CJumbotron, CRow } from "@coreui/react";
import React from "react";
import Fade from "react-reveal/Fade";
const Hero = () => {
  return (
    <Fade top>
      <CJumbotron>
        <CRow>
          <CCol>
            <h1 className="display-3">UKM PMK ITB STIKOM</h1>
            <h5 className="lead"><strong>
              Unit Kegiatan Mahasiswa Persaudaraan Mahasiswa Kristen</strong>
            </h5>
            {" "}
            <h1>VISI</h1>
            <p>Menjadikan wadah atau organisasi berkumpulnya Mahasiswa Kristen
                ITB STIKOM Bali untuk mewujudkan mahasiswa yang berbudi dan
                menggenapi visi Allah di dunia.</p>
            <h1>MISI</h1>
            <ul>
<li>Melakukan KTB (Kelompok Tumbuh Bersama) secara rutin </li> 
<li>Melakukan pendalaman Alkitab bersama</li>
<li>Menjadi contoh dan teladan di kampus ITB STIKOM Bali</li>
<li>Menjadikan anggota PMK saudara di dalam Tuhan</li>
</ul>

            {/* <h1>MISI</h1><br></br>
 */}
          </CCol>
          <CCol>
            <CEmbed ratio="16by9">
              <CEmbedItem
                src="https://www.youtube.com/embed/XEhXXLrlLiY"
                title="VideoUkmPmk"
              />
            </CEmbed>
          </CCol>
        </CRow>
      </CJumbotron>
    </Fade>
  );
};
export default Hero;
