import React, { useState, useEffect } from 'react'
import "./Chatroom.css"
import { BsFillChatFill } from 'react-icons/bs'
import Chatpage from '../Component/Chatpage'
import { motion } from "framer-motion"

const targetDate = new Date('2023-06-20T00:00:00');


// Calculation of when the countdown will end 
const calculateTimeRemaining = () => {
  const now = new Date().getTime();
  const difference = targetDate.getTime() - now;
  console.log("diff",difference)

  if (difference <= 0) {
    // Countdown has ended
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  // Formating and value into day/Hours/minutes/seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds
  };
};

const Chatroom = () => {

  const [toggle, setToggle] = useState(false)
  const [count, setCount] = useState(calculateTimeRemaining())

  const showChat = () => {
    setToggle(true)
  }

  useEffect(() => {
    const interval = setInterval(()=>{
      setCount(calculateTimeRemaining())
    },1000)

    return ()=> clearInterval(interval)
  }, [])

 
  return (
    <>
      <div className='welcome-container'>
        <section className='front-page' >
          <div className="inner-page" >
            <div className='inner-content'>
                <h3>Bussiness Leader</h3>
                <h1>CONFERENCE 2023</h1>
                <p>20-23 JUNE 2023 - Los Angeles CA</p>
            </div>
            <div className='countDown'>
              <div>
                <h1>{count.days}</h1>
                <small>DAYS</small>
              </div><div>
                <h1>{count.hours}</h1>
                <small>HOURS</small>
              </div>
              <div>
                <h1>{count.minutes}</h1>
                <small>MINUTES</small>
              </div>
              <div>
                <h1>{count.seconds}</h1>
                <small>SECONDS</small>
              </div>
            </div>
          </div>
        </section>
        {!toggle &&
          <div className='chat-icon-box' onClick={showChat}>
            <BsFillChatFill className='chat-icon' />
            <p>Chat with us</p>
          </div>
        }
        <motion.div animate={{ x: -10, scale: 1 }} initial={{ scale: 0 }} className='sideBar'>
          {toggle && <Chatpage toggle={toggle} setToggle={setToggle} />}
        </motion.div>
      </div>
    </>
  )
}

export default Chatroom