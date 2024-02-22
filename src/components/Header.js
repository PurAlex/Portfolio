import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/header.css';

function Header() {
    return (
        <>
            <Navbar className='navbar' expand="lg">
                <Container>
                    <Navbar.Brand className='navbar-brand'>Nicky Alexander</Navbar.Brand>
                    <Navbar.Toggle className='toggle-button' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
                        <Nav className="ms-auto">

                            <Nav.Link className='navbar-link' href="#about">About </Nav.Link>
                            <Nav.Link className='navbar-link' href="#projects">Projects</Nav.Link>
                            <Nav.Link className='navbar-link' href="#contact">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;