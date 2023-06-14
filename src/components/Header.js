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
                    <Navbar.Toggle className='toggle-button' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
                        <Nav className="ms-auto">

                            <Nav.Link href="#home">About </Nav.Link>
                            <Nav.Link href="#link">Projects</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <ul className='navbar-links'>
                                <li>
                                    <a className='link' href='https://github.com/PurAlex'>
                                        <FaGithub />
                                    </a>
                                </li>
                                <li>
                                    <a className='link' href='https://www.linkedin.com/in/nicky-campoverde-1782a7228/'>
                                        <FaLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a className='link' href='mailto:nicky-nico-1998@outlook.com'>
                                        <FaEnvelope />
                                    </a>
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