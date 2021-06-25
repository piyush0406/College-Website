import React, { useState, useRef } from 'react'
import { Section, Container, MainTilte, ColumnLeft, SectionTop, SectionBottom, ExpButton, ExpLink, ExpLinkIcon, ExpImg, ExpTitle, ExpContent, Button, SectionA, ArrowForward, ArrowRight } from './ExperienceSectionElements'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useIntersection from './useIntersection'
import VisibilitySensor from 'react-visibility-sensor';
import { Fade } from "react-awesome-reveal";

import { expData } from '../../data/ExpData';

import {FaUserGraduate} from 'react-icons/fa'
import { IoBasketballOutline } from 'react-icons/io5'
import { RiBuilding2Line } from 'react-icons/ri'
import { IoBrushOutline } from 'react-icons/io5'
import { RiReservedLine } from 'react-icons/ri'

const ExperienceSection = () => {

    const [hover, setHover] = useState(false);

    const [learning, setLearning] = useState(true)
    const [arts, setArts] = useState(false)
    const [athletics, setAthletics] = useState(false)
    const [campus, setCampus] = useState(false)
    const [research, setResearch] = useState(false)

    const onHover = () => {
        setHover(!hover);
    };

    const ref = useRef();
    const inViewport = useIntersection(ref); // Trigger as soon as the element becomes visible
    
    if (inViewport) {
        document.getElementById("leftContainer").style.opacity="1";        
    }
    else{
        if(document.getElementById("leftContainer"))
        document.getElementById("leftContainer").style.opacity="0";
    }

    return (
        <Section>
            <Fade delay={1000}><MainTilte>
                <p>Experience</p>
            </MainTilte></Fade>
            <Container>
                <Row noGutters>
                    <Col xs={12} md={3} lg={2}>
                        <ColumnLeft id="leftContainer">
                            <a href="#Learning"><ExpLink active={learning}>
                                <ExpLinkIcon>
                                    <FaUserGraduate />
                                </ExpLinkIcon>
                                    <p>Learning</p>
                            </ExpLink></a>
                            <a href="#Arts"><ExpLink active={arts}>
                                <ExpLinkIcon>
                                    <IoBrushOutline />
                                </ExpLinkIcon>
                                    <p>Arts</p>
                            </ExpLink></a>
                            <a href="#Athletics"><ExpLink active={athletics}>
                                <ExpLinkIcon>
                                    <IoBasketballOutline />
                                </ExpLinkIcon>
                                <p>Athletics</p>
                            </ExpLink></a>
                            <a href="#Campus"><ExpLink active={campus}>
                                <ExpLinkIcon>
                                    <RiBuilding2Line />
                                </ExpLinkIcon>
                                <p>Campus</p>
                            </ExpLink></a>
                            <a href="#Research"><ExpLink active={research}>
                                <ExpLinkIcon>
                                    <RiReservedLine />
                                </ExpLinkIcon>
                                <p>Research</p>
                            </ExpLink></a>
                        </ColumnLeft>
                    </Col>
                    <Col xs={12} md={9} lg={10} ref={ref}>
                        {/* <RightContainer id="rightContainer"> */}
                            {/* <ColumnRight> */}
                                {expData.map((data, index) => (
                                        <VisibilitySensor
                                        partialVisibility
                                        minTopValue='100'
                                        intervalCheck={true}
                                        intervalDelay={1}
                                        onChange={(isVisible) => {
                                        if(isVisible){
                                            if (data.title==="Learning"){
                                                setLearning(true)
                                                setArts(false)
                                                setAthletics(false)
                                                setCampus(false)
                                                setResearch(false)
                                            }else if (data.title==="Arts") {
                                                setArts(true)
                                                setLearning(false)
                                                setAthletics(false)
                                                setCampus(false)
                                                setResearch(false)
                                            }else if (data.title==="Athletics") {
                                                setAthletics(true)
                                                setLearning(false)
                                                setArts(false)
                                                setCampus(false)
                                                setResearch(false)
                                            }else if (data.title==="Campus") {
                                                setCampus(true)
                                                setLearning(false)
                                                setArts(false)
                                                setAthletics(false)
                                                setResearch(false)
                                            }else if (data.title==="Research") {
                                                setResearch(true)
                                                setLearning(false)
                                                setArts(false)
                                                setAthletics(false)
                                                setCampus(false)
                                            }
                                        }                                        
                                        }}
                                        >
                                    <SectionA key={index}>
                                        <SectionTop id={data.title} >                                 
                                            <Fade direction="right"><ExpImg src={data.img} alt={data.alt}/></Fade>
                                            <Fade><ExpTitle>
                                                <p>{data.title}</p>
                                            </ExpTitle></Fade>
                                        </SectionTop>
                                        <SectionBottom>
                                            <Row>
                                            <Fade delay={200}><ExpContent>
                                                <p>{data.content}</p>                                            
                                            </ExpContent></Fade>
                                            <Fade delay={500}><ExpButton>
                                                <Button primary="true" onMouseEnter={onHover} onMouseLeave={onHover}>                                                
                                                    Know More
                                                    {hover ? <ArrowForward /> : <ArrowRight />}
                                                </Button>
                                            </ExpButton></Fade>
                                            </Row>                                        
                                        </SectionBottom>
                                    </SectionA>
                                    </VisibilitySensor>
                                ))}                                                
                            {/* </ColumnRight> */}
                        {/* </RightContainer> */}
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default ExperienceSection
