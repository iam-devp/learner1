import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><h1>Inventory</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
            <NavDropdown title="Sports" id="navbarScrollingDropdown"  style={{marginLeft:"60px"}}>
              <NavDropdown.Item href="#action3">Issue</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Return
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Report problem
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tech" id="navbarScrollingDropdown"  style={{marginLeft:"60px"}}>
              <NavDropdown.Item href="#action3">Issue</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Return
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Report problem
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Lab" id="navbarScrollingDropdown"  style={{marginLeft:"60px"}}>
              <NavDropdown.Item href="#action3">Issue</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Return
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Report problem
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Gym" id="navbarScrollingDropdown"  style={{marginLeft:"60px"}}>
              <NavDropdown.Item href="#action3">Issue</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Return
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Report problem
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Music" id="navbarScrollingDropdown"  style={{marginLeft:"60px"}}>
              <NavDropdown.Item href="#action3">Issue</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Return
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Report problem
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Auto" id="navbarScrollingDropdown"  style={{marginLeft:"60px"}}>
              <NavDropdown.Item href="#action3">Issue</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Return
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Report problem
              </NavDropdown.Item>
            </NavDropdown>
            
            
            <NavDropdown title="General" id="navbarScrollingDropdown"  style={{marginLeft:"60px"}}>
              <NavDropdown.Item href="#action3">Issue</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Return
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Report problem
              </NavDropdown.Item>
            </NavDropdown>
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;