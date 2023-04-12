import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (
    // style={{backgroundColor: "#651FFF"}}
    <Navbar bg="info" expand="sm" className="d-flex justify-content-between" >  
      <Navbar.Brand as={Link} to="/" className="text-light mr-30"><h1>
        Dropbox
        </h1>
      </Navbar.Brand>
      <Nav>
       
        <Nav.Link as={Link} to="/user" className="text-light "><h4>
          Profile  
          </h4>
        </Nav.Link>
      
      </Nav>
    </Navbar>
  )
}
