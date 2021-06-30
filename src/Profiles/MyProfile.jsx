import React,{ useState } from 'react'
import './MyProfile.css';
import Navbar from '../Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../Firebase';

function loadRazorpay() {
    return new Promise((resolve) =>{

        const script = document.createElement('script')
        script.src = 'https://checkout.razorpay.com/v1/checkout.js'
        script.onload = () =>{
            resolve(true)
        }
        script.onerror = () =>{
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

function MyProfile() {

    const user = useSelector(selectUser);

    async function showRazorpay(){
    
        const res = await loadRazorpay();
            if(!res)
            {
                alert("Razorpay SDK failed to load....");
                return ;
            }
            const data = await fetch('http://localhost:8000/razorpay',{method: 'POST'}).then((t)=>
                t.json()
            )
            console.log(data);
            const options = {
                key: 'rzp_test_4eIGXbZzVV3SxK', 
                currency: data.currency,
                amount: data.amount.toString(), 
                order_id: data.id, 
                name: 'Sashwat Mishra',
                description: 'Subscription Payment',
                image: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png',
                handler: function (response){
                    alert(response.razorpay_payment_id)
                    alert(response.razorpay_order_id)
                    alert(response.razorpay_signature)
                },
                prefill: {
                    name:'Sashwat',
                    email: user.email,
                    phone_number: '9829187512'
                }
            }
            const payment_obj = new window.Razorpay(options);
            payment_obj.open();
        }


    return (
        <div className="myprofile">
            <Navbar/>
            <div className="myprofile_body">
                <h1>Edit Profile</h1>
                <div className="myprofile_info">
                    <div className="myprofile_details">
                        <h2>{user.email}</h2>
                        <div className="plans">
                            <h3>Plans</h3>
                            <div className="plan">
                                <div className="about">
                                    <h4>Netflix Basic</h4>
                                    <h4> 480p</h4>
                                </div>
                                <button target="_blank" onClick = {showRazorpay}>Subscribe</button>
                            </div>
                            <div className="plan">
                                <div className="about">
                                    <h4>Netflix Standard</h4>
                                    <h4> 1080p</h4>
                                </div>
                                <button target="_blank" onClick = {showRazorpay}>Subscribe</button>
                            </div>
                            <div className="plan">
                                 <div className="about">
                                    <h4>Netflix Premium</h4>
                                    <h4> 4K + HDR</h4>
                                </div>
                                <button target="_blank" onClick = {showRazorpay}>Subscribe</button>
                            </div>
                            <button className="myprofile_signout"
                                onClick={ () =>{ auth.signOut() }}
                                >
                            SIGN OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
