import React, { useState } from "react";
import NavigationBar from "../../NavigationBar/NavigationBar";
import style from "./Photo.module.css";
import Image from "../../../asset/upload.png";
import postservice from "./postservice";

function Photo() {
  const [image, setImage] = useState();
  const [title,setTitle] = useState("")
  const [discription,setDiscription] = useState("")
  const [date, setDate] = useState("")
  const [message,setMessage] = useState("")
  const [preview,setPreview] = useState(null)

function handleImage(e){
  setImage(e.target.files[0])
  if (e.target.files[0]) {
    setPreview(URL.createObjectURL(e.target.files[0]));
  }
}

async function handleSubmit(e){
  e.preventDefault()
  const formData= new FormData()
  formData.append("title",title)
  formData.append("date",date)
  formData.append("image",image)
  formData.append("discription",discription)
  const res=await postservice.create(formData)
  if(res.data.success==true){
      setMessage("Post created successfully")
      setPreview(null)
      setDate("")
      setDiscription("")
      setTitle("")
  }else{
      setMessage("Post Failed!")
  }
  setTimeout(function(){
      setMessage(" ")
  },2000)
  e.target.reset()

}




  return (
    <div className={style.main}>
      <div className={style.nav}>
        <NavigationBar />
      </div>
      <div className={style.container}>
        <div className={style.imgContainer}>
          {preview ? (
            <img className={style.image} src={preview} alt="preview image" />
          ) : (
            <div className={style.uploadblock}>
              <label htmlFor="image">
                <img className={style.icon} src={Image} atl="icon" />
              </label>
              <input
                id="image"
                hidden
                required
                type="file"
                name="image"
                onChange={handleImage}
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
          <input  required value={title} type="text" name="title" onChange={(e)=>setTitle(e.target.value)} id="Name" placeholder="write name of your photo" />
          <label htmlFor="Discription">Discription</label>
          <textarea
           value={discription} onChange={(e)=>setDiscription(e.target.value)}
            id="Discription"
            rows="3"
            cols="55"
            maxlength="150"
            placeholder="write something about your photo"
          />
         
         <input  required value={date} onChange={(e)=>setDate(e.target.value)} name="date" type="date" placeholder="date" />
         <h1>{message}</h1>
          <button onClick={handleSubmit}  className={style.submit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Photo;
