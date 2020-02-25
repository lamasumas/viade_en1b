import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BsPerson, BsArrowBarUp, BsMap } from "react-icons/bs";
import { withRouter } from 'react-router-dom'
import "./NavBar.css";

let MyNavBar = React.memo(props => {

  const links = [
    { id: 0, text: 'My routes', href: '/routes', icon: <BsMap className="icon"></BsMap> },
    { id: 1, text: 'Upload route', href: '/routes/upload', icon: <BsArrowBarUp className="icon"></BsArrowBarUp> }
  ]

  const dropDownElements = [
    { id: 0, text: 'My Profile', href: '/profile' },
    { id: 1, text: 'Log Out', href: '/logout' },

  ]

  const getNavLinkClass = path => {
    return props.location.pathname === path ? 'nav-link active' : 'nav-link'
  }



  return (
    <Navbar className="bg-light" fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="/dashboard">{props.brandName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="justify-content-end" activeKey="/home">
          {links.map(link => {
            return (<span  id={link.id}>
              <Nav.Link className={getNavLinkClass(link.href)} href={link.href}>
                {link.icon}
                {link.text}
              </Nav.Link>
            </span>
            )
          })}

          <NavDropdown variant="secondary" drop="left" title={<BsPerson className="icon"></BsPerson>}>
            {dropDownElements.map(element => {
              return (<NavDropdown.Item href={element.href} id={element.id}>{element.text}</NavDropdown.Item>)
            })}

          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});
MyNavBar = withRouter(MyNavBar)
export default MyNavBar;