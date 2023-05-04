import React ,{useState} from 'react'
import NavigationBar from '../../NavigationBar/NavigationBar';
import style from "./Photo.module.css"

function Photo() {
    const [image, setImage] = useState(null);
    const onImageChange = (event) => {
      if (event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
      }
    };
  return (
    <div className={style.main}>
        <NavigationBar />
      <h1>Photo</h1>
      <input type="file" onChange={onImageChange} className="filetype" />
      {image ? <img src={image} alt="preview image" /> : ''}
      
    </div>
  )
}

export default Photo
