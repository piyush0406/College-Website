import React from 'react'
import { Section, Container,Box, BoxItem, BoxIcon, BoxTitle } from './SubHeroElements';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Fade } from "react-awesome-reveal";

import { IoSchoolOutline } from 'react-icons/io5'
import { IoFootballOutline } from 'react-icons/io5'
import { FaLaptopCode } from 'react-icons/fa'
import { BiGroup } from 'react-icons/bi'

const SubHero = () => {
    return (
        <Section>
            <Container>
                <Box>
                    <Row>
                        <Col xs={12} md={6} lg={3}>
                            <BoxItem>
                                <Fade><BoxIcon><IoSchoolOutline /></BoxIcon></Fade>
                                <BoxTitle>20,000+</BoxTitle>
                                <p>alumni wordwide</p>
                            </BoxItem>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <BoxItem>
                                <Fade delay={200}><BoxIcon><BiGroup /></BoxIcon></Fade>
                                <BoxTitle>20%</BoxTitle>
                                <p>of student body received<br />finacial aid in 2019-202</p>
                            </BoxItem>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <BoxItem>
                                <Fade delay={200}><BoxIcon><IoFootballOutline /></BoxIcon></Fade>
                                <BoxTitle>100+</BoxTitle>
                                <p>sports and activities</p>
                            </BoxItem>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <BoxItem>
                                <Fade delay={400}><BoxIcon><FaLaptopCode /></BoxIcon></Fade>
                                <BoxTitle>50+</BoxTitle>
                                <p>clubs and socities</p>
                            </BoxItem>
                        </Col>
                    </Row>                    
                </Box>
            </Container>
        </Section>
    )
}

export default SubHero
