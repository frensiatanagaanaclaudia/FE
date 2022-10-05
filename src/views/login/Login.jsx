import React ,{useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../../service/api'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import swal from "sweetalert";
import { useFormik} from "formik";

const Login = () => {
  const [message,setMessage] = useState("");
  const history = useHistory();
  const validate = (values) => {
const errors = {} ;
if(!values.password){
  errors.password = "";
}
if(!values.email){
  errors.email  ="Required Email";
}else if(
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
){
  errors.email  ="Invalid Email Address"
}
return errors;
  };
  const formik = useFormik({
initialValues :{
  email:"",
  password: ""
},
validate,
onSubmit:(values) =>{
  user_login(values)
}
})
//Fetch menggunakan Axios 
async function user_login(values){
  console.log(values)
  try{
const response = await axios.post("/user/login",{
  email:values.email,
  password:values.password,
})
if(response.data.token){
try{
  const user_info = await axios.get("/user/info",{
    headers:{Authorization:"Bearer"+ response.data.token
  
}
  })
  console.log(user_info.data);
  localStorage.setItem("user_info",JSON.stringify(user_info.data))
  localStorage.setItem("token",JSON.stringify(response.data.token))
  history.push("/admin/dashboard")
}catch(err){
  swal(err.response.data)
}
}else {
  swal("Gagal mengambil data login")
}
console.log(response.data)
  }catch(err){
// console.log(err.response.status)
if (err.response.status === 400){
  setMessage(err.response.data.message)
}
else{
  swal(err.response.data)
}
  }
}
useEffect(()=>{ 
if(localStorage.getItem("user_info"))
  history.push("/admin/dashboard")
})
     return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={formik.handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <p className ="text-danger">{message}</p>
                    <p className ="text-warning field_validate_label" >{
                      formik.errors.email ? formik.errors.email : null 
                    }</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="email" name="email" placeholder="Email" autoComplete="email"
                      value={formik.values.email} onChange={formik.handleChange} />
                    </CInputGroup>
                    <p className ="text-warning field_validate_label">{
                      formik.errors.password? formik.errors.password: null 
                    }</p>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name="password" placeholder="Password" autoComplete="current-password"  value={formik.values.password} onChange={formik.handleChange}/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" type="submit">Login</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Selamat Datang</h2>
                    <p>Ini adalah Aplikasi Admin UKM PMK ITB STIKOM BALI </p>
                    <p>Kalangan internal </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
