import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import projectsArray from "./ProjectsArray";

export default function Projects() {

    return (
        <>
            <div id='projects'>
                <Row id='project-section-container'>
                    <Row id='about-title-row'>
                        <Col className='component-title'>
                            Recent Projects
                        </Col>
                    </Row>
                    <div id='project-cards-container'>
                        {projectsArray.map((projectDetails) => {
                            return <div key={projectDetails.index}>
                                <Card className='project-card'>
                                    <Card.Img variant="top" src={projectDetails.src} alt={projectDetails.alt} />
                                    <Card.Body>
                                        <Card.Title className='project-card-title'>
                                            {projectDetails.name}
                                        </Card.Title>
                                        <Card.Text id='project-description1'>
                                            {projectDetails.description1}
                                        </Card.Text>
                                        <Card.Text>
                                            {projectDetails.description2}
                                        </Card.Text>
                                        <Card.Text id='project-spin-up'>
                                            Please allow time for the website to spin up. Thank you!
                                        </Card.Text>
                                        <Card.Text id='project-credentials'>
                                            {projectDetails.credentials}
                                        </Card.Text>
                                        <div id='skills-container'>
                                            {projectDetails.tech.map((techDetails) => {
                                                return <div key={techDetails.index} className='skill-container'>
                                                    <Card.Img src={techDetails.src} alt={techDetails.alt} className='tech-image' />
                                                    <Card.Text>
                                                        {techDetails.title}
                                                    </Card.Text>
                                                </div>
                                            })}
                                        </div>
                                        <div className='project-card-links-container'>
                                            <Card.Link target='_blank' href={projectDetails.live_link} className='project-card-link'>Website Link</Card.Link>
                                            <Card.Link target='_blank' href={projectDetails.repo_link} className='project-card-link '>Github Link</Card.Link>
                                            {/* <Card.Link target='_blank' href={projectDetails.repo_link2} className='project-card-link '>Github Link (API)</Card.Link> */}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        })}
                    </div>
                </Row>
            </div>
        </>
    )
}