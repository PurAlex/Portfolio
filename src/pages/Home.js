import '../styles/home.css';

function Home() {
    return (
        <>
            <div className='main'>
                <img
                    className='main-img'
                    src={require('../images/me.jpg')}
                    alt='me'>
                </img>

                <div className='main-content'>
                    <h1 className='content-title'>Hey, I'm Nicky Alexander</h1>
                    <p>A front-end developer passionate about delivering the best
                        user experience.
                    </p>
                    <ul className='technologies-content'>
                        <li className='technology'>HTML</li>
                        <li className='technology'>CSS</li>
                        <li className='technology'>JavaScript</li>
                    </ul>
                    <button className='projects-button'>Projects</button>
                    <button className='resume-button'>Resume</button>

                </div>
            </div>
        </>
    )
}

export default Home;