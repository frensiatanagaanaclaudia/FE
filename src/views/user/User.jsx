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
import UserModal from "./UserModal";

const User = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [showModal, setShowModal] = useState(false);
  const [userData, setuserData] = useState([]);
  const [status, setStatus] = useState(0);
  const [rowID, setRowID] = useState([]);
  const [rowData, setRowData] = useState([]);
  const history = useHistory();

  const fields = [
    "userName", 
"email",
"role",
    "Actions",
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
        let { data } = await axios.get("/user/read", {
          headers: {
            Authorization: "Bearer" + token,
          },
        });
        setuserData(data);
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
              Tambah User
            </CButton>
            <UserModal
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
              items={userData}
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
export default User;


