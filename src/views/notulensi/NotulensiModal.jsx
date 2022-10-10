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
  CSelect,
} from "@coreui/react";
import { useState } from "react";
import axios from "../../service/api";
import swal from "sweetalert";
import { useFormik } from "formik";
// import { useHistory } from "react-router-dom";
const NotulensiModal = (props) => {
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
    values.judulNotul || (errors.judulNotul = "Wajib diisi");
    values.tempat || (errors.tempat = "Wajib diisi");
    values.tanggal || (errors.tanggal = "Wajib diisi");
    values.deskripsi || (errors.deskripsi = "Wajib diisi");
    values.saran || (errors.saran = "Wajib diisi");
    values.kendala || (errors.kendala = "Wajib diisi");
    values.link || (errors.link = "Wajib diisi");
    values.status || (errors.status = "Wajib diisi");
    return errors;
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      judulNotul: props.rowData.judulNotul || "", //edit
      tempat: props.rowData.tempat || "", //edit //tambhin
      tanggal: props.rowData.tanggal || "", //edit //tambhin
      deskripsi: props.rowData.deskripsi || "", //edit //tambhin
      saran: props.rowData.saran || "", //edit //tambhin
      link: props.rowData.link || "", //edit //tambhin
      status: props.rowData.status || "", //edit //tambhin
    },
    validate,
    onSubmit: (values) => {
      save_data(values);
    },
  });
  async function save_data(values) {
    const token = props.token;
    try {
      let response = null;
      if (props.rowID === 0) {
        response = await axios.post("/notulensi/create", values, {
          headers: { Authorization: "Bearer" + token },
        });
      } else {
        response = await axios.patch(
          `/notulensi/update/${props.rowID}`,
          values,
          {
            headers: { Authorization: "Bearer" + token },
          }
        );
      }
      if (response.data._id) {
        handleRefresh();
        handleShowModal();
        swal("success", "Notulensi berhasil disimpan", "success");
      }
    } catch (err) {
      setMess(err.response.data.message);
    }
  }
  return (
    <>
      <CModal show={props.display} onClose={handleShowModal}>
        <CModalHeader closeButton>Notulensi</CModalHeader>
        <CModalBody>
          <CContainer fluid>
            <CRow>
              <CCol sm="12">
                <CForm onSubmit={formik.handleSubmit}>
                  <CFormGroup>
                    <CLabel htmlFor="judulNotul">Judul Notulensi</CLabel>
                    <CInput
                      name="judulNotul"
                      id="judulNotul"
                      placeholder="Judul Notulensi"
                      value={formik.values.judulNotul}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.judulNotul
                        ? formik.errors.judulNotul
                        : null}
                    </p>
                    <CLabel htmlFor="tempat">Tempat</CLabel>
                    <CInput
                      name="tempat"
                      id="tempat"
                      placeholder="Tempat"
                      value={formik.values.tempat}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.tempat ? formik.errors.tempat : null}
                    </p>

                    <CLabel htmlFor="tanggal">Tanggal</CLabel>
                    <CInput
                      name="tanggal"
                      id="tanggal"
                      placeholder="Tanggal"
                      value={formik.values.tanggal}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.tanggal ? formik.errors.tanggal : null}
                    </p>

                    <CLabel htmlFor="deskripsi">Deskripsi</CLabel>
                    <CInput
                      name="deskripsi"
                      id="deskripsi"
                      placeholder="Deskripsi"
                      value={formik.values.deskripsi}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.deskripsi ? formik.errors.deskripsi : null}
                    </p>

                    <CLabel htmlFor="saran">Saran</CLabel>
                    <CInput
                      name="saran"
                      id="saran"
                      placeholder="Saran"
                      value={formik.values.saran}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.saran ? formik.errors.saran : null}
                    </p>

                    <CLabel htmlFor="kendala">Kendala</CLabel>
                    <CInput
                      name="kendala"
                      id="kendala"
                      placeholder="Kendala"
                      value={formik.values.kendala}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.kendala ? formik.errors.kendala : null}
                    </p>

                    <CLabel htmlFor="link">Link</CLabel>
                    <CInput
                      name="link"
                      id="link"
                      placeholder="Link"
                      value={formik.values.link}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.link ? formik.errors.link : null}
                    </p>

                    <CLabel htmlFor="status">Status</CLabel>
                    <CSelect
                      name="status"
                      id="status"
                      aria-label="Default select example"
                      onChange={formik.handleChange}
                    >
                      <option value="berjalan">berjalan</option>
                      <option value="selesai">selesai</option>
                      <option value="gagal">gagal</option>
                    </CSelect>
                    {/* <CInput
                      name="status"
                      id="status"
                      placeholder="Status"
                      value={formik.values.status}
                      onChange={formik.handleChange}
                    /> */}
                    <p className="text-warning field_validate_label">
                      {formik.errors.status ? formik.errors.status : null}
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

export default NotulensiModal;
