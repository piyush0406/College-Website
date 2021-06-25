import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { CgLoadbarSound as Bars } from "react-icons/cg";


export const Nav = styled.nav`
    height: 80px;
    display:flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index:100;
    font-weight: 600;
    position:fixed;
    width:100vw;
    -webkit-transition-property: all;
    -webkit-transition-duration: 1s;
    -webkit-transition-timing-function: ease;
    text-transform: uppercase;
`;

export const NavLink = css`
    color: #fff;
    display: flex;
    align-items:center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration:none;
`;

export const Logo = styled(Link)`
    ${NavLink}
`;

export const MenuBars = styled(Bars)`
    display:none;

    @media screen and (max-width: 768px){
        display: block;
        font-size: 2.8rem;
        color: white;
        font-weight: 100;
        position: absolute;
        transform: scaleX(-1);
        transform: rotate(-90deg);        
        top: 5px;
        right: 10px;        
    }

`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavMenuLinks = styled(Link)`
    ${NavLink}   
`;

export const NavBtn = styled.div`
    display:flex;
    align-items:center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;