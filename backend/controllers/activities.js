import express from 'express';
import dotenv from "dotenv"
import db from "./../db.js"
import formidable from "formidable"

dotenv.config()

const getMos = async (req, res) => {

    try {
        const sql = "SELECT * FROM  mos";

        await db.query(sql,(error, results, fields) => {
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
        const sql = "SELECT * FROM  cohort";

        await db.query(sql,(error, results, fields) => {
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
        const sql = "SELECT * FROM  course";

        await db.query(sql,(error, results, fields) => {
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
        const sql = "SELECT * FROM  center";

        await db.query(sql,(error, results, fields) => {
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

const Receipt = async (req, res) => {

    

    try {
       let form = new formidable.IncomingForm()

       form.parse(req, async(err, fields, file) =>{

        let {image} = file

        console.log(image.originalFilename);

        // await db.query(sql,(error, results, fields) => {
        //     if (error){
        //          res.status(400).json({message: error.message});
        //     }else{
        //         res.send(results);
        //     }
           
        // })
       })
    } catch (e) {
        res.send(e)
    }


}


export { getMos, getCenter, getCohort, getCourse, Receipt }