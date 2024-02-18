import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState, FormEvent } from 'react';
import axios from 'axios';

export default function Contact() {

    const [newMessage, setNewMessage] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setNewMessage({
    //         ...newMessage,
    //         [name]: value
    //     })
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(newMessage);
    // };

    // async function handleSubmit(event) {
    //     event.preventDefault();

    //     const messageData = {
    //         name: newMessage.name,
    //         phone: newMessage.phone,
    //         email: newMessage.email,
    //         message: newMessage.message,
    //     };

    //     try {
    //         const response = await axios.post("http://localhost:3000/messages/messageDetails", messageData);
    //         console.log(response.status, response.data);

    //         if (response.status === 200) {
    //             console.log(response.data);
    //             setNewMessage(response.data)
    //             setNewMessage({
    //                 name: '',
    //                 phone: '',
    //                 email: '',
    //                 message: '',
    //             })
    //         }
    //     } catch (ex) {
    //         console.log(ex);
    //     }
    // };

    return (
        <>
            <div id='contact'>
                <Row id='contact-section-container'>
                    <Row id='about-title-row'>
                        <Col className='component-title'>
                            Contact Me
                        </Col>
                    </Row>
                    {/* <Form onSubmit={handleSubmit}> */}
                    <Form name='profile-website-contact-form' data-netlify="true" method="POST">
                        <Row className="mb-3" id='contact-info-container'>
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
                                        name='name'
                                        // value={newMessage.name}
                                        // onChange={handleChange}
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
                                        name='phone'
                                        // value={newMessage.phone}
                                        // onChange={handleChange}
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
                                        name='email'
                                        // value={newMessage.email}
                                        // onChange={handleChange}
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
                                    name='message'
                                    // value={newMessage.message}
                                    // onChange={handleChange}
                                    // maxLength={2000}
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