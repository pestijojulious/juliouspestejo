
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
            <Col className='m-auto'>
                <Card className="radius-0 bg-transparent text-light text-justify border-0">
                    I'm a passionate Information Technology professional recently graduated from Central Philippines State University. With a strong foundation in PHP, JavaScript, HTML, CSS, Bootstrap, and React, I am dedicated to creating innovative and user-friendly web applications. My journey in IT has equipped me with problem-solving skills and a keen eye for detail, ensuring robust and efficient solutions. Beyond coding, I enjoy staying updated with the latest tech trends and exploring new ways to enhance user experiences. Let's connect and build something great together!
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
                                    <Image src={stack1} fluid alt='Bootstrap' />
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Image src={stack2} fluid alt='HTML5' />
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Image src={stack3} fluid alt='CSS' />
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Image src={stack4} fluid alt='CSS' />
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Image src={stack5} fluid alt='JS' />
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Image src={stack6} fluid alt='React' />
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
