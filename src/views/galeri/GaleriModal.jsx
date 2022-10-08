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
  const GaleriModal = (props) => {
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

      values.judulKegiatan || (errors.judulKegiatan = "Wajib diisi");
      values.tanggalMulai || (errors.tanggalMulai = "Wajib diisi");
      values.tanggalAkhir || (errors.tanggalAkhir = "Wajib diisi");
      values.lokasi || (errors.lokasi = "Wajib diisi");
      values.keterangan || (errors.keterangan = "Wajib diisi");
      values.link || (errors.link = "Wajib diisi");
      values.status || (errors.status = "Wajib diisi");
      return errors;
    };
    const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
        judulKegiatan: rowData.judulKegiatan || "", //edit
        tanggalAkhirMulai: rowData.tanggalAkhirMulai || "", //edit //tambhin
        tanggalAkhir: rowData.tanggalAkhir || "", //edit //tambhin
        lokasi: rowData.lokasi || "", //edit //tambhin
        keterangan: rowData.keterangan || "", //edit //tambhin
        link: rowData.link || "", //edit //tambhin
        status: rowData.status || "", //edit //tambhin
        imageUrl: rowData.imageUrl || "", //edit //tambhin
      },
      validate,
      onSubmit: (values) => {
        const params = new FormData();
        params.append("judulKegiatan", values.judulKegiatan);
        params.append("tanggalMulai", values.tanggalMulai);
        params.append("tanggalAkhir", values.tanggalAkhir);
        params.append("lokasi", values.lokasi);
        params.append("link", values.link);
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
          response = await axios.post("/galeri/create", values, {
            headers: {
              Authorization: "Bearer" + token,
              headers: { enctype: "multipart/form-data" },
            },
          });
        } else {
          response = await axios.patch(`/galeri/update/${props.rowID}`, values, {
            headers: {
              Authorization: "Bearer" + token,
              headers: { enctype: "multipart/form-data" },
            },
          });
        }
        if (response.data._id) {
          handleRefresh();
          handleShowModal();
          swal("success", "Galeri berhasil disimpan", "success");
        }
      } catch (err) {
        console.log(err.response.data);
        setMess(err.response.data.message);
      }
    }
    return (
      <>
        <CModal show={props.display} onClose={handleShowModal}>
          <CModalHeader closeButton>Galeri</CModalHeader>
          <CModalBody>
            <CContainer fluid>
              <CRow>
                <CCol sm="12">
                  <CForm onSubmit={formik.handleSubmit}>
                    <CFormGroup>
                      <CLabel htmlFor="judulKegiatan">Judul Galeri</CLabel>
                      <CInput
                        name="judulKegiatan"
                        id="judulKegiatan"
                        placeholder="Judul Galeri"
                        value={formik.values.judulKegiatan}
                        onChange={formik.handleChange}
                      />
                      <p className="text-warning field_validate_label">
                        {formik.errors.judulKegiatan
                          ? formik.errors.judulKegiatan
                          : null}
                      </p>
  
                      <CLabel htmlFor="tanggalMulai">Tanggal Mulai</CLabel>
                      <CInput
                        name="tanggalMulai"
                        id="tanggalMulai"
                        placeholder="tanggal Mulai"
                        value={formik.values.tanggalMulai}
                        onChange={formik.handleChange}
                      />
                      <p className="text-warning field_validate_label">
                        {formik.errors.tanggalMulai ? formik.errors.tanggalMulai : null}
                      </p>
  
                     
                      <CLabel htmlFor="tanggalAkhir">Tanggal Akhir</CLabel>
                      <CInput
                        name="tanggalAkhir"
                        id="tanggalAkhir"
                        placeholder="tanggal Akhir"
                        value={formik.values.tanggalAkhir}
                        onChange={formik.handleChange}
                      />
                      <p className="text-warning field_validate_label">
                        {formik.errors.tanggalAkhir ? formik.errors.tanggalAkhir : null}
                      </p>
  
                      <CLabel htmlFor="lokasi">Lokasi</CLabel>
                      <CInput
                        name="lokasi"
                        id="lokasi"
                        placeholder="Lokasi"
                        value={formik.values.lokasi}
                        onChange={formik.handleChange}
                      />
                      <p className="text-warning field_validate_label">
                        {formik.errors.lokasi ? formik.errors.lokasi : null}
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
  
  export default GaleriModal;
  