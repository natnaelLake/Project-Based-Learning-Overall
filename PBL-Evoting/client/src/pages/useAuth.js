import {  useContext } from "react";
import AuthContext from "./Authprovider";

const useAuth = () => {
  return useContext(AuthContext);
}

export default useAuth;
