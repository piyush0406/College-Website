import React from 'react'
import { Section, Container, Buttons, Button } from './BackdropElements'

const Backdrop = () => {
    return (
        <Section>
            <Container>
                <Buttons>
                    <Button primary="true">Student Admission</Button>
                    <Button primary="true">Let's Meet in person</Button>
                </Buttons>
            </Container>
        </Section>
    )
}

export default Backdrop
