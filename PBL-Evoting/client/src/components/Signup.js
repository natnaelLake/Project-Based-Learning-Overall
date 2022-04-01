
import { Link } from 'react-router-dom';
import '../css/signup.css';
import Axios  from 'axios';
import { useState } from 'react';


const Signup = () => { // component
    // const [fnmae,setFname] = useState("");
    // const [Lname,setLname] = useState("");
    // const [Dept,setDept] = useState("");
    // const [section,setSection] = useState("");
    // const [batch,setBatch] = useState("");
    // const [Email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
    // const [password2,setPassword2] = useState("");
    // const [CGPA,setCGPA] = useState("");
    

    const [inputs,setInputs] = useState({});

    const setInput = (event) => {
        // const fieldName = event.target.name;
        // const fieldValue = event.target.value;
        // inputs[fieldName] = fieldValue;
        // console.log(fieldValue);

        const fieldName = event.target.name;
        const fieldValue = event.target.value; 
        setInputs((prevInput)=>({...prevInput,[fieldName]:fieldValue}));
    }

    // const send = async (e)=>{
    //     e.preventDefault();
    //     console.log(inputs)
    //     try{
    //        const response = await fetch('http:localhost:5000/register',{method:'post'});
    //        const data = await response.json();
    //        console.log(data);
    //     }catch{

    //     }
    // }

    // const api = axios.create({
    //     baseURL:'http://localhost/5000'
    // });

    // const send = async (e)=>{
    //     e.preventDefault();
    //     console.log(inputs);
    //     const {fname,lname,id,username,dept,batch,section,CGPA,password,password2} = inputs;
    //     const response =await api.post('/register',{
    //             fname,lname,id,username,dept,batch,section,CGPA,password,password2
    //         });

    //     console.log(response.data);
    // }

    const send = (e) => {
        e.preventDefault();
        const {fname,lname,id,username,dept,batch,section,CGPA,password,password2} = inputs;
        console.log(inputs);
        Axios.post('http://localhost:3001/register',{
            fname,lname,id,username,dept,batch,section,CGPA,password,password2
        }).then((response) => {
            console.log(response);
        })
    }

    

  return (
    <div className='signup-container'>
        <form action="">
            <div className="form-group">
                <label>First Name: </label>
                <input type="text"  
                name = "fname" id = "fname"
                placeholder="Enter First Name"
                onChange={(e)=>(setInput(e))}
                // onChange={(e)=>(setFname(e.target.value))}
                />
            </div>
            <div className="form-group">
                <label>Last Name: </label>
                <input type="text"  
                name = "lname" id = "lname"
                placeholder="Enter Second Name"
                onChange={(e)=>(setInput(e))}
                 />
            </div>
            <div className="form-group">
                <label>Student ID: </label>
                <input type="text"  
                name = "id" id = "id"
                placeholder="Enter your ID"
                onChange={(e)=>(setInput(e))}
                 />
            </div>
            <div className="form-group">
                <label>Email: </label>
                <input type="text"  
                name = "username" id = "username"
                placeholder="Enter Email..."
                onChange={(e)=>(setInput(e))}
               />
            </div>
            <div className="form-group">
                <label>Dept: </label>
                <input type="text"  
                name = "dept" id = "dept"
                placeholder="Enter Departement..."
                onChange={(e)=>(setInput(e))}
               />
            </div>
            <div className="form-group">
                <label>Batch: </label>
                <input type="number"  
                name = "batch" id = "batch"
                placeholder="Enter Batch"
                onChange={(e)=>(setInput(e))}
               />
            </div>
            <div className="form-group">
                <label>Section: </label>
                <input type="text"  
                name = "section" id = "section"
                placeholder="Enter sectoin"
                onChange={(e)=>(setInput(e))}
               />
            </div>

            <div className="form-group">
                <label>CGPA: </label>
                <input type="text"  
                name = "CGPA" id = "CGPA"
                placeholder="Enter CGPA"
                onChange={(e)=>(setInput(e))}
               />
            </div>

            <div className="form-group">
                <label>Password: </label>
                <input type="password"  
                name = "password" id = "password"
                placeholder="Set your password" 
                onChange={(e)=>(setInput(e))}
                />
            </div>
            <div className="form-group">
                <label>Comfirm Password: </label>
                <input type="password"  
                name = "password2" id = "password2"
                placeholder="Comfirm your password" 
                onChange={(e)=>(setInput(e))}
                />
            </div>
            <div>
                <input type="submit" value="Signup" onClick={send}  />
            </div><br/>
            <div className="login">
                <Link to="/login">Login</Link>
            </div>
        </form> 
    </div>
  )
}

export default Signup