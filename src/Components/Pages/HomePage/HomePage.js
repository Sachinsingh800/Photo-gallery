import React from 'react'
import style from "./HomePage.module.css"
import Video from "../../../asset/demo.mp4"
import ReactPlayer from 'react-player/lazy'
import { useNavigate } from 'react-router-dom'


function HomePage() {
  const navigate= useNavigate()
function navigatetoPhoto(){
  navigate("/Photo")
}
  return (


    <div className={style.main}>
   
 <div  className={style.video}>
 <ReactPlayer url={Video} playing={true} controls={false} loop={true} muted={true} />
 </div>
   

      
      <div  className={style.container}>
 
      <span>The art of photography is all about directing the attention of the viewer.</span>
      <button className={style.getstart} onClick={navigatetoPhoto}>get Start</button>
      </div>
 
    </div>

  )
}

export default HomePage
