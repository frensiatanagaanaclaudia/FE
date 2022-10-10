import {
  CCol,
  CRow,
  CButton,CSelect,
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
const KepanitiaanModal = (props) => {
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
    values.namaKegiatan || (errors.namaKegiatan = "Required");
    values.tahunPeriode || (errors.tahunPeriode = "Required");
    values.ketua || (errors.ketua = "Required");
    values.wakil || (errors.wakil = "Required");
    values.sekre || (errors.sekre = "Required");
    values.bendahara || (errors.bendahara = "Required");
    values.koorAcara || (errors.koorAcara = "Required");
    values.koorPubdok || (errors.koorPubdok = "Required");
    values.koorKomsumsi || (errors.koorKomsumsi = "Required");
    values.koorMusik || (errors.koorMusik = "Required");
    values.koorPerlengkapan || (errors.koorPerlengkapan = "Required");
    values.status || (errors.status = "Required");
    return errors;
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      namaKegiatan: props.rowData.namaKegiatan || "", //edit
      tahunPeriode: props.rowData.tahunPeriode || "", //edit //tambhin
      ketua: props.rowData.ketua || "", //edit //tambhin
      wakil: props.rowData.wakil || "", //edit //tambhin
      sekre: props.rowData.sekre || "", //edit //tambhin
      bendahara: props.rowData.bendahara || "", //edit //tambhin
      koorAcara: props.rowData.koorAcara || "", //edit //tambhin
      koorPubdok: props.rowData.koorPubdok || "", //edit //tambhin
      koorKomsumsi: props.rowData.koorKomsumsi || "", //edit //tambhin
      koorMusik: props.rowData.koorMusik || "", //edit //tambhin
      koorPerlengkapan: props.rowData.koorPerlengkapan || "", //edit //tambhin
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
        response = await axios.post("/kepanitiaan/create", values, {
          headers: { Authorization: "Bearer" + token },
        });
      } else {
        response = await axios.patch(
          `/kepanitiaan/update/${props.rowID}`,
          values,
          {
            headers: { Authorization: "Bearer" + token },
          }
        );
      }
      if (response.data._id) {
        handleRefresh();
        handleShowModal();
        swal("success", "Kepanitiaan berhasil disimpan", "success");
      }
    } catch (err) {
      setMess(err.response.data.message);
    }
  }
  return (
    <>
      <CModal show={props.display} onClose={handleShowModal}>
        <CModalHeader closeButton>Kepanitiaan</CModalHeader>
        <CModalBody>
          <CContainer fluid>
            <CRow>
              <CCol sm="12">
                <CForm onSubmit={formik.handleSubmit}>
                  <CFormGroup>
                    <CLabel htmlFor="namaKegiatan">Nama Kegiatan</CLabel>
                    <CInput
                      name="namaKegiatan"
                      id="namaKegiatan"
                      placeholder="Judul Kepanitiaan"
                      value={formik.values.namaKegiatan}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.namaKegiatan
                        ? formik.errors.namaKegiatan
                        : null}
                    </p>
                    <CLabel htmlFor="tahunPeriode">Tahun Periode</CLabel>
                    <CInput
                      name="tahunPeriode"
                      id="tahunPeriode"
                      placeholder="Tempat"
                      value={formik.values.tahunPeriode}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.tahunPeriode
                        ? formik.errors.tahunPeriode
                        : null}
                    </p>

                    <CLabel htmlFor="ketua">Nama Ketua</CLabel>
                    <CInput
                      name="ketua"
                      id="ketua"
                      placeholder="Ketua"
                      value={formik.values.ketua}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.ketua ? formik.errors.ketua : null}
                    </p>

                    <CLabel htmlFor="wakil">Nama Wakil</CLabel>
                    <CInput
                      name="wakil"
                      id="wakil"
                      placeholder="Wakil"
                      value={formik.values.wakil}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.wakil ? formik.errors.wakil : null}
                    </p>

                    <CLabel htmlFor="sekre">Nama Sekretaris</CLabel>
                    <CInput
                      name="sekre"
                      id="sekre"
                      placeholder="Sekretaris"
                      value={formik.values.sekre}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.sekre ? formik.errors.sekre : null}
                    </p>

                    <CLabel htmlFor="bendahara">Nama Bendahara</CLabel>
                    <CInput
                      name="bendahara"
                      id="bendahara"
                      placeholder="Bendahara"
                      value={formik.values.bendahara}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.bendahara ? formik.errors.bendahara : null}
                    </p>

                    <CLabel htmlFor="koorAcara">Nama Koor Acara</CLabel>
                    <CInput
                      name="koorAcara"
                      id="koorAcara"
                      placeholder="Koor Acara"
                      value={formik.values.koorAcara}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.koorAcara ? formik.errors.koorAcara : null}
                    </p>

                    <CLabel htmlFor="koorPubdok">Nama Koor Pubdok</CLabel>
                    <CInput
                      name="koorPubdok"
                      id="koorPubdok"
                      placeholder="Koor Pubdok"
                      value={formik.values.koorPubdok}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.koorPubdok
                        ? formik.errors.koorPubdok
                        : null}
                    </p>

                    <CLabel htmlFor="koorKomsumsi">Nama koor Komsumsi</CLabel>
                    <CInput
                      name="koorKomsumsi"
                      id="koorKomsumsi"
                      placeholder="Koor Komsumsi"
                      value={formik.values.koorKomsumsi}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.koorKomsumsi
                        ? formik.errors.koorKomsumsi
                        : null}
                    </p>

                    <CLabel htmlFor="koorPerlengkapan">
                      Nama koorPerlengkapan
                    </CLabel>
                    <CInput
                      name="koorPerlengkapan"
                      id="koorPerlengkapan"
                      placeholder="koorPerlengkapan"
                      value={formik.values.koorPerlengkapan}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.koorPerlengkapan
                        ? formik.errors.koorPerlengkapan
                        : null}
                    </p>

                    <CLabel htmlFor="koorMusik">Nama Koor Musik</CLabel>
                    <CInput
                      name="koorMusik"
                      id="koorMusik"
                      placeholder="Koor Musik"
                      value={formik.values.koorMusik}
                      onChange={formik.handleChange}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.koorMusik ? formik.errors.koorMusik : null}
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

export default KepanitiaanModal;
