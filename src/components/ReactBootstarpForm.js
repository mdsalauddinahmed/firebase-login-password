import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/Firebase.init';

const auth = getAuth(app)

const ReactBootstarpForm = () => {
  const [passwordError,setPasswordError] =useState('');
  const [success,setSuccess] =useState('')
    const handleRegister =(e)=>{
    
        e.preventDefault();
         //console.log(e.target.email.value)
         setSuccess(false)
         const email = e.target.email.value;
         const password = e.target.password.value;
         if (!/(?=.*[A-Z].*[A-Z])/.test(password)){
          setPasswordError('please provide atleast two Uppercase')
          
         }
         if(password.length<6){
          setPasswordError('Please should be at leaet 6 characters')
        
         }
         if(!/(?=.*[!@#*&])/.test(password)){
          setPasswordError('Please add a speacial character')
          
         }
         setPasswordError('')
         console.log(email, password)
         createUserWithEmailAndPassword(auth, email, password)
         .then(result =>{
          const user = result.user;
          setSuccess(true)
          console.log(user)
          e.target.reset()
         })
         .catch(error => {
          
          setPasswordError(error.message)
         })

    }

    return (
         
        <div className='w-50 mx-auto mt-5'>
        <h2 className='text-primary'>Please Register !!!!!</h2>
            <Form  onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"name='email' placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required/>
      </Form.Group>
      <p className='text-danger'>{passwordError}</p>
       {success && <p className='text-success'>user created successfully</p>}
      
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
            
        </div>
    );
};

export default ReactBootstarpForm;