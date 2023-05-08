import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./Registartion.module.css"
import NavigationBar from '../Components/NavigationBar/NavigationBar';

function Registration() {
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(null)


    function submit(e){
        e.preventDefault()
        const obj={
            email,
            password,
        }
    axios.post("http://localhost:9002/register",obj)
    .then((res)=>console.log(res))
    alert("successsfully")
    setEmail(" ")
    setPassword(" ")
    }

  return (
    <>
    <div className={style.main}>
        <div className={style.navBar}>
        <NavigationBar/>
        </div>
   
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={submit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
}

export default Registration;