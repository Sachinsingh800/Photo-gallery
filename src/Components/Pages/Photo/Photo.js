import React, { useState } from "react";
import NavigationBar from "../../NavigationBar/NavigationBar";
import style from "./Photo.module.css";
import Image from "../../../asset/upload.png";

function Photo() {
  const [image, setImage] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className={style.main}>
      <div className={style.nav}>
        <NavigationBar />
      </div>
      <div className={style.container}>
        <div className={style.imgContainer}>
          {image ? (
            <img className={style.image} src={image} alt="preview image" />
          ) : (
            <div className={style.uploadblock}>
              <label htmlFor="image">
                <img className={style.icon} src={Image} atl="icon" />
              </label>
              <input
                id="image"
                hidden
                type="file"
                onChange={onImageChange}
                className="filetype"
              />
              <label htmlFor="image">
                <h1>upload image here</h1>
              </label>
            </div>
          )}
        </div>
        <form className={style.form}>
          <label htmlFor="Name">Name </label>
          <input id="Name" placeholder="write name of your photo" />
          <label htmlFor="Discription">Discription</label>
          <textarea
            id="Discription"
            rows="3"
            cols="55"
            maxlength="150"
            placeholder="write something about your photo"
          />
          <button className={style.submit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Photo;
