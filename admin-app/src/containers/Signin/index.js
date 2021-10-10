import React, { useState } from 'react';
import Layout from '../../components/Layout';
import {Form,Button,Container,Row,Col} from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { login } from '../../actions/auth.actions';
import { useDispatch } from 'react-redux';
/**
* @author
* @function Signin
**/

const Signin = (props) => { 

  // Hooks
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

  const dispatch= useDispatch();

  const userLogin = (event) => {
    // Generally, when hit "submit" button in a form, it reloads the page. The below line avoids that
    event.preventDefault();
    const user = {
      email,password
    }
    dispatch(login(user));          // updating the state
  }

  return(
    <div>
      <Layout>
        <Container style={{margin:"3rem"}}>
          <Row style={{marginTop: "50px"}}>
            <Col md={{span:6, offset: 3}}>
            <Form onSubmit= {userLogin}>
              <Input
                label= "Email address"
                type= "email"
                placeholder= "Enter email"
                value= {email}
                errorMessage= "We'll never share your email with anyone else."
                onChange= { (event)=>setEmail(event.target.value) }
              />

              <Input
                label= "Password"
                type= "password"
                placeholder= "Enter password"
                value= {password}
                onChange= { (event)=>setPassword(event.target.value) }
              />
              
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </Col>
          </Row>
          
        </Container>
      </Layout>
    </div>
   )

 }

export default Signin;