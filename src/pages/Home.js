import '../styles/home.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <>
            <div id='about' className='main'>
                <img
                    className='main-img'
                    src={require('../images/me.jpg')}
                    alt='me'>
                </img>

                <div className='main-content'>
                    <h1 className='content-title'>Hey, I'm Nicky Alexander</h1>
                    <p className='content-text'>A front-end developer passionate about delivering the best
                        user experience.
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
                        <a className='resume-link' href='/CV.pdf'
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