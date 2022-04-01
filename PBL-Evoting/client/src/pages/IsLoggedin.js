import useAuth from "./useAuth";
import { useLocation,Navigate,Outlet } from "react-router-dom";


const IsLoggedin = () => {
    const location = useLocation();
    const {auth} = useAuth();
  return (
        auth ? <Navigate to="/login" state = {{from:location}} replace/> : <Outlet/>
  );
}

export default IsLoggedin;