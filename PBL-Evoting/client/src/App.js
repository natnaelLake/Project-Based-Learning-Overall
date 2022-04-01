import "./css/App.css";
import Layout from "./pages/Layout";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import User from "./pages/User";
import Authentication from "./pages/Authentication";
import IsLoggedin from "./pages/IsLoggedin";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Admin from "./pages/Admin";
import {Authprovider} from "./pages/Authprovider";

function App() {
        return (
        <Authprovider>
        <div className="app">
            <Router>
              <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index path='/' element = {<Home />}/>
                  <Route path='login' element = {<Login />}/>
                  <Route path='signup' element = {<Signup />}/>
                {/* protected routes */}
                <Route element={<Authentication/>}>
                  <Route path="user" element = {<User/>} />
                  <Route path="admin" element = {<Admin/>} />
                </Route>
              </Route>
              </Routes>
            </Router>
            </div>
          </Authprovider>
        )
}

export default App;
