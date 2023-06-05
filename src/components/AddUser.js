import React, { useContext, useId, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { AppContext, AppState } from "../App";


function AddUserDetails({userDetail,children}) {

  const {person,SetPerson} = AppState();

 const [name,setName]= useState("");
 const [id,setId]= useState();
 const [email,setEmail]= useState("");
 const [gender,setGender]= useState("");
 const [phone,setPhone]= useState();
 const [qualification,setQualification]= useState("");

 const history = useHistory();

 
 const addNew = () =>{
    const newUser = {
        name,
        id,
        email,
        gender,
        phone,
        qualification
    }
    console.log(newUser);
    SetPerson([...person,newUser]);
    history.push("/")
 }

  return (
    <Form>
       
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id</Form.Label>
        <Form.Control type="number" value={id} onChange={(e)=> setId(e.target.value)} placeholder="Enter id" />
        
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" value={gender} onChange={(e)=> setGender(e.target.value)} placeholder="Enter gender" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="number" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="Enter mobile number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="text" value={qualification} onChange={(e)=> setQualification(e.target.value)} placeholder="Enter qualification" />
      </Form.Group>

      <Button onClick={(e)=>{
            e.preventDefault();
            {addNew()}
      }} variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  );
}

export default AddUserDetails;