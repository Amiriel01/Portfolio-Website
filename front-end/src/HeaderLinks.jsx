import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link as ScrollLink } from 'react-scroll';

export default function HeaderLinks() {
    return (
      <>
        <Row id='header-container'>
          <Row id='header-links-container'>
            <Col xl={2} lg={4} sm={6} id='header-link'>
              <ScrollLink to='home' smooth={true} duration={500}>
                Home
              </ScrollLink>
            </Col>
            <Col xl={2} lg={4} sm={6} id='header-link'>
              <ScrollLink to='projects' smooth={true} duration={500}>
                Projects
              </ScrollLink>
            </Col>
            <Col xl={2} lg={4} sm={6} id='header-link'>
              <ScrollLink to='about' smooth={true} duration={500}>
                About
              </ScrollLink>
            </Col>
            <Col xl={2} lg={4} sm={6} id='header-link'>
              <ScrollLink to='skills' smooth={true} duration={500}>
                Skills
              </ScrollLink>
            </Col>
            <Col xl={2} lg={4} sm={6} id='header-link'>
              <ScrollLink to='contact' smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </Col>
          </Row>
        </Row>
      </>
    );
  }
  