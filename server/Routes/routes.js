const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const connection = require('../models/models');
const hbs = require('express-handlebars');
const { eventNames } = require('../models/models');
const passport = require('passport');



//routes
router.get('/post',(req,res) => {
    res.json({nmae:"haymanot"})
})
const isLoggedOut = (req,res,next) => {

    if(req.isAuthenticated()) {
        console.log("Already logged in");
        res.redirect('/home');
        return;
    }
   next();
}


router.get('/login',isLoggedOut,(req,res) => {
   res.render('login',{title:"Login page"})
})

router.get('/logout',(req,res) => {
    req.logOut();
    console.log('Logged out')
    res.redirect('/login');
})

router.post('/login',passport.authenticate('local',{
    successRedirect:'/home',
    failureRedirect:'/fail',
    failureMessage:true
})
)


router.post('/register',[check('fname').notEmpty().withMessage('Name field is empty')
.isAlpha().withMessage("Name can't hold none alpha characters")
.isLength({min:2,max:20}).withMessage("Make name to have a length in the range 2-20 chars"),
check('lname').notEmpty().withMessage('Last name field cannnot be empty')
.isLength({min:2,max:20}).withMessage("Make last name to have a length in the range 2-20 chars"),
check('id').notEmpty().withMessage('Insert your ID').isLength({max:10}).withMessage('Incorrect ID'),
check('username').notEmpty().withMessage('username cannot be empty').isLength({min:5,max:20})
.withMessage('Email must have a legth between 5 and 20 characters').isEmail().withMessage('username must be email')
.custom(async (username,{req}) => {
    return new Promise((resolve,reject)=>{
        connection.query('SELECT * FROM students WHERE username = ?',username,(err,res) => {
            if(err) reject(new Error('server error'));
            if(res.length > 0){
                console.log(res);
                 reject(new Error("This email is already registered,please login or use other email"));
            }
            resolve(true);
        }); 
    })
        
}),
check('dept').notEmpty().withMessage('Department field cannnot be empty').isAlpha()
.withMessage('Department must be only of alpha chars'),
check('batch').notEmpty().withMessage('please fill your batch field').isNumeric().withMessage('batch can contain only counting numbers')
.isLength({max:1}).custom(async (batch,{req})=>{
    if(batch < 1 || batch > 5){
        throw new Error("Invalid batch number make it 1-5");
    }
}),
check('section').notEmpty().withMessage("Please enter your section").isAlpha().withMessage("Section is alphabetical data")
.isLength({max:1}).withMessage('Invalid section data'),
check('CGPA').notEmpty().withMessage("Pease insert your commulative GPA").isNumeric().withMessage('CGPA  must be numeric value'),
check('password').notEmpty().withMessage('Please insert password').isLength({min:8}).withMessage('Your pass word must have at least 8 chars'),
check('password2').notEmpty().withMessage('Please comfirm your password').custom(async (password2,{req}) => {
    const password = req.body.password;
    console.log(password2);
    if(password !== password2){
        throw new Error('Please conddirm your password');
    }
})
],async (req,res) => {
    const {fname,lname,id,username,dept,batch,section,CGPA,password} = req.body;
    let inputErrors = validationResult(req).array();
    if(inputErrors.length > 0){
        res.send(inputErrors);
    }
    else{
        const hashedPassword = await bcrypt.hash(password,10);
        const sql = 'INSERT INTO students (fname,lname,id,username,dept,batch,section,CGPA,password) VALUES (?,?,?,?,?,?,?,?,?)';
        const sql2 = 'create table newTable (fname varchar(20) ,lname varchar(20),id varchar(20),username varchar(20),dept varchar(20),batch int,section varchar(2),CGPA decimal,pass varchar(20))';   
        const sql3 =
       `insert into students (fname,lname,id,username,dept,batch,section,CGPA,password) values ('${fname}','${lname}','${id}','${username}','${dept}','${batch}','${section}','${CGPA}','${password}')`; 
        const sql4 = 'insert into students (fname) values (?)';
        const sql5 = 'select * from students where fname = ?';
       const VALUES = [fname,lname,id,username,dept,batch,section,CGPA,hashedPassword];
        const name = fname;
        connection.query(sql,VALUES,(err,result) => {
            if(err)
            {
                console.log("Insertion error");
                res.sendStatus(404).send('Not Found')
            }
         //   console.log(`${fname}'s data inserted into database`);
            console.log("DB created",result);
            console.log(VALUES)
        })
        res.render('home',{fname:fname,lname:lname,id:id,username:username,dept:dept,batch:batch,section:batch,CGPA:CGPA})  
        //res.json({fname,lname,id,username,dept,batch,section,CGPA,hashedPassword})
    }
   // res.render('home',{fname,lname,id,username,dept,batch,section,CGPA})   
})

module.exports = router;

/*
[check('fname').notEmpty().withMessage('Name field is empty')
.isAlpha().withMessage("Name can't hold none alpha characters")
.isLength({min:2,max:20}).withMessage("Make name to have a length in the range 2-20 chars"),
,check('lname').notEmpty().withMessage('Last name field cannnot be empty')
.withMessage("Last name can't hold none alpha characters")
.isLength({min:2,max:20}).withMessage("Make last name to have a length in the range 2-20 chars"),
check('username').notEmpty().withMessage('username cannot be empty').isLength({min:5,max:20})
.withMessage('Email must have a legth between 5 and 20 characters').isEmail().withMessage('username must be email'),
check('dept').notEmpty().withMessage('Department field cannnot be empty').isAlpha()
.withMessage('Department must be only of alpha chars'),
check('batch').notEmpty().withMessage('please fill your batch field').isNumeric().withMessage('batch can contain only counting numbers')
.isLength({max:1}),
check('section').notEmpty().withMessage("Please enter your section").isAlpha().withMessage("Section is alphabetical data")
.isLength({max:1}),
check('CGPA').notEmpty().withMessage("Pease insert your commulative GPA").isNumeric().withMessage('CGPA  must be numeric value'),
check('password').notEmpty().withMessage('Please insert password').isLength({min:8}).withMessage('Your pass word must have at least 8 chars')
]

    let errors = []
 const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(fname === ''){
        errors.push('Your first name is not inserted');
    }

    if(fname.length < 2 || fname.length > 20){
        errors.push('First name should have a length of 2-20 chars');
    }

    if(lname === ''){
        errors.push('Your last name is not inserted');
    }
    if(username === ''){
        errors.push('Your email is not inserted');
    }
    if(dept === ''){
        errors.push('Your department is not inserted');
    }
    if(batch === ''){
        errors.push('Your batch is not inserted');
    }
    if(section === ''){
        errors.push('Your section is not inserted');
    }

    if(CGPA === ''){
        errors.push('Your CGPA is not inserted');
    }
    if(password === ''){
        errors.push('Your password is not inserted');
    }
    if(password2 === '' || password2 !== password){
        errors.push('Please confirm your password');
    }

*/