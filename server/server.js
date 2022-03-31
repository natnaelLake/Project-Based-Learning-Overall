const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const cors = require('cors')
const passportInitilaize = require('./passport-config/passport');
const route = require('./Routes/routes');
const app = express();
const hbs = require('express-handlebars');

// body parser middlewares
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({
    secret:"Verygoodsecret",
    resave:true,
    saveUninitialized:true
}));
app.engine('hbs',hbs.engine({extname:'hbs'}));
app.set('view engine','hbs');
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passportInitilaize();
const isLoggedIn = (req,res,next) => {

    if(req.isAuthenticated()) {
        console.log("Logged in successfully");
        return next();
    }
    console.log("please log in first");
    res.redirect('/login');
}
app.use('/',route);
app.get('/home',isLoggedIn,(req,res) => {
    res.render('home',{title:"Home page"})
})

app.get('/fail',(req,res) => {
    res.render('falure',{title:"failure page"});
})
app.get('/',(req,res) => {
        const fname = "Haymanot"
        const  lname = "Demis"
        const id = "ETS0340/12"
        const username = "haymedin21@gmail.com"
        const dept = "software"
        const  batch = 3
        const  section = "B"
        const CGPA = 3.86
        const  password = "qwerty1234!@#$"
        const password2 = "qwerty1234!@#$"
    
   /*     connection.connect((err) => {
            if(err) {
                console.log("connection error")
            }

            const VALUES =[fname,lname,id,username,dept,batch,section,CGPA,password];
                    // ['hsgfd','hdfgfdh','hgfdhghjd','jh','fdhgjfdjh',3,'b',3.9,'gdsfg'],
                    // ['jhgjhf','hddheyfgfdh','54ff','jh','fdhgjfdjh',3,'b',3.9,'gdsfg'],
                    // ['erjm','hdfgfdh','hgfdhghjd','jh','fdhgjfdjh',3,'b',3.9,'gdsfg'],
                    // ['hh','hdfgfdh','klio','jh','fdhgjfdjh',3,'b',3.9,'gdsfg'],
                    // ['sfdrv','nnbc','rt56','jh','fdhgjfdjh',3,'b',3.9,'gdsfg']];
                    
                // [fname,lname,id,dept,batch,section,CGPA,password]
            
            //const sql = 'INERT INTO Students (fname,lname,id,username,dept,batch,section,CGPA,password) VALUES ("q","q","ewqr","qe","qwe",3,"sg","sh",3.3,"yt")';
           const sql = 'create table mytable (fname varchar(20) ,lname varchar(20),id varchar(20),username varchar(20),dept varchar(20),batch int,section varchar(2),CGPA decimal,pass varchar(20))';   
           const sql2 = 'insert into mytable (fname,lname,id,username,dept,batch,section,CGPA,pass) values ("q","q","ewqr","qe","qwe",3,"sg","sh",3.3,"yt")'
           const sql3 = "insert into students (fname,lname,id,username,dept,batch,section,CGPA,password) values (?,?,?,?,?,?,?,?,?)" ;
           connection.query(sql3,VALUES,(err,result) => {
                     if(err)
                    {
                        console.log("not created error");
                        throw err;
                     }
                     console.log(`inseted`);
                     console.log(result);
                     console.log(VALUES);
                 })
            // connection.query('insert into DB_table3 (id, name ,age) values (12,"haymanot",22)',(err)=>{
            //     if(err) throw err;
            //     console.log("data inserted");
            // })
        })  */
        res.json({fname,lname,id,username,dept,batch,section,CGPA});
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
});


