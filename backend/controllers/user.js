
import dotenv from "dotenv"
import db from "./../db.js"
import formidable from "formidable"
import bcrypt from "bcryptjs"
import { sendRegistrationMail } from '../utils/mail.js';
import jwt  from 'jsonwebtoken';

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


const login = async(req, res) => {

    try{

        const form = new formidable.IncomingForm()
    form.parse(req, async (err, fields) => {

        const { email, password } = fields;

        if (email === "" || password === "") {
            res.status(400)
            return res.json('please add all field')

        }else{
            let sql = "SELECT * FROM users WHERE email = ?"
            await db.query(sql, [email], async(err, result) => {

                let data = result[0]

                if(err){
                    res.status(400).json({message: err})

                }else if(data === undefined){
                    res.status(400).json({message:"invalid email"})

                 }else{

      

                 //check password
                 await bcrypt?.compare(password, data?.password)
                 .then((confirm) => {
                    if(confirm){
                        
                      let token =  jwt?.sign({ id: data?.id, email: data?.email }, process.env.JWT_SECRET, {
                            expiresIn: '30d'//may change time later
                        })
                       
                    res.status(200).json({token: token, message:"login successful"})
                    }else{
                        res.status(400).json({message:"invalid credentials"}) 
                    }
                 })
                 .catch((err) => res.status(400).json({message:err}))
                 }
            })
    
        
           
        }

       
    })


    }catch(err){
       res.status(400).json({ message: err})
       
    }

}

const myProfile = async(req, res) =>{
   
    if(!req.user){
        res.status(400).json({ message: "authentication required"})
       }else{
        res.status(200).json({ info: req.user})
       }
   
}

const getProspectus = async(req, res) =>{
    let form = new formidable.IncomingForm()

    form?.parse(req, (err, fields) =>{
        const {fullname, email, phone} = fields

       if(fullname === "" || email === "" || phone === ""){
        res.status(400).json({message: "fields cannot be empty"})
       }else{
        let sql = "INSERT INTO prospectus(email, fullname, phone) VALUES(?,?,?)"
        db.query(sql, [email, fullname, phone], async(err, result) =>{
            if(err){
                console.log(err);

            }else{
                res.status(200).json({message:"success"})
            }
        })
       }
    })
}


export {signup, login, myProfile, getProspectus}