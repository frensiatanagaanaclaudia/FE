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
  import KepanitiaanModal from "./KepanitiaanModal";
  
  const Kepanitiaan = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const [showModal, setShowModal] = useState(false);
    const [kepanitiaanData, setkepanitiaanData] = useState([]);
    const [status, setStatus] = useState(0);
    const [rowID, setRowID] = useState([]);
    const [rowData, setRowData] = useState([]);
    const history = useHistory();
  
    const fields = [
        "namaKegiatan",
        "tahunPeriode",
        "status",
        "ketua",
        "wakil",
        "sekre",
        "bendahara",
        "koorAcara",
        "koorPubdok",
        "koorKomsumsi",
        "koorMusik",
        "koorPerlengkapan",
      "Actions",
    ];
    const ForceRedirect = () => {
      history.push("/admin/login"); //awal dashboard
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
          let { data } = await axios.get("/kepanitiaan/read", {
            headers: {
              Authorization: "Bearer" + token,
            },
          });
          setkepanitiaanData(data);
        } catch (err) {
          if (err.response.status === 403) {
            ForceRedirect();
            console.log(err.response.data)
          }
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
                Tambah Kepanitiaan
              </CButton>
              <KepanitiaanModal
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
                items={kepanitiaanData}
                fields={fields}
                tableFilter
                footer
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  Actions: (item) => {
                    return (
                      <td className="py-2">
                        <CButton
                          onClick={(e) => {
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
  export default Kepanitiaan;
  

