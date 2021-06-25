import React from 'react'
import { Section, Container, Card, CardTop, CardImg, CardFirst, CardContent, KnowMore, Icon } from './InfoSectionElement';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Fade } from "react-awesome-reveal";

import { InfoDataOne, InfoDataTwo } from '../../data/InfoData'


const InfoSection = () => {
    return (
        <Section>
                <Row noGutters>
                    <Col xs={12} md={4} lg={4}>
                    <Fade delay={500}><Container>
                            <CardFirst>
                                    <CardImg />
                                    <p>Departments</p>
                            </CardFirst>
                        </Container></Fade>
                    </Col>
                    {InfoDataOne.map((data, index) => 
                        <Col xs={12} md={4} lg={4} key={index}>
                            <Fade><Container>
                                <Card>
                                    <CardTop>
                                        <CardImg src={data.img} alt={data.alt}/>
                                    </CardTop>                                
                                    <CardContent>
                                        <p>{data.content}</p>
                                        <KnowMore>
                                            <p>Find our more<Icon id="icon"></Icon></p>                                        
                                        </KnowMore>
                                    </CardContent>
                                    <p>{data.title}</p>
                                </Card>
                            </Container></Fade>
                        </Col>
                    )}                                       
                </Row>
                <Row noGutters>
                {InfoDataTwo.map((data, index) => 
                        <Col xs={12} md={4} lg={4} key={index}>
                            <Fade delay={200}><Container>
                                <Card>
                                    <CardTop>
                                        <CardImg src={data.img} alt={data.alt}/>
                                    </CardTop>                                
                                    <CardContent>
                                        <p>{data.content}</p>
                                        <KnowMore>
                                            <p>Find our more<Icon id="icon"></Icon></p>                                        
                                        </KnowMore>
                                    </CardContent>
                                    <p>{data.title}</p>
                                </Card>
                            </Container></Fade>
                        </Col>
                    )}
                </Row>
        </Section>
    )
}

export default InfoSection
