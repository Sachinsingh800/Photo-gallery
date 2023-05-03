import React  from 'react'
import style from "./HomePage.module.css"
import Video from "../../../asset/demo.mp4"
import ReactPlayer from 'react-player/lazy'


function HomePage() {

  return (


    <div className={style.main}>
   
 
   <ReactPlayer url={Video} playing={true} controls={false} loop={true} muted={true} width='700px' height='100%' />

      
      <div  className={style.container}>
 
      <span>The art of photography is all about directing the attention of the viewer.</span>
      </div>
 
    </div>

  )
}

export default HomePage
