import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./db.js"
import userRoute from "./routes/user.js"
import activitiesRoute from "./routes/activities.js"
import formidable from "formidable"
import crypto from 'crypto';
import { PaymentMail } from "./utils/mail.js"

const API_SECRET_KEY = 'sk_test_f963a27107baa67d22dd41396f68260dc456c87b';

function verify(eventData, signature) {
  const hmac = crypto.createHmac('sha512', API_SECRET_KEY);
  const expectedSignature = hmac.update(JSON.stringify(eventData)).digest('hex');
  return expectedSignature === signature;
}

dotenv.config()

const app = express()
app.use(cors({
  origin:"*"
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use(userRoute)
app.use(activitiesRoute)

app.get("/testing", async(req, res) =>{
  res.send("api working")
})

app.post("/payment", async(req, res) =>{
  const eventData = req.body;
  const signature = req.headers['x-paystack-signature'];

  if (!verify(eventData, signature)) {
    return res.status(400).json({info: 'Invalid signature'});
  }

  const transactionId = eventData.data.id;
   let userId = parseInt(eventData?.data?.metadata?.id)
   let ref = eventData?.data?.reference
   let date = new Date(eventData?.data?.paid_at)
   let sts = eventData?.data?.status
   let amt = eventData?.data?.amount
   let evt = eventData?.event
   let email = eventData?.data?.customer?.email
   let name = eventData?.data?.metadata?.fname

  if (evt === 'charge.success') {
    


    //Process the successful transaction to maybe fund wallet and update your WalletModel
   let sql = "INSERT INTO payment(refId, paymentTime, user, status, amount, event, transactionid) values(?,?,?,?,?,?,?)"
   db.query(sql, [ref, date,userId, sts, amt, evt, transactionId], (err, result) =>{
    if(err){
      console.error(err)
      res.status(400)
    }else{
      PaymentMail(email,name, amt)
      console.log(eventData)
      res.status(200)
    }
   })
  }

  
 

})




app.listen(process.env.REACT_APP_PORT || 5000, () =>{
    try{
        db.connect()
        console.log("db connecton established")
        console.log(`listening on port ${process.env.PORT}`)
      }catch(e){
        console.error(e)
      }
    
})

