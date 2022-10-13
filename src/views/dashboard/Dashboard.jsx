import React, { useEffect, useState } from "react";
import { CCol, CRow, CWidgetIcon } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "../../service/api";
import { useHistory } from "react-router-dom";
const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [data, setData] = useState([]);
  const history = useHistory();
  const forceRedirect = () => {
    history.push("/admin/login");
    localStorage.clear();
  };
  async function getData() {
    try {
      let { data } = await axios.get("/dashboard/read", {
        headers: {
          Authorization: "Bearer" + token,
        },
      });
      setData(data);
    } catch (err) {
      console.log(err.response.data);
      if (err.response.status === 500) {
        forceRedirect();
      }
    }
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getData();
  }, []);
  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon
            text="Notulensi"
            header={data ? data.Notulensi : 0}
            color="primary"
          >
            <CIcon width={24} name="cil-tags" />
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon
            text="Artikel"
            header={data ? data.Artikel : 0}
            color="info"
          >
         
            <CIcon width={24} name="cil-moon" />
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon
            text="Galeri"
            header={data ? data.Galeri : 0}
            color="danger"
          >
             <CIcon width={24} name="cil-tags" />
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          {/* <CWidgetIcon
            text="Kepanitiaan"
            header={data ? data.Kepanitiaan : 0}
            color="warning"
          >
            <CIcon width={24} name="cil-bell" />
          </CWidgetIcon>
           */}
        </CCol>
      </CRow>
      
    </>
  );
};

export default Dashboard;
