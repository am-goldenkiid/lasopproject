import dotenv from "dotenv"
import Sib from "sib-api-v3-sdk"

dotenv.config()

const client = Sib.ApiClient.instance

const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.SIB_API_KEY

const tranEmailApi = new Sib.TransactionalEmailsApi()
const sender = {
    email: 'expensive7832@gmail.com',
    name: 'Lagos State School Of Programming',
}

const sendRegistrationMail = (email, name) => {


    try {
        tranEmailApi
            .sendTransacEmail({
                sender,
                to: [{email: email, name: name}],
                subject: "Registration Successfully",
                htmlContent: `
        <h1>Welcome To Lasop, Your Account Has Been Created Successfully</h1>
       
        `,
               
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        
    } catch (err) {

    }


}

const PaymentMail = (email, name, amount) => {


    try {
        tranEmailApi
            .sendTransacEmail({
                sender,
                to: [{email: email, name: name}],
                subject: "Registration Successfully",
                htmlContent: `
        <h1>Your Payment of ${amount} was Successful</h1>
       
        `,
               
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        
    } catch (err) {

    }


}

export {sendRegistrationMail, PaymentMail}