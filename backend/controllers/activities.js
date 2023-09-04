const express = require( 'express')
const dotenv = require( "dotenv")
const db = require( "./../db.js")
const formidable = require( "formidable")
const cloudinary = require( '../middleware/cloudinary.js')

dotenv.config()

const getMos = async (req, res) => {

    try {
        const sql = "SELECT * FROM  mos where is_active = ?";

        await db.query(sql, [true] ,(error, results, fields) => {
            if (error){
                 res.status(400).json({message: error.message});
            }else{
                res.send(results);
            }
           
        })
    } catch (e) {
        res.send(e)
    } 
}

const getCohort = async (req, res) => {

    try {
        const sql = "SELECT * FROM  cohort where is_active = ?";

        await db.query(sql, [true], (error, results, fields) => {
            if (error){
                 res.status(400).json({message: error.message});
            }else{
                res.send(results);
            }
           
        })
    } catch (e) {
        res.send(e)
    } 

}
const getCourse = async (req, res) => {

    try {
        const sql = "SELECT * FROM  course where is_active = ?";

        await db.query(sql, [true], (error, results, fields) => {
            if (error){
                 res.status(400).json({message: error.message});
            }else{
                res.send(results);
            }
           
        })
    } catch (e) {
        res.send(e)
    } 


}
const getCenter = async (req, res) => {

    try {
        const sql = "SELECT * FROM  center where is_active = ?";

        await db.query(sql, [true], (error, results, fields) => {
            if (error){
                 res.status(400).json({message: error.message});
            }else{
                res.send(results);
            }
           
        })
    } catch (e) {
        res.send(e)
    }


}

const Receipt = async(req, res) =>{
   try{
    
     let form = new formidable.IncomingForm()

       form.parse(req, async(err, fields, file) =>{

        let {image} = file
        let id = req.user
        
       
        if(image.originalFilename === ""){
            res.status(400).json({message: "Provide the receipt"})
        }else{
            await cloudinary?.v2?.uploader?.upload(image?.filepath, { folder: "lasopproject/receipt" }, async (err, imgdata) => {
                if (err) {
                    console.log(err.message)
                } else {
                    const imgurl = imgdata?.secure_url;
                    const imgId = imgdata?.public_id;
                    const sql = "INSERT INTO receipt(userid, imgid, img) VALUES(?,?,?)";
    
                    await db.query(sql, [id, imgId, imgurl], async (err, result) => {
                        if (err) {
                            console.log(err);
    
                        } else {
                            
                            res.status(200).json({message: "Congratulations, Your application is in process"})
                        }
    
                    })
    
    
    
                }
            })
    
        }
      

        // await db.query(sql,(error, results, fields) => {
        //     if (error){
        //          res.status(400).json({message: error.message});
        //     }else{
        //         res.send(results);
        //     }
           
        // })
       })
   }catch(e){
    console.log(e);
   }
}


const getReceipt = async(req, res) =>{
    let sql = "SELECT * FROM receipt order by id desc"

    await db.query(sql, (err, rows) =>{
        if(err){
            console.log(err);
        }else{
            res.status(200).json({data: rows});
        }
    })

}

const confirmReceipt = async(req, res) =>{
    let { id } = req.params;
    let sql = "select * from receipt where id = ?"

    await db.query(sql, [id], (err, rows) =>{
        if(err){
            console.log(err)
        }else{
            if(rows.length === 0){
                res.status(400).json({message: "not found"});
            }else{
                let sql = "update receipt set status = ? where id = ?"
                db.query(sql, [true, id], async(err, result) =>{
                    if(err){
                        console.log(err)
                    }else{
                        res.status(200).json({message: "success"})
                    }
                })
            }
        }
    })
}

const getApplicants = async(req, res) =>{
    let sql = "select users.id, users.fname, users.dateCreated, course.title as coursetitle, cohort.title as chrttitle, center.title as centertitle, mos.title as mostitle, receipt.status from users inner join receipt on receipt.userid = users.id inner join course on course.id = users.course inner join cohort on cohort.id = users.cohort inner join center on center.id = users.center inner join mos on mos.id = users.mos;"

    await db.query(sql, (err, rows) =>{
        if(err){
            console.log(err)
        }else{
            
             res.status(200).json({data: rows})
        }
    })
}

module.exports = { getMos, getCenter, getApplicants, getCohort, getCourse, Receipt, getReceipt, confirmReceipt }