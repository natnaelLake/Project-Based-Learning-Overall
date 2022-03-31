const localStrategy = require('passport-local').Strategy;
const passport = require('passport');
const connection = require('../models/models');
const bcrypt = require('bcrypt');

function passportInitilaize(){
        passport.use(new localStrategy((username,password,done) => {
            console.log("now i am in local strategy");
            console.log("username and password ",username,password);
            const sql = 'SELECT * FROM students WHERE username = ?';
            connection.query(sql,username,(err,user) => {
                if(err) return done(err);
                if(!user){
                   return done(null,false,'Email is not registtered');
                }else{
                console.log(user);
                bcrypt.compare(password,user[0].password,(err,res) => {
                    console.log(password,user[0].password);
                    if(err) return done(err);
                    if(!res){
                        console.log('Password is not correct')
                        return done(null,false,'Password is not correct');
                    }
                    console.log('Successfully logged in')
                    return done(null,user,'Successfully logged in');
                })

              }

            })

        }))

        passport.serializeUser((user,done) => {
            done(null,user[0].id);
        })

        passport.deserializeUser((id,done) => {
            const sql = 'SELECT * FROM students WHERE id = ?';
            connection.query(sql,id,(err,res) => {
                done(err,res[0]);
            })
        });

}

module.exports = passportInitilaize;
