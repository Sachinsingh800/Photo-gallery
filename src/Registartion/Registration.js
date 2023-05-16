import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./Registartion.module.css"
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import { useNavigate } from 'react-router-dom';
import {
  isValidEmailSyntax,
  isValidMobile,
  isOnlyLetters,
  isValidString,
  isValidPassword,
} from '../Regex';

function Registration() {
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(null)
    const [name, setName] = useState("")
const navigate = useNavigate()

    function NavigateToLogin(){
      navigate("/")
  }

    function submit(e){
      e.preventDefault();
      if (!isValidEmailSyntax(email)) {
        alert('Give correct email');
        return;
      }
      if (!isValidPassword(password)) {
        alert('add strong Password !!');
        return;
      }
        const obj={
            name,
            email,
            password,
        }
    axios.post("http://localhost:8080/api/register",obj)
    .then((res)=>console.log(res))
    alert("successsfully")
    setEmail(" ")
    setPassword(" ")
    setName(" ")
    navigate("/Home")
    }

  return (
    <>
    <div className={style.main}>
      
    <Form  className={style.form}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} value={name} type="name" placeholder="Enter name" />
         <br/>
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
        Submit
      </Button>
      <br/>
      <h6 onClick={NavigateToLogin}>Login</h6>
    </Form>
    </div>
    </>
  );
}

export default Registration;