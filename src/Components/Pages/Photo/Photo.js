import React ,{useState} from 'react'
import NavigationBar from '../../NavigationBar/NavigationBar';
import style from "./Photo.module.css"
import Image from "../../../asset/upload.png"

function Photo() {
    const [image, setImage] = useState(null);
    const onImageChange = (event) => {
      if (event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
      }
    };
  return (
    <div className={style.main}>
        <div className={style.nav}><NavigationBar /></div>
        <div className={style.container}>
      <div className={style.imgContainer}>
      {image ? <img className={style.image} src={image} alt="preview image" /> :
       <div> 
         <label htmlFor='image' ><img className={style.icon} src={Image}  atl="icon" /></label>
      <input id='image' hidden type="file" onChange={onImageChange} className="filetype" />
      <h1>upload image here</h1>
      </div>}
      </div>
      <form className={style.form}>
      <label htmlFor="Name">Name </label>
        <input id='Name' placeholder='write name of your photo'  />
        <label htmlFor="Discription">Discription</label>
        <textarea id='Discription' placeholder='write something about your photo'  />
      </form>
        </div>
     
      
    </div>
  )
}

export default Photo
