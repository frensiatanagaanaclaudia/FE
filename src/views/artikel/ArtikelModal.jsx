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
const ArtikelModal = (props) => {
  const [mess, setMess] = useState("");
  const rowData = props.rowData;
  const [imageUrl, setImageUrl] = useState([]);
  // eslint-disable-next-line
  // const history ={useHistory}
  const handleShowModal = () => {
    setMess("");
    props.handleShowModal();
    setImageUrl("");
    if (document.getElementById("imageUrl")) {
      document.getElementById("imageUrl").value = "";
    }
  };
  const handleRefresh = () => {
    props.handleRefresh();
  };

  const validate = (values) => {
    const errors = {};

    values.judulArtikel || (errors.judulArtikel = "Wajib diisi");
    values.hastag || (errors.hastag = "Wajib diisi");
    values.tanggal || (errors.tanggal = "Wajib diisi");
    values.periode || (errors.periode = "Wajib diisi");
    values.keterangan || (errors.keterangan = "Wajib diisi");
    values.status || (errors.status = "Wajib diisi");
    return errors;
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      judulArtikel: rowData.judulArtikel || "", //edit
      hastag: rowData.hastag || "", //edit //tambhin
      tanggal: rowData.tanggal || "", //edit //tambhin
      periode: rowData.periode || "", //edit //tambhin
      keterangan: rowData.keterangan || "", //edit //tambhin
      status: rowData.status || "", //edit //tambhin
      imageUrl: rowData.imageUrl || "", //edit //tambhin
    },
    validate,
    onSubmit: (values) => {
      const params = new FormData();
      params.append("judulArtikel", values.judulArtikel);
      params.append("hastag", values.hastag);
      params.append("tanggal", values.tanggal);
      params.append("periode", values.periode);
      params.append("keterangan", values.keterangan);
      params.append("status", values.status);

      if (imageUrl.length !== 0) {
        params.append("image", imageUrl);
        console.log(imageUrl);
      }
      save_data(params);
    },
  });
  async function save_data(values) {
    const token = props.token;
    try {
      let response = null;
      if (props.rowID === 0) {
        response = await axios.post("/artikel/create", values, {
          headers: {
            Authorization: "Bearer" + token,
            headers: { enctype: "multipart/form-data" },
          },
        });
      } else {
        response = await axios.patch(`/artikel/update/${props.rowID}`, values, {
          headers: {
            Authorization: "Bearer" + token,
            headers: { enctype: "multipart/form-data" },
          },
        });
      }
      if (response.data._id) {
        handleRefresh();
        handleShowModal();
        swal("success", "Artikel berhasil disimpan", "success");
      }
    } catch (err) {
      setMess(err.response.data.message);
    }
  }
  return (
    <>
      <CModal show={props.display} onClose={handleShowModal}>
        <CModalHeader closeButton>Artikel</CModalHeader>
        <CModalBody>
          <CContainer fluid>
            <CRow>
              <CCol sm="12">
                <CForm onSubmit={formik.handleSubmit}>
                  <CFormGroup>
                    <CLabel htmlFor="judulArtikel">Judul Artikel</CLabel>
                    <CInput
                      name="judulArtikel"
                      id="judulArtikel"
                      placeholder="Judul Artikel"
                      value={formik.values.judulArtikel}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.judulArtikel
                        ? formik.errors.judulArtikel
                        : null}
                    </p>

                    <CLabel htmlFor="hastag">hastag</CLabel>
                    <CInput
                      name="hastag"
                      id="hastag"
                      placeholder="hastag"
                      value={formik.values.hastag}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.hastag ? formik.errors.hastag : null}
                    </p>

                    <CLabel htmlFor="periode">Periode</CLabel>
                    <CInput
                      name="periode"
                      id="periode"
                      placeholder="periode"
                      value={formik.values.periode}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.periode ? formik.errors.periode : null}
                    </p>
                    <CLabel htmlFor="tanggal">Tanggal</CLabel>
                    <CInput
                      name="tanggal"
                      id="tanggal"
                      placeholder="tanggal"
                      value={formik.values.tanggal}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.tanggal ? formik.errors.tanggal : null}
                    </p>

                    <CLabel htmlFor="keterangan">Keterangan</CLabel>
                    <CInput
                      name="keterangan"
                      id="keterangan"
                      placeholder="Deskripsi"
                      value={formik.values.keterangan}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.keterangan
                        ? formik.errors.keterangan
                        : null}
                    </p>

                    <CLabel htmlFor="imageUrl">Gambar</CLabel>
                    <CInput
                      accept="image/**"
                      name="imageUrl"
                      id="imageUrl"
                      type="file"
                      onChange={(event) => {
                        setImageUrl(event.target.files[0]);
                      }}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.imageUrl ? formik.errors.imageUrl : null}
                    </p>

                    <CLabel htmlFor="status">Status</CLabel>
                    <CInput
                      name="status"
                      id="status"
                      placeholder="Status"
                      value={formik.values.status}
                      onChange={formik.handleChange}
                    />
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

export default ArtikelModal;
