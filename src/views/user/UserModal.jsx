import {
  CCol,
  CRow,
  CButton,
  CContainer,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CFormText,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import { useState } from "react";
import axios from "../../service/api";
import swal from "sweetalert";
import { useFormik } from "formik";
// import { useHistory } from "react-router-dom";
const UserModal = (props) => {
  const [mess, setMess] = useState("");
  // eslint-disable-next-line
  // const history ={useHistory}
  const handleShowModal = () => {
    setMess("");
    props.handleShowModal();
  };

  const handleRefresh = () => {
    props.handleRefresh();
  };

  const validate = (values) => {
    const errors = {};
    values.userName || (errors.userName = "Required");
    values.email || (errors.email = "Required");
    values.role || (errors.role = "Required");
   

    return errors;
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      userName: props.rowData.userName || "", //edit
      role: props.rowData.role || "", //edit //tambhin
      email: props.rowData.email || "", //edit //tambhin
      password:"", //edit //tambhin
      passwordConfirm:"", //edit //tambhin
    },
    validate,
    onSubmit: (values) => {
      console.log(values)
      if(values.password === "" || values.passwordConfirm ===""){
        delete values.password
        delete values.passwordConfirm 
      save_data(values);
      }else{
        save_data(values)
      }
     
      // save_data(values);
    }});
  async function save_data(values) {
    const token = props.token;
    try {
      let response = null;
      if (props.rowID === 0) {
        response = await axios.post("/user/create", values, {
          headers: { Authorization: "Bearer" + token },
        });
      } else {
        response = await axios.patch(
          `/user/update/${props.rowID}`,
          values,
          {
            headers: { Authorization: "Bearer" + token },
          }
        );
      }
      if (response.status === 201 || response.status === 200 ) {
        handleRefresh();
        handleShowModal();
        swal("success", "User berhasil disimpan", "success");
      }
    } catch (err) {
      setMess(err.response.data.message);
    }
  }
  return (
    <>
      <CModal show={props.display} onClose={handleShowModal}>
        <CModalHeader closeButton>User</CModalHeader>
        <CModalBody>
          <CContainer fluid>
            <CRow>
              <CCol sm="12">
                <CForm onSubmit={formik.handleSubmit}>
                  <CFormGroup>
                    <CLabel htmlFor="userName">Username</CLabel>
                    <CInput
                      name="userName"
                      id="userName"
                      placeholder="Judul User"
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.userName
                        ? formik.errors.userName
                        : null}
                    </p>
                    <CLabel htmlFor="email">Email</CLabel>
                    <CInput
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.email
                        ? formik.errors.email
                        : null}
                    </p>

                    <CLabel htmlFor="role">Role</CLabel>
                    <CInput
                      name="role"
                      id="role"
                      placeholder="Role"
                      value={formik.values.role}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.role ? formik.errors.role : null}
                    </p>

                    <CLabel htmlFor="password">Password</CLabel>
                    <CInput
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.password ? formik.errors.password : null}
                    </p>

                    <CLabel htmlFor="passwordConfirm">Password Confirm</CLabel>
                    <CInput
                      name="passwordConfirm"
                      id="passwordConfirm"
                      type="password"
                      placeholder="Password Confirm"
                      value={formik.values.passwordConfirm}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.passwordConfirm ? formik.errors.passwordConfirm : null}
                    </p>

                  
                  </CFormGroup>
                </CForm>
              </CCol>
            </CRow>
            <CFormText className="help-block" color={"danger"}>
              {mess}
            </CFormText>
          </CContainer>
        </CModalBody>
        <CModalFooter>
          <CButton onClick={formik.handleSubmit} type="submit" color="info">
            Simpan
          </CButton>{" "}
          <CButton color="secondary" onClick={handleShowModal}>
            Batal
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default UserModal;
