import '../styles/home.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <>
            <div id='about' className='main'>
                <img
                    className='main-img'
                    src={require('../images/me2.jpg')}
                    alt='me'>
                </img>

                <div className='main-content'>
                    <h1 className='content-title'>HEY THERE I'M</h1>
                    <h2 className='content-name'><span class="name-one">Nicky</span> Alexander</h2>
                    <p className='content-text'> A <span class="name-two">Front-End Developer</span> passionate about
                        creating responsives websites.

                    </p>
                    <ul className='technologies-content'>
                        <li className='technology'>
                            <FaHtml5 />
                        </li>
                        <li className='technology'>
                            <FaCss3Alt />
                        </li>
                        <li className='technology'>
                            <FaBootstrap />
                        </li>
                        <li className='technology'>
                            <FaJsSquare />
                        </li>
                    </ul>

                    <Button className='resume-button' variant="outline-primary">
                        <a className='resume-link' href='/CV (Nicky).pdf'
                            download
                        >
                            Resume
                        </a>
                    </Button>{' '}

                </div>
            </div>
        </>
    )
}

export default Home;