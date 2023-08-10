import express from 'express';
import dotenv from "dotenv"
import db from "./../db.js"
import formidable from "formidable"
import bcrypt from "bcryptjs"
import { sendRegistrationMail } from '../utils/mail.js';

dotenv.config()

const signup = async(req, res) =>{
    let form = new formidable.IncomingForm()
    form.parse(req, async(err, fields, file) =>{
        const {fname, lname, email, password, loc, phone, mos, course, cohort, center} = fields

        let sql = "SELECT * FROM users WHERE email = ?";

        await db.query(sql, [email], async(err, result) =>{
            if(result?.length > 0){
               res.status(400).json({message:"Email Already Exists"})
            }else{
                if(fname === "" || lname === "" || email === "" || password === "" || loc === "" || mos === "" || cohort === "" || center === "" || course === "" ){
                    res.status(400).json({message:"Input Field Cannot Be Empty"});
        
                }else if(!/[\w]{3,}@[\w]{3,}.[a-z]{2,}/.test(email)){
                    res.status(400).json({message:"enter valid email"});
                    
                }else{
                   let sql = `INSERT INTO users(fname,lname, email, password, phone, loc, course, mos, cohort, center ) VALUES(?,?,?,?,?,?,?,?,?,?)`
        
                   let salt = bcrypt.genSaltSync(10);
        
                   let hashpwd = bcrypt.hashSync(password, salt);
        
                   db.query(sql,[fname, lname, email, hashpwd, phone, loc,course, mos,cohort,center], async(err, result) =>{
                    if(err){
                        await res.status(400).json({message: "error", info: err.message})
                    }else{

                       sendRegistrationMail(email, fname)
                      
                        
                        res.status(201).json({message: "success", info: {id: result?.insertId,email,fname, mos, center, cohort, course}})
                    }
                   })
        
                
                }
            }
        }) 

        
        
})
   
}


export {signup}