
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Row, Col, Card, Image } from 'react-bootstrap';
import './App.css';
import image1 from './images/profile.jpg';
import stack1 from './images/bootstrap.png';
import stack2 from './images/html5.png';
import stack3 from './images/css.png';
import stack4 from './images/js.png';
import stack5 from './images/react.png';
import stack6 from './images/php.png';

function App() {

  return (
    <div className="App">
        <nav className="navbar fixed-top navbar-expand-lg shadow py-3 border-bottom border-white">
        <div className="container-fluid">
            <strong className="text-light rounded-circle"><i className="fs-3 ms-3">J</i></strong>
            <a className="navbar-brand ms-2" href="/">Julious Pestejo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-list fs-4 "></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto gap-4">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current='page' href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

        <Container className="content" id='content'>
            <section id='home' className='border-bottom border-light'>
                <Row lg={2} xs={1} className="section mt-lg-5">
                    <Col className='order-2 order-lg-1 d-flex align-items-center'>
                        <Card className='zero border-0 bg-transparent'>
                            <Card.Body className='mt-lg-5'>
                                    <div className='mt-lg-5'>
                                        <Card.Title className='fs-1 fw-bold text-center text-light text-lg-start'>Hi,</Card.Title>
                                        <Card.Title className='fs-1 fw-bold text-center text-light text-lg-start'>I'm Julious Pestejo</Card.Title>
                                        <Card.Text className='text-justify text-light py-lg-5 fs-4'>
                                        IT Gradute at Central Philippines State University, ready to enhance my skills and knowledge to programming and face tech reality.
                                        </Card.Text>
                                        <Row className='d-flex justify-content-center'>
                                            <Col><Nav.Link className='m-auto m-lg-1 text-center border  w-75 text-primary btn-nav py-2' href="#contact">Contact Me</Nav.Link></Col>
                                            <Col><Nav.Link className='m-auto m-lg-1 text-center border  w-75 text-primary btn-nav py-2' href="#services">Services</Nav.Link></Col>
                                        </Row>
                                    </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='order-1 order-lg-2'>
                        <Card className='bg-transparent border-0'>
                            <Image src={image1} alt='Image 1' fluid className='m-auto w-75 bg-shadow' />
                        </Card>
                    </Col>
                </Row>
            </section>

            <section id="about">
                <p className='fs-1 fw-bold text-light text-center'>About Me</p>
            <Row lg={2} xs={1} id="about">
            <Col>
                <Card className="radius-0 bg-transparent text-light border-0">
                <Card.Body>
                <Card.Title className='poppins-bold text-center text-light text-lg-start'>Dive to my details</Card.Title>
                <Card.Text className='p-lg-3 text-justify'>
                    <p>
                    Hello! I'm Julious Pestejo, an IT graduate from Central Philippines State University (CPSU), Class of 2023-2024. Born on October 20, 1997, I live in Purok Bantolinawon, Brgy Camingawan, Kabankalan City.
                    </p>
                    <p>
                        My passion for technology drives me to explore and innovate within the IT field. Outside of tech, I enjoy listening to music, playing basketball, and cycling.
                    </p>
                    <p>
                        With great ambitions and a dedication to continuous learning, I aim to make a meaningful impact in the tech industry.
                    </p>
                    <p>
                        Thank you for visiting my portfolio. I look forward to connecting and exploring new opportunities.
                    </p>
                <Row lg={2} xs={2}>
                    <Col className="m-auto">
                        <p>
                        <i class="bi bi-geo-alt text-danger"></i> Kabankalan City
                        </p>
                    </Col>
                    <Col className="m-auto">
                        <p>
                        <i class="bi bi-cake text-info"></i> October 20, 1997
                        </p>
                    </Col>
                    <Col className="m-auto">
                        <p>
                        <i class="bi bi-telephone text-primary"></i> +639518749668
                        </p>
                    </Col>
                    <Col className="m-auto">
                        <p>
                        <i class="bi bi-buildings text-success"></i> <a href="https://www.cpsu.edu.ph/" target="_blank" rel="noreferrer" className="text-primary text-decoration-none">CPSU Main Campus</a>
                        </p>
                    </Col>
                </Row>
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="radius-0 border-0 bg-transparent">
                <Card.Body>
                    <Card.Title className='poppins-bold text-center text-light text-lg-start'>Technology Stack</Card.Title>
                    <Card.Text className='p-lg-4 text-justify'>
                        <Row lg={3} xs={3} className='g-3'>
                            <Col>
                                <Card>
                                    <div className='overflow-hidden'>
                                        <Image src={stack1} className='scale-up' fluid alt='Bootstrap' />
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <div className='overflow-hidden'>
                                        <Image src={stack2} className='scale-up' fluid alt='HTML5' />
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <div className='overflow-hidden'>
                                        <Image src={stack3} className='scale-up' fluid alt='CSS' />
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <div className='overflow-hidden'>
                                        <Image src={stack4} className='scale-up' fluid alt='CSS' />
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <div className='overflow-hidden'>
                                        <Image src={stack5} className='scale-up' fluid alt='JS' />
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <div className='overflow-hidden'>
                                        <Image src={stack6} className='scale-up' fluid alt='React' />
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            </section>

            <section id="services">
            <Row id="projects" className="section">
            <Col className='mt-5 mt-lg-1'>
                <Card className="shadow border-0">
                <Card.Body>
                    <Card.Title className='fs-1 fw-bold text-center text-light text-lg-start'>Project</Card.Title>
                    <Card.Text>
                        <Row lg={2} xs={1}>
                            <Col className='m-auto'>
                                <Card className='border-0 project m-auto'>
                                    <Card.Body className=' overlay-hidden'>
                                        {/* <Image src={} fluid alt='Project' className='scale-up' /> */}
                                    </Card.Body>
                                    <a href='https://github.com/pestijojulious?tab=repositories' target='_blank' rel='noreferrer' className='btn btn-outline-primary border-primary rounded-pill text-decoration-none'>repo</a>
                                </Card>
                            </Col>
                            <Col className='m-auto'>
                                <Card className='border-0 project m-auto'>
                                    <Card.Body>
                                        <Card.Title className='text-center text-lg-start'></Card.Title>
                                        <Card.Text className='text-justify'>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            </section>
            <section id="experience">
            <Row id="experience" className="section">
            <Col>
                <Card className="radius-0">
                <Card.Body>
                    <Card.Title className='fs-1 fw-bold text-center text-light text-lg-start'>Experience</Card.Title>
                    <Card.Text className='text-justify'>
                        
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            </section>

            <section id="contact">
            <Row id="contact" className="section h-25">
            <Col>
                <Card className="border-0 shadow">
                <Card.Body>
                    <Card.Title className='fs-1 fw-bold text-center text-light text-lg-start'>Contact Me</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col className='m-auto text-center'>
                            <p>Facebook: <a href='https://web.facebook.com/julious.pestejo.1' rel='noreferrer' className='text-primary' target='_blank'>Facebook</a></p>
                            <p>Github: <a href='https://github.com/pestijojulious?tab=repositories' rel='noreferrer' className='text-primary' target='_blank'>pestijojulious</a></p>
                            </Col>
                            <Col className='m-auto text-center'>
                            <p>Email: <a href="https://mail.google.com/mail/u/0/#inbox?compose=" rel='noreferrer' className='text-primary' target='_blank'>juliouspestejo16@gmail.com</a></p>
                            <p>Mobile No.: <code className='text-primary fs-6'>+639518749668</code></p>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            </section>
        </Container>
    </div>
  );
}

export default App;
