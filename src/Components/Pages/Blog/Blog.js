import React ,{useRef ,useState,useEffect} from 'react'
import UncontrolledExample from '../../Carsousel/Carsousel'
import style from "./Blog.module.css"
import { gsap } from 'gsap'
import { useIntersection } from 'react-use'
import postservice from '../Photo/postservice'

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


const [posts, setPost] = useState([]);
console.log(posts)
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
       document.getElementById(id).parentElement.parentElement.remove()
   }else{
    alert(res.data.message)
   }
  }
//http://localhost:8000/api/postImages${post.image}



  return (
    <div className={style.main}>
      <UncontrolledExample />
      <div className={style.bg}></div>
      <div  id='header' ref={sectionRef} className={style.container}>
{posts.map((item)=>
<>
<img src={`http://localhost:8000/api/postImages/${item.image}`} />
<button id={item._id} onClick={(e)=>deletePost(item._id,e)}>Delete</button>
</>

)}
      </div>

    </div>
  )
}

export default Blog
