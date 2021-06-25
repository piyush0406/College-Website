import styled from "styled-components";
import img from "../../images/backdrop.jpg"

import { CustomButtonOne } from "../Button/Button";

export const Section = styled.section`
    height: 50vh;
    width: 100vw;
    margin-top: 3rem;
`;

export const Container = styled.div`
    height: 50vh;
    width: 100vw;
    position:relative;
    background-image:
    linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.4)),
    url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

export const Buttons = styled.div`    
    position:absolute;
    text-align:center;
    top:40%;
    left: 50%;
    transform:translate(-50%);
`;

export const Button = styled(CustomButtonOne)`
    text-transform: uppercase;
    font-weight: 600;
    margin:1rem;
`;