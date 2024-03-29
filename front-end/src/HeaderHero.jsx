import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroImage from './images/heroimage.png';

export default function HeaderHero() {
    return (
        <>
            <div id='home'>
                <Row id='hero-section-container'>
                    <Col md={12} lg={2} id='hero-image-container'>
                        <img id='hero-image' src={HeroImage} alt='Decorative Image'></img>
                    </Col>
                    <Col md={12} lg={4} id='hero-text-container'>
                        <Col id='hero-title'>
                            Hello, I'm Sarah,
                        </Col>
                        <Col id='hero-title'>
                            A Full Stack Software Engineer.
                        </Col>
                        <Col id='hero-subtitle'>
                            Thank you for visiting my site today!
                        </Col>
                    </Col>
                </Row >
            </div>
        </>
    )
}