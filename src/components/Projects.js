import Card from 'react-bootstrap/Card';
import '../styles/projects.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

function Projects() {
    return (
        <Container>
            <Row>
                {/* <div className='cards-group'> */}
                <Col sm={4}>
                    <Card className="bg-dark text-white project-card">
                        <Card.Img src="holder.js/100px270" alt="Project image" />
                        <Card.ImgOverlay>
                            <Card.Title>E-commerce Website</Card.Title>
                            <Card.Text>
                                Make-Up Junkie is an e-commerce website of make-up products.
                            </Card.Text>
                            <Button variant="outline-primary">Primary</Button>{' '}
                            <Button variant="outline-primary">Primary</Button>{' '}
                        </Card.ImgOverlay>
                    </Card>
                </Col>

                {/* </div> */}
            </Row>
        </Container>
    )
}

export default Projects;