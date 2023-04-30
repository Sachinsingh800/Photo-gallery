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
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DZgQZNlxaby5oycajgw0vvjBo911u0EUpA&usqp=CAU' />
         <img src='https://c4.wallpaperflare.com/wallpaper/765/999/824/portrait-display-vertical-artwork-digital-art-warrior-hd-wallpaper-preview.jpg' />
         <img src='https://wallpaper.dog/large/20492994.jpg' />
         <img src='https://e1.pxfuel.com/desktop-wallpaper/43/912/desktop-wallpaper-lionel-messi-messi-2022-portrait-thumbnail.jpg' />
         <img src='https://wallpaper.dog/large/20492996.jpg' />
         <img src='https://wallpaper-house.com/data/out/21/wallpaper2you_10077.jpg' />
         <img src='https://images.pexels.com/photos/4192655/pexels-photo-4192655.jpeg?cs=srgb&dl=pexels-paulo-bert-4192655.jpg&fm=jpg' />
         <img src='https://wallpaperaccess.com/full/1975612.jpg' />
         <img src='https://images.unsplash.com/photo-1504803900752-c2051699d0e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4MjM4MDh8fGVufDB8fHx8&w=1000&q=80' />
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5EDN0KjHzL637U3RS16HMDkKQhbr_qB_Cpegk2FDGrUVCE9Y6SgYgZMcgpyddgxajbCs&usqp=CAU' />
         <img src='https://e0.pxfuel.com/wallpapers/603/321/desktop-wallpaper-nature-autumn-leaves-blur-smooth-branches.jpg' />
         <img src='https://wallpaperaccess.com/full/1385600.jpg' />
      </div>
    </div>
  )
}

export default Blog
