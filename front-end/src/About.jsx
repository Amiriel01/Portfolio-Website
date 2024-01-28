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
                            Hello again, I’d like to tell you a little more about me.
                        </Col>
                    </Row>
                    <Row className='about-text-row'>
                        <Col className='about-text'>
                            Originally an educator, I found software engineering by chance. A friend of mine, another software engineer, gave me a curriculum to try because he thought I’d enjoy learning the trade. He was right, within days of starting my learning journey I was hooked.
                        </Col>
                    </Row>
                    <Row className='about-text-row'>
                        <Col className='about-text'>
                            I currently use the MERN (MongoDB, Express, React, and Node.js) stack for my projects, but I am open to learning new languages and databases. I have also started using TypeScript in my newer websites. I have experience creating and using Rest APIs too. I also use responsive design in all my projects, the websites I create look great on computers, mobile devices, and tablets.
                        </Col>
                    </Row>
                    <Row className='about-text-row'>
                        <Col className='about-text'>
                            I have designed, created, and maintained websites for myself and my clients. Please fill out the contact form below if you have questions about my work, would like to collaborate on a project, or have a job opportunity that I would be a great fit for. Thanks again for visiting my site, have a great day!
                        </Col>
                    </Row>
                </Row>
            </div>
        </>
    )
}