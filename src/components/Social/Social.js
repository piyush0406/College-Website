import React from 'react'
import { Section, Container, LeftContainer, RightContainer, Header, SocialIcons, Facebook, Twitter, Youtube, Hashtags, Tag } from './SocialElements'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Fade } from "react-awesome-reveal";

const Social = () => {
    return (
        <Section>
            <Container>
                <Row>
                    <Col xs={12} md={4} lg={4}>
                        <Fade delay={100} direction="left"><LeftContainer>
                            <Header>
                                <p>We are socially Vibrant.</p>
                                <span>Join Us!</span>                                
                            </Header>
                            <SocialIcons>                            
                                <span><Facebook></Facebook></span>
                                <span><Twitter></Twitter></span>
                                <span><Youtube></Youtube></span>
                            </SocialIcons>
                        </LeftContainer></Fade>
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <Fade direction="right">
                            <RightContainer>
                                    <Hashtags>
                                        <Tag>#values</Tag>
                                        <Tag>#ourpeople</Tag>
                                        <Tag>#life</Tag>
                                        <Tag>#study</Tag>
                                    </Hashtags>
                            </RightContainer>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Social
