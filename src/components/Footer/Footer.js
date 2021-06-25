import React from 'react'
import {Container, Wrapper, Row, Column, Title, Link, Facebook, Twitter, Youtube} from './FooterElements'

const Footer = () => {
    return (
        <Container>
        <Wrapper>
        <Row>
            <Column>
            <Title>About Us</Title> 
                <Link href="#">Vision</Link>
                <Link href="#">Mission</Link>
                <Link href="#">History</Link>
            </Column>
            <Column>
            <Title>People</Title>
                <Link href="#">Alumini</Link>
                <Link href="#">Alumini Survey</Link>
                <Link href="#">Women Cell</Link>
            </Column>
            <Column>
            <Title>Contact Us</Title>
                <Link href="#">Noida</Link>
                <Link href="#">Locate US</Link>
                <Link href="#">Support</Link>
            </Column>
            <Column>
            <Title>Social</Title>
                <Link href="#"><Facebook></Facebook>Facebook</Link>
                <Link href="#"><Youtube></Youtube>Youtube</Link>
                <Link href="#"><Twitter></Twitter>Twitter</Link>
            </Column>
        </Row>
        </Wrapper>
    </Container>
    )
}

export default Footer
