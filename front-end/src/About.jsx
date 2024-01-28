import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <>
            <div id='about'>
                <Row id='about-section-container'>
                    <Row id='about-title-row'>
                        <Col id='about-title'>
                            About Me
                        </Col>
                    </Row>
                    <Row id='about-text-row'>
                        <Col id='about-text'>

                        </Col>
                    </Row>
                </Row>
            </div>
        </>
    )
}