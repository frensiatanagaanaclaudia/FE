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
  const rowData= props.rowData;
  const [imageUrl,setImageUrl]=useState([]);
  // eslint-disable-next-line
  // const history ={useHistory}
  const handleShowModal = () => {
    setMess("");
    props.handleShowModal();
    setImageUrl("")
    if(document.getElementById("imageUrl")){
      document.getElementById("imageUrl").value ="";
    }
  };

  const handleRefresh = () => {
   props.handleRefresh();
  };
 
  const validate = (values) => {
    const errors = {};
    values.judulNotul || (errors.judulNotul = "Required");
    // values.tempat || (errors.tempat = "Required");
    // values.tanggal || (errors.tanggal = "Required");
    // values.deskripsi || (errors.deskripsi = "Required");
    // values.saran || (errors.saran = "Required");
    // values.link || (errors.link = "Required");
    // values.status || (errors.status = "Required");
    return errors;
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      judulNotul: rowData.judulNotul || "", //edit
      tempat: rowData.tempat || "", //edit //tambhin
      tanggal: rowData.tanggal || "", //edit //tambhin
      deskripsi: rowData.deskripsi || "", //edit //tambhin
      saran: rowData.saran || "", //edit //tambhin
      link: rowData.link || "", //edit //tambhin
      status: rowData.status || "", //edit //tambhin
      imageUrl: rowData.imageUrl || "", //edit //tambhin
    },
    validate,
    onSubmit: (values) => {
      const params = new FormData();
      params.append("judulNotul",values.judulNotul);
      params.append("tempat",values.tempat);
      params.append("tanggal",values.tanggal);
      params.append("deskripsi",values.deskripsi);
      params.append("link",values.link);
      params.append("status",values.status);
      if(imageUrl.length !== 0){
        params.append("imageUrl",imageUrl);
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
        response = await axios.post(`/artikel/create`, values, {
          headers : { 
            Authorization: "Bearer" + token,
          headers:{"content-type":"multipart/form-data" },
        },
        });
      } else {
        response = await axios.patch(
          `/artikel/update/${props.rowID}`,
          values,
          {
            headers: {
               Authorization: "Bearer" + token,
            headers:{"content-type":"multipart/form-data"},
          },
        });
      }
      if (response.data._id) {
        handleRefresh();
        handleShowModal();
        swal("success", "Artikel berhasil disimpan", "success");
      }
    } catch (err) { 
      console.log(err.response.data);
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
                    <CLabel htmlFor="judulNotul">Judul Artikel</CLabel>
                    <CInput
                      name="judulNotul"
                      id="judulNotul"
                      placeholder="Judul Artikel"
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

                    <CLabel htmlFor="image">Gambar</CLabel>
                    <CInput
                    accept="image/**"
                      name="image"
                      id="image"
                      type="file"
                      onChange={(event)=>{
                      
                        setImageUrl(event.target.files[0])
                      }}
                    />
                    <p className="text-warning field_validate_label">
                      {formik.errors.image ? formik.errors.image : null}
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
