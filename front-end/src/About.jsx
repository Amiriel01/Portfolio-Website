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
                            Currently, I predominantly utilize the MERN (MongoDB, Express, React, and Node.js) stack for my projects. Nevertheless, I remain enthusiastic about mastering new languages and databases. For instance, I've recently incorporated TypeScript into my newer projects. Proficient in both creating and consuming RESTful APIs, I prioritize responsive design in all my projects, ensuring optimal viewing experiences across various devices, including computers, mobiles, and tablets. Additionally, projects that feature user logins have built-in authentication to safeguard sensitive information.
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