import React ,{useRef} from 'react'
import UncontrolledExample from '../../Carsousel/Carsousel'
import style from "./Blog.module.css"
import { gsap } from 'gsap'
import { useIntersection } from 'react-use'

function Blog() {
    const sectionRef = useRef(null)

const intersection = useIntersection(sectionRef, {
    root:null,
    rootMargin:"0px",
    threshold:0.2
})

const fadeIn = element=>{
    gsap.to(element,1,{
        opacity:1,
        y:-60,
        ease:"power4.out",
    }
    )
}
const fadeOut = element=>{
    gsap.to(element,1,{
        opacity:0,
        y:-50,
        ease:"power4.out",
    })
}

intersection && intersection.intersectionRatio < 0.2 ? fadeOut("#header") : fadeIn("#header")
  return (
    <div className={style.main}>
      <UncontrolledExample />
      <div className={style.bg}>helloookooojioj</div>
      <div  id='header' ref={sectionRef} className={style.container}>
         <img src='https://source.unsplash.com/random/700*500/?naturewallpaper' />
         <img src='https://source.unsplash.com/random/700*500/?cat' />
         <img src='https://source.unsplash.com/random/700*500/?mountainwallpaper' />
         <img src='https://source.unsplash.com/random/700*500/?portait' />
         <img src='https://source.unsplash.com/random/700*500/?landscape' />
         <img src='https://source.unsplash.com/random/700*500/?abstractwallpaper' />
         <img src='https://source.unsplash.com/random/700*500/?citywallpaper' />
         <img src='https://source.unsplash.com/random/700*500/?dogwallpaper' />
         <img src='https://source.unsplash.com/random/700*500/?anime' />
         <img src='https://source.unsplash.com/random/700*500/?foodwallpaper' />
         <img src='https://source.unsplash.com/random/700*500/?cartoon' />
         <img src='https://source.unsplash.com/random/700*500/?cutewallpaper' />
      </div>
    </div>
  )
}

export default Blog
