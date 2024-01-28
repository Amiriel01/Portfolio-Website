import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function Contact() {
    return (
        <>
            <div id='contact'>
                <Row id='contact-section-container'>
                    <Row id='about-title-row'>
                        <Col className='component-title'>
                            Contact Me
                        </Col>
                    </Row>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Full Name*"
                                    className="mb-3 contact-form-text"
                                >
                                    <Form.Control
                                        className='contact-form-text'
                                        required
                                        type="text"
                                        placeholder="Full Name"
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Phone Number"
                                    className="mb-3 contact-form-text"
                                >
                                    <Form.Control
                                        className='contact-form-text'
                                        type="text"
                                        placeholder="Phone Number"
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Email*"
                                    className="mb-3 contact-form-text"
                                >
                                    <Form.Control
                                        className='contact-form-text'
                                        required
                                        type="email"
                                        placeholder="Email"
                                    />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Form.Group as={Col}>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Message*"
                                className="mb-3 contact-form-text"
                            >
                                <Form.Control
                                    className='contact-form-text'
                                    required
                                    as="textarea"
                                    rows={6}
                                    style={{ height: 'unset' }}
                                    placeholder="Message" 
                                    />
                            </FloatingLabel>
                        </Form.Group>
                        <button id='contact-button' type="submit">
                            Submit
                        </button>
                    </Form>
                </Row>
            </div>
        </>
    )
}