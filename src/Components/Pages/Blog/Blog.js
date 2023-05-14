import React ,{useRef ,useState,useEffect} from 'react'
import UncontrolledExample from '../../Carsousel/Carsousel'
import Style from "./Blog.module.css"
import { gsap } from 'gsap'
import { useIntersection } from 'react-use'
import postservice from '../Photo/postservice'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';




function Blog() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100vw",
    height:"100vh",
    p: 4,
  };
  const [posts, setPost] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [preview,setPreview] = useState([])
  console.log(preview)
  const handleOpen = (id) => {
    setOpen(true);
   let newpreview=posts.filter((item)=> item._id === id) 
   setPreview(newpreview)
  }
  const handleClose = () => setOpen(false);
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


  const fetchPosts = async () => {
    let x=await postservice.getPosts()
    setPost(x.data.data);
  };
  useEffect(() => {
    fetchPosts();
  }, [posts]);

  const deletePost=async(id,e)=>{
   var res=await postservice.deletePosts(id)
   if(res.data.success==true){
       alert(res.data.message)
       setOpen(false)
       document.getElementById(id).parentElement.parentElement.remove()
   }else{
    alert(res.data.message)
   }
  }


  return (
    <div className={style.main}>
      <UncontrolledExample />
      <div className={style.bg}></div>
      <div  id='header' ref={sectionRef} className={style.container}>
{posts.map((item)=>
<>

 <div style={{display:"inline-table",marginTop:"70px"}}>
 <div>
      <Button onClick={(e)=>handleOpen(item._id,e)} id={item._id}><img className={Style.img} src={`http://localhost:8080/api/postImages/${item.image}`} /></Button>
  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className={Style.buttons}>
            <button  id={item._id} onClick={(e)=>deletePost(item._id,e)}>Delete</button>
          <button onClick={handleClose}>X</button>
            </div>
          
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
          <div className={Style.box}>
            {preview.map((elem)=>
            <>
             <img className={Style.img2} src={`http://localhost:8080/api/postImages/${elem.image}`} />
             </>
            )}
         </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  </div>


</>

)}
      </div>

    </div>
  )
}

export default Blog
