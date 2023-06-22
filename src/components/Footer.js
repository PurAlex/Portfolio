import '../styles/footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer">
            <ul className='social-links'>
                <li>
                    <a className='footer-link' href='https://github.com/PurAlex'>
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a className='footer-link' href='https://www.linkedin.com/in/nicky-campoverde-1782a7228/'>
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a className='footer-link' href='mailto:nicky-nico-1998@outlook.com'>
                        <FaEnvelope />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;