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

                <ul className='main-technologies'>
                    <h1 className='list-title'>Technologies Used</h1>
                    <li className='technology'>HTML</li>
                    <li className='technology'>CSS</li>
                    <li className='technology'>JavaScript</li>
                </ul>
            </div>
        </>
    )
}

export default Home;