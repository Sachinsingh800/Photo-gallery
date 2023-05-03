import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./Contact.module.css"
import NavigationBar from '../../NavigationBar/NavigationBar';


function Contact() {
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")


    function submit(e){
        e.preventDefault()
        const obj={
            email,
            password,
        }
        }

  return (
    <div className={style.main}>
    <div className={style.navBar}>
    <NavigationBar/>
    </div>
   <h1>contact us</h1>
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

  )
}

export default Contact
