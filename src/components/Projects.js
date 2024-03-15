// import Card from 'react-bootstrap/Card';
import '../styles/projects.css';
// import Button from 'react-bootstrap/Button';
import cardimage1 from '../images/cardsData-1.jpg';
import cardimage2 from '../images/cardsData-2.jpg';
import cardimage3 from '../images/cardsData-3.jpg';
import cardimage4 from '../images/cardsData-4.jpg';


function Projects() {
    return (
        <>
            <div>
                <h1 class="projects-header">Projects</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                <div class="col">
                    <div class="card text-bg-light">
                        <img src={cardimage1} class="card-img-top" alt="Make-up Junkie homepage image" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">E-commerce Website</h5>
                            <p class="card-text">
                                Make-Up Junkie is an e-commerce website of make-up products.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-bg-light">
                        <img src={cardimage4} class="card-img-top" alt="Quiz challenges homepage image" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Quiz Challenge</h5>
                            <p class="card-text">
                                Multiple choices and questions quiz.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-bg-light">
                        <img src={cardimage2} class="card-img-top" alt="Weather forecast homepage image" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Weather Forecast</h5>
                            <p class="card-text">
                                Check the forecast of any city in real time.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card text-bg-light">
                        <img src={cardimage3} class="card-img-top" alt="Team profile homepage image" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Team Profile</h5>
                            <p class="card-text">
                                Generate dynamically a team profile based on user input.
                            </p>
                        </div>
                    </div>
                </div>



            </div>



        </>


    )
}

export default Projects; 