import React, { useEffect, useState } from 'react'
import { menuData } from '../../data/MenuData';
import { CustomButton } from '../Button/Button';
import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn } from './NavbarElements'

const Navbar = ({toggle}) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    if(scrollPosition){
        if(scrollPosition>=500){
            document.getElementById("navbar").style.background="#b61c21"
        } else{
            document.getElementById("navbar").style.background="transparent"
        }
    }
    
    return (
        <Nav id="navbar">
            <Logo to="/">JSSATEN</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.tittle}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <CustomButton to="/contact" primary="true">
                    Contact Us
                </CustomButton>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
