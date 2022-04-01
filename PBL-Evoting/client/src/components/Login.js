import { useEffect} from 'react';
import { Link,useLocation, useNavigate} from 'react-router-dom';
import Axios from 'axios'
import '../css/signup.css'
import useAuth from '../pages/useAuth';

const Login = () => {
    // const [emailErr,setEmailErr] = useState([]);
    // const [passErr,setPassErr] = useState([]);
    const {auth,setAuth} = useAuth();
    const navigate = useNavigate();
    var emailErr =[];
    var passErr =[];
    const location = useLocation();
    const from = location.state?.from?.pathname || '/user';
    //const [inputs,setInputs] = useState({});
    const inputs ={};
    const isEmail = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
    // const isEmpty = new RegExp('^[ \t\n]*$');
    const setInput = (event) => {
        console.log(auth);
        const fieldName = event.target.name;
        const fieldValue = event.target.value.trim();
        inputs[fieldName] = fieldValue;
        console.log(fieldValue);
    }
    
   useEffect(()=>{
    if(auth){
        console.log("looged in");
        navigate(from,{replace:true});
    }
   },[auth]);
    const validate = (e) => {
        e.preventDefault();
         emailErr =[];
         passErr =[];
        const {username,password} = inputs;

        if(username === '' || typeof username === 'undefined'){
            emailErr.push("Email can't be empty");
        }

        if(password === '' || typeof password === 'undefined'){
            passErr.push("Password can't be empty");
        }
        
        if(!isEmail.test(username)){
            emailErr.push("Email doesn't match the pattern")
        }
        console.log(inputs);
        console.log(emailErr);
        console.log(passErr);
        if(!emailErr.length && !passErr.length){
            console.log('there is no input error');
            Axios.post('http://localhost:3001/login',{
                username:username,
                password:password
            }).then((res)=>{
                console.log("data",res);
                if(res.data == 'LoggedIn'){
                    setAuth(true);
                }else{
                    setAuth(false);
                }
            }).catch(err=>console.log(err)); 
        }
    }

  return (
    <div className='login-container'>
        <form method='post'>
            <div className="form-group">
                <label htmlFor='email'>Email: </label>
                <input type="text"  
                name = "username" id = "username"
                placeholder="Enter Email"
                onChange={setInput}
               />
               <div>
                   {/* {emailErr.map((err,index)=>(<small key={index}>{err}</small>))} */}
               </div>
            </div>

            <div className="form-group">
                <label>Password: </label>
                <input type="password"  
                name = "password" id = "password"
                placeholder="Enter password" 
                onChange={setInput}
                />
                <div>
                   {/* {passErr.map((err,index)=>(<small key={index}>{err}</small>))} */}
               </div>
            </div>
            <div>
                <input type="submit" value="Login"  onClick={(e)=>validate(e)}/>
            </div>
            <br/>
            <div className="login">
                <Link to="/signup">Register</Link>
            </div>
        </form> 
    </div>
  )
}

export default Login