import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <>
            <div id='about'>
                <Row id='about-section-container'>
                    <Row id='about-title-row'>
                        <Col className='component-title'>
                            About Me
                        </Col>
                    </Row>
                    <Row className='about-text-row'>
                        <Col className='about-text'>
                            Hello there! Allow me to share a bit more about myself.
                        </Col>
                    </Row>
                    <Row className='about-text-row'>
                        <Col className='about-text'>
                            For twelve years, I immersed myself in my education career until I stumbled upon the world of software engineering. A friend, who happened to be a software engineer, introduced me to a curriculum, believing I might enjoy delving into the realm of programming. He was right - from the moment I embarked on this learning journey, I was captivated. Continuously expanding my skill set, crafting meticulously designed projects, and realizing the vastness of knowledge awaiting exploration, I've embraced a mindset where learning knows no bounds.
                        </Col>
                    </Row>
                    <Row className='about-text-row'>
                        <Col className='about-text'>
                            I use a diverse range of technologies to craft solutions tailored to project requirements. I am passionate about continuous learning and adept at mastering new languages and databases as needed. My expertise extends to creating and consuming RESTful APIs, ensuring seamless integration between different components of the application. Moreover, I prioritize responsive design principles in all my projects, ensuring optimal user experiences across various devices, including computers, mobiles, and tablets. Projects featuring user logins are equipped with built-in authentication mechanisms to safeguard sensitive information and enhance security.
                        </Col>
                    </Row>
                    <Row className='about-text-row'>
                        <Col className='about-text'>
                            From conception to maintenance, I take pride in designing and developing websites, both for personal ventures and clients alike. If you have inquiries about my work, seek collaboration opportunities, or wish to discuss potential job prospects, please don't hesitate to reach out via the contact form below. Thank you for visiting my site, and I hope you have a fantastic day!
                        </Col>
                    </Row>
                </Row>
            </div>
        </>
    )
}