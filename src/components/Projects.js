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
                        <Card className="bg-dark text-white project-card">
                            <Card.Img src={data.image} alt="Project image" />
                            <Card.ImgOverlay>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                    {data.description}
                                </Card.Text>
                                <Button variant="outline-primary">Primary</Button>{' '}
                                <Button variant="outline-primary">Primary</Button>{' '}
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Projects;