import {Outlet} from 'react-router-dom';
import "../css/App.css";

const Layout = () => {
  return (
     <div className='app'>
         <Outlet/>
     </div>
  )
}

export default Layout
