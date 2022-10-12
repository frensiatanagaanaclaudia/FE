import {  CCol, CEmbed, CEmbedItem, CJumbotron, CRow } from '@coreui/react';
import React from 'react';
import Fade from 'react-reveal/Fade';
const Hero=()=> {
    
  return (
    <Fade top>
         <CJumbotron>
          <CRow>
            <CCol>
      <h1 className="display-3">UKM PMK ITB STIKOM</h1>
      <p className="lead">Unit Kegiatan Mahasiswa Persaudaraan Mahasiswa Kristen</p>
      </CCol>
      <CCol>
      <CEmbed 
      ratio="16by9"
    >
      <CEmbedItem src="https://www.youtube.com/embed/XEhXXLrlLiY" title='VideoUkmPmk'/>
    </CEmbed>

    </CCol>
    </CRow>
    </CJumbotron>
    </Fade>
   
  );
};
export default  Hero;