import React from 'react';
import { Navbar,Nav,NavDropdown,Container,Button} from 'react-bootstrap';
import {NavLink , Link} from 'react-router-dom';

/**
* @author
* @function 
**/

const Header = (props) => {
  return(
    <div>
        <Navbar bg="light" expand="lg"> 
            <Container>
                {/* <Navbar.Brand href="home">Admin Dashboard</Navbar.Brand> */}
                <Link to="/" className="navbar-brand">Admin Dashboard</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="link">Link</Nav.Link> 
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <li className="nav-item">
                            <NavLink to="signin" className="nav-link">
                                <Button variant="primary">Signin</Button>{' '}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="signup" className="nav-link">
                                <Button variant="success">Signup</Button>{' '}
                            </NavLink>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
   )

 }

export default Header;