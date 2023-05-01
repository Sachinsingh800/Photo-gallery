import React from 'react'
import style from './Footer.module.css'
import {BsFacebook } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {AiFillAndroid, AiFillApple, AiFillTwitterCircle, AiOutlineGlobal} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Image from "../../asset/logo.png"


export default function Footer() {
  return (
    <>
    <div className={style.main}>
    <div className={style.FisrtDiv}>
    <img className={style.logo} src={Image} />
      <h4>
      PhotoGallery
      </h4>
      </div>    
<div className={style.icon}>

<h4>Mobile  and Apps</h4>
  <Link className={style.link} to="https://www.facebook.com/"><AiOutlineGlobal/><span className={style.name} >Cricket-Live.com</span> </Link>


<Link className={style.link}  to="https://www.instagram.com/"><AiFillAndroid/><span className={style.name} >Android</span></Link>

<Link className={style.link}  to="https://www.twitter.com/"><AiFillApple/><span className={style.name} >IOS</span></Link>

</div> 

<div className={style.icon}>

<h4>Follows us On</h4>
  <Link className={style.link} to="https://www.facebook.com/"><BsFacebook/><span className={style.name} >facebook</span> </Link>


<Link className={style.link}  to="https://www.instagram.com/"><BsInstagram/><span className={style.name} >instagram</span></Link>

<Link className={style.link}  to="https://www.twitter.com/"><AiFillTwitterCircle/><span className={style.name} >twitter</span></Link>

<Link className={style.link}  to="https://www.youtube.com/"><AiFillYoutube/><span  className={style.name} >youtube</span></Link>
</div> 

<div className={style.icon}>

<h4>Company</h4>
 <span className={style.name} >Careers</span> 


<span className={style.name} >Advertise</span>

<span className={style.name} >Privacy Policy</span>

<span  className={style.name} >Cricket Live Tv Ads</span>
</div> 
   
    </div>
      <p className={style.Footertext}>© 2023 Developer.All Rights Reserved</p>
   </>
  )
}