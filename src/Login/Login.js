import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./Login.module.css"
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState("")
   const navigate = useNavigate()

function NavigateToReg(){
    navigate("/Registration")
}
   async function submit(e){
        e.preventDefault()
        const obj={
            email,
            password,
        }
        try{
            const {data}= await axios.post("http://localhost:8080/api/login",obj)
            console.log(data)
            localStorage.setItem('user',JSON.stringify({...data.user,password:''}))
          alert(" login successsfully")
          setEmail(" ")
          setPassword("")
          navigate("/Home")
        }catch(err){
            alert("something went wrong")
            console.log("err")
        }
    }

  return (
    <>
    <div className={style.main}>
  
    <Form  className={style.form}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       

        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={submit} variant="primary" type="submit">
        Login
      </Button>
      <h6 onClick={NavigateToReg}>Registartion</h6>
    </Form>
    </div>
    </>
  );
}

export default Login;