import React from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import swal from "sweetalert";
import axios from "../service/api";
import { useHistory } from "react-router-dom";

const TheHeaderDropdown = () => {
  const history = useHistory();
  //biar jadi json
  const user_info = JSON.parse(localStorage.getItem("user_info"));
  const token = JSON.parse(localStorage.getItem("token"));
  async function logout() {
    try {
     if(token){ 
      const response = await axios.post("/user/logout", null, {
        headers: { Authorization: "Bearer" + token },
      });
      swal(response.data.message)}
      localStorage.clear();
      history.push("/admin/login");
    } catch (err) {
        localStorage.clear();
    }
  }
  async function logoutAll() {
    try {
      if(token){ 
      const response = await axios.post("/user/logout2", null, {
        headers: { Authorization: "Bearer" + token, },
      });
      swal(response.data.message);
    }
      localStorage.clear();
      history.push("/admin/login");
    } catch (err) {
        localStorage.clear();
    }
  }
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <label><CIcon name="cil-user" size={'xl'}/></label>
          <label className="ml-2 mr-2">{user_info ? user_info.userName:null}</label>
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem onClick ={logout}>
          <CIcon name="cil-user-unfollow" className="mfe-2" />
          Log Out
        </CDropdownItem>
        <CDropdownItem onClick = {logoutAll}>
          <CIcon name="cil-user-unfollow" className="mfe-2" />
          Log Out All Devices
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
