import { Container, Nav, Navbar } from 'react-bootstrap'
import "./Navbar.css"

const NavBar = () => {
    return (
        <Navbar className='navbar navbar-dark' expand="lg">
            <Container>
                <Navbar.Brand className='fw-bold fs-1 text-white' href="#home">Merka</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto gap-4">
                        <Nav.Link className='text-white nav-link' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-white nav-link' href="#projects">Projects</Nav.Link>
                        <Nav.Link className='text-white nav-link' href="#services">Service</Nav.Link>
                        <Nav.Link className='text-white nav-link' href="#blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>        </Navbar>
    )
}

export default NavBar