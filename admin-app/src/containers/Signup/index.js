import React from 'react';
import Layout from '../../components/Layout';
import {Form,Button,Container,Row,Col} from 'react-bootstrap';
import Input from '../../components/UI/Input';

/**
* @author
* @function Signup
**/

const Signup = (props) => {
  return(
    <div>
      <Layout>
        <Container style={{margin:"3rem"}}>
          <Row style={{marginTop: "50px"}}>
            <Col md={{span:6, offset: 3}}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label= "First Name"
                    type= "text"
                    placeholder= "First name"
                    value= ""
                    onChange= {()=>{

                    }}
                  />
                </Col>

                <Col md={6}>
                  <Input
                    label= "Last Name"
                    type= "text"
                    placeholder= "Last name"
                    value= ""
                    onChange= {()=>{

                    }}
                  />
                </Col>
              </Row>

              <Input
                label= "Email address"
                type= "email"
                placeholder= "Enter email"
                value= ""
                errorMessage= "We'll never share your email with anyone else."
                onChange= {()=>{

                }}
              />

              <Input
                label= "Password"
                type= "password"
                placeholder= "Enter password"
                value= ""
                onChange= {()=>{

                }}
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

export default Signup;

