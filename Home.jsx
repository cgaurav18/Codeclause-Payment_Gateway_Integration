import React from 'react'
import {Box, Stack} from '@chakra-ui/react';
import {Card} from './Card'
import './home.css';
import  axios  from "axios";

export const Home = () => {

  const checkoutHandler=async(amount)=>{
    const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

    const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        amount
    })

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Sneaker Heads",
        description: "Payment Integration",
        image: "https://t4.ftcdn.net/jpg/01/36/55/49/360_F_136554929_JG7RLQNfAKpAQlmRmdV7QhbEM1PDt6k2.jpg",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#f09951"
        }
    };
    const razor = new window.Razorpay(options)
    razor.open();
  }
  return (
    <div>
      <div style={{background:"#f09951", display:'flex',color:'white'}}>
        <h2>Sneaker Heads</h2>
        <ul style={{display:'flex'}}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    <Box>
      <Stack className='pati' h={'100vh'} alignItems='center' justifyContent='center' direction={["column","row"]}>
        <Card amount={5000} img={"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/381268/01/sv01/fnd/GBR/fmt/png"} checkoutHandler={checkoutHandler}/>
        <Card amount={45000} img={"https://images-cdn.ubuy.co.in/64103144ff3d436d4356f284-puma-men-039-s-rebound-joy-sneakers.jpg"} checkoutHandler={checkoutHandler}/>

      </Stack>
    </Box>
    </div>
  )
}

export default Home;
