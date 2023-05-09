import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/header.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Header() {
    return (
        <>
            <Navbar className='navbar' expand="lg">
                <Container>
                    <Navbar.Brand className='navbar-brand' href="#home">Nicky Alexander</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
                        <Nav className="ms-auto">

                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Projects</Nav.Link>
                            <ul className='navbar-links'>
                                <li>
                                    <FaGithub />
                                </li>
                                <li>
                                    <FaLinkedin />
                                </li>
                                <li>
                                    <FaEnvelope />
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;