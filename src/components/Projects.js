import Card from 'react-bootstrap/Card';
import '../styles/projects.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { cardsData } from '../assets/cardsData';

function Projects() {
    return (
        <Container fluid>
            <div className='title-holder'>
                <h2>Projects</h2>
            </div>
            <Row>
                {cardsData.map((data) => (
                    <Col sm={4} md={6}>
                        <Card className="project-card">
                            <Card.Img src={data.image} alt="Project image" className='card-image' />
                            <div className='card-information'>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                    {data.description}
                                </Card.Text>
                                <Button className='card-button' variant="outline-primary">Repo</Button>{' '}
                                <Button className='card-button' variant="outline-primary">Website</Button>{' '}
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Projects;