import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HeaderLinks() {
    return (
        <>
            <Row id='header-container'>
                <Row id='header-links-container'>
                    <Col xl={2} lg={4} sm={6} id='header-link'>Home</Col>
                    <Col xl={2} lg={4} sm={6} id='header-link'>About</Col>
                    <Col xl={2} lg={4} sm={6} id='header-link'>Projects</Col>
                    <Col xl={2} lg={4} sm={6} id='header-link'>Skills</Col>
                    <Col xl={2} lg={4} sm={6} id='header-link'>Contact</Col>
                </Row>
            </Row>
        </>
    )
}