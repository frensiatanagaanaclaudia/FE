// import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow ,CDataTable } from '@coreui/react';
// import {useEffect,useState} from "react";
// import axios from '../../service/api'
// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import CIcon from '@coreui/icons-react'
// // import KepanitiaanModal from './KepanitiaanModal';
// const Kepanitiaan = () => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   const [showModal,setShowModal]=useState(false);
// const history = useHistory();
// const [kepanitiaanData,setkepanitiaanData]=useState([{}]);
// const [status,setStatus]=useState(0);
// // const [rowID,setRowId] = useState([]);
//   const fields = ["namaKegiatan",
//   "tahunPeriode",
//   "status",
//   "ketua",
//   "wakil",
//   "sekre",
//   "bendahara",
//   "koorAcara",
//   "koorPubdok",
//   "koorKomsumsi",
//   "koorMusik",
//   "koorPerlengkapan"];

//  function handleRefresh(){
//   setStatus(status+1);
//  }
//  function handleShowModal(){
//   setShowModal(!showModal);
//  }
//  const ForceRedirect = () => { 
//   const history = useHistory();
//   history.push("/admin/dashboard");
// };
//  //fetch api
//  useEffect(()=>{
//   async function getData(){
// try {
// let {data}=await axios.get("/kepanitiaan/read",{
//   headers:{
//   Authorization:"Bearer" + token
// }});
// setkepanitiaanData(data);
// }catch(err){
//   if(err.response.status === 403){
// ForceRedirect();
// }
// }
//   }
//   getData();
//   console.log(kepanitiaanData)
// },[status]);
//   return (
//    <CRow>
//     <CCol sm="12">
//       <CCard>
//         <CCardHeader>
//           <CButton onClick={()=>handleShowModal()} color='primary'
//             size='lg'
//             className='m2'>
//            Tambah Kepanitiaan
//           </CButton>
//           {/* <KepanitiaanModal
//           display = {showModal}
//           handleShowModal={handleShowModal}
//           handleRefresh={handleRefresh}
//           /> */}
//         </CCardHeader>
//         <CCardBody>
//         <CDataTable
//       items={kepanitiaanData}
//       fields={fields}
//       tableFilter
//       footer
//       itemsPerPageSelect
//       itemsPerPage={5}
//       hover
//       sorter
//       pagination
//       scopedSlots = {{
//         'Actions':
//           (item)=>{
//             return (
//               <td className="py-2"><CButton
//                   size="sm"
//                 ><CIcon  className='action_edit' name={'cilPencil'}/> 
//            _Edit
//                 </CButton>
//               </td>
//               )
//           },
//       }}
//       />
//           </CCardBody>
//       </CCard>
//     </CCol>
//    </CRow>
//   );
// };
// export default Kepanitiaan;
