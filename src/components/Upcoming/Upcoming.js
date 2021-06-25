import React from 'react'
import { Section, Container, MainTilte, ColumnLeft, ColumnRight, Cards, Card, CardTop, CardDate, CardImg, CardTitle, CardContent, Button } from './UpcomingElements'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Fade, Slide } from "react-awesome-reveal";

import { upcomingData } from '../../data/UpcomingData';

export const Upcoming = () => {

    const onWheel = e => {
        e.preventDefault();
        const container = document.getElementById("container");
        const containerScrollPosition = document.getElementById("container").scrollLeft;
        container.scrollTo({
          top: 0,
          left: containerScrollPosition + e.deltaY*10,
          behaviour: "smooth"
        });
      };
    
    return (
        <Section>
            <Fade cascade delay={100}><MainTilte>
                <p>Upcoming Events</p>
            </MainTilte></Fade>
            <Container>
                <Row noGutter>
                    <Col xs={12} md={6} lg={3}>
                        <Fade delay={500}><ColumnLeft>
                            <p>Stay up to date with<br />college's agenda.</p>
                            <Fade delay={500}><Button to="" primary="true">View All</Button></Fade>
                        </ColumnLeft></Fade>
                    </Col>                
                    <Col xs={12} md={6} lg={9}>
                        <Slide><ColumnRight onWheel={onWheel} id="container">
                                <Cards>
                                    {upcomingData.map((data, index) => (
                                        <Card key={index}>
                                        <CardTop>
                                            <CardImg src={data.img}/>
                                            <CardDate>
                                                <p>{data.date}</p>
                                            </CardDate>
                                        </CardTop> 
                                        <CardTitle>
                                            <p>{data.by}</p>
                                        </CardTitle>
                                        <CardContent>
                                            {data.title}
                                        </CardContent>
                                    </Card>

                                    ))}                     
                                </Cards>
                        </ColumnRight></Slide>
                    </Col>                
                </Row>
            </Container>
        </Section>
    )
}

export default Upcoming