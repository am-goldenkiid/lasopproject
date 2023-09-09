
const dotenv = require("dotenv")
const db = require("./../db.js")
const formidable = require("formidable")
const bcrypt = require("bcryptjs")
const { sendRegistrationMail } = require('../utils/mail.js')
const jwt = require('jsonwebtoken')

dotenv.config()

const signup = async (req, res) => {
    let form = new formidable.IncomingForm()
    form.parse(req, async (err, fields, file) => {
        const { fname, lname, email, password, loc, phone, mos, course, cohort, center } = fields

        let sql = "SELECT * = require( users WHERE email = ?";

        await db.query(sql, [email], async (err, result) => {
            if (result?.length > 0) {
                res.status(400).json({ message: "Email Already Exists" })
            } else {
                if (fname === "" || lname === "" || email === "" || password === "" || loc === "" || mos === "" || cohort === "" || center === "" || course === "") {
                    res.status(400).json({ message: "Input Field Cannot Be Empty" });

                } else if (!/[\w]{3,}@[\w]{3,}.[a-z]{2,}/.test(email)) {
                    res.status(400).json({ message: "enter valid email" });

                } else {
                    let sql = `INSERT INTO users(fname,lname, email, password, phone, loc, course, mos, cohort, center ) VALUES(?,?,?,?,?,?,?,?,?,?)`

                    let salt = bcrypt.genSaltSync(10);

                    let hashpwd = bcrypt.hashSync(password, salt);

                    db.query(sql, [fname, lname, email, hashpwd, phone, loc, course, mos, cohort, center], async (err, result) => {
                        if (err) {
                            await res.status(400).json({ message: "error", info: err.message })
                        } else {

                            sendRegistrationMail(email, fname)


                            res.status(201).json({ message: "success", info: { id: result?.insertId, email, fname, mos, center, cohort, course } })
                        }
                    })


                }
            }
        })



    })

}


const login = async (req, res) => {

    try {

        const form = new formidable.IncomingForm()
        form.parse(req, async (err, fields) => {

            const { email, password } = fields;
            

            if (email === "" || password === "") {
                
                res.status(400).json('please add all field')

            } else {
                let sql = "SELECT * FROM users WHERE email = ?"
                await db.query(sql, [email], async (err, result) => {

                    let data = result[0]
                    

                    if (err) {
                        res.status(400).json({ message: err })

                    } else if (data === undefined) {
                        res.status(400).json("invalid email")

                    } else {



                        //check password
                        await bcrypt?.compare(password, data?.password)
                            .then( async(confirm) => {
                                if (confirm) {

                                    let token = await jwt?.sign({ id: data?.id, email: data?.email }, process.env.JWT_SECRET, {
                                        expiresIn: '30d'//may change time later
                                    })

                                    let joindata = "select * from users inner join receipt on users.id = receipt.userid where users.id = ?"

                                    await db.query(joindata, [data?.id], (err, result) =>{
                                        
                                    res.status(200).json({ token: token, result, message: "login successful" })
                                    })
                                } else {
                                    res.status(400).json("invalid credentials" )
                                }
                            })
                            .catch((err) => res.status(400).json( err ))
                    }
                })



             }


        })


    } catch (err) {
        res.status(400).json({ message: err })

    }

}

const myProfile = async (req, res) => {

    if (req?.headers?.authorization !== undefined && req?.headers?.authorization?.startsWith('Bearer')) {


        token = req?.headers?.authorization?.split(' ')[1];
        const decode = jwt?.verify(token, process.env.JWT_SECRET);
        const { id, email } = decode

        let sql = "SELECT * FROM users INNER JOIN receipt on users.id = receipt.userid WHERE users.email = ? AND users.id = ?"

        await db.query(sql, [email, id], (err, result) => {
            user = result[0]

            if (!user) {
                res.status(400).json({ message: "invalid" })
            } else {

                res.status(200).json({ info: user })
            }

        })




    } else {

        res.status(400).json({ message: "authentication failed" })
    }



}

const getProspectus = async (req, res) => {
    let form = new formidable.IncomingForm()

    form?.parse(req, (err, fields) => {
        const { fullname, email, phone } = fields

        if (fullname === "" || email === "" || phone === "") {
            res.status(400).json({ message: "fields cannot be empty" })
        } else {
            let sql = "INSERT INTO prospectus(email, fullname, phone) VALUES(?,?,?)"
            db.query(sql, [email, fullname, phone], async (err, result) => {
                if (err) {
                    console.log(err);

                } else {
                    res.status(200).json({ message: "success" })
                }
            })
        }
    })
}

const studentCounter = async (req, res) => {
    let sql = "SELECT COUNT(role) as qty from users where role = 'student'"
    db.query(sql, async (err, result) => {
        if(err) {
            console.log(err);
        } else {
          
           res.status(200).json({message: "success", result})
        }
    })
}

const courseCounter = async (req, res) => {
    let sql = "SELECT COUNT(title) as qty from course"
    db.query(sql, async(err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).json({message: "success", result})
        }
    })
}


module.exports = { signup, login, myProfile, getProspectus, studentCounter, courseCounter }