import React from 'react'
import style from "./HomePage.module.css"
import { gsap } from 'gsap'
import { useIntersection } from 'react-use'

function HomePage() {
  
  return (
    <div className={style.main}>
      <div  className={style.container}>
      <span>The art of photography is all about directing the attention of the viewer.</span>
      </div>
 
    </div>
  )
}

export default HomePage
