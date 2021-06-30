const app = require('express')()
const Razorpay = require('razorpay')
const shortid = require('shortid')
const cors = require('cors')

app.use(cors())

const razorpay = new Razorpay({
    key_id : "rzp_test_4eIGXbZzVV3SxK",
    key_secret : "C0Xx3OpI28wzGykkaXW8VdT4"
})


app.post("/razorpay", async (req,res) =>{
    const payment_capture = 1
    const amount = 999
    const currency = 'INR'

    const options = {
        amount: amount*100,
        currency,
        receipt: shortid.generate(), 
        payment_capture
    }
    try{
        const response = await razorpay.orders.create(options)
        console.log(response)
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        })
    }
    catch(error){
        console.log(error)
    }
})


app.listen(8000, ()=>{
    console.log("Listening on 8000")
})