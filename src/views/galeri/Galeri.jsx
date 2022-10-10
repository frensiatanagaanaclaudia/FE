import {
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CCard,
    CButton,  
    CDataTable
  } from "@coreui/react";
  import { useState , useEffect} from "react";
  import axios from "../../service/api";
  import { useHistory } from "react-router-dom";
  import CIcon from "@coreui/icons-react";
  import React from "react";
  import GaleriModal from "./GaleriModal";
  
  const Galeri = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const [showModal, setShowModal] = useState(false);
    const [galeriData, setgaleriData] = useState([]);
    const [status, setStatus] = useState(0);
    const [rowID, setRowID] = useState([]);
    const [rowData, setRowData] = useState([]);
    const history = useHistory();
  
    const fields = [
      "judulKegiatan",
      "tanggalMulai",
      "tanggalAkhir",
      "lokasi",
      "status",
      "keterangan",
      "link",
      "Logo",
      "Actions"
    ];
    const ForceRedirect = () => {
      history.push("/admin/login"); 
      localStorage.clear()
    };
    function handleRefresh() {
      setStatus(status + 1);
    }
    function handleAction(id, item) {
      setRowID(id);
      setRowData(item);
      handleShowModal();
    }
    function handleShowModal() {
      setShowModal(!showModal);
    }
    
    //fetch api
    useEffect(() => {
      async function getData() {
        try {
          let { data } = await axios.get("/galeri/read", {
            headers: {
              Authorization: "Bearer" + token,
            },
          });
          setgaleriData(data);
        } catch (err) {
          if (err.response.status === 403) {
            ForceRedirect();
            console.log(err.response.data)}
        }
      }
      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);
    return (
      <CRow>
        <CCol sm="12">
          <CCard>
            <CCardHeader>
              <CButton
                onClick={() => handleAction(0, [])}
                color="primary"
                size="lg"
                className="m-2"
              >
                Tambah Galeri
              </CButton>
              <GaleriModal
                display={showModal}
                handleShowModal={handleShowModal}
                handleRefresh={handleRefresh}
                token={token}
                rowData={rowData}
                rowID={rowID}
              />
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={galeriData}
                fields={fields}
                tableFilter
                footer
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  Logo:(item)=>( 
                  <td className="py-2">
                    <div>
                      <img className="size_image_table" src={`https://ukmdb.herokuapp.com/`+ item.imageUrl} alt={item.imageUrl}/>{""}</div>
                  </td>),
                  
                  Actions: (item) => {
                    return (
                      <td className="py-2">
                        <CButton
                          onClick= {(e) => {
                            handleAction(item._id, item);
                          }}
                          size="sm"
                        >
                          <CIcon className="action_edit" name={"cilPencil"} />
                        </CButton>
                      </td>
                    );
                  },
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    );
  };
  export default Galeri;
  