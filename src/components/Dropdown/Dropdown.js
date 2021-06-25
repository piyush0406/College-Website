import React from 'react'
import { DropdownContainer, Icon, CloseIcon, DropdownWrapper, DropdownMenu, DropdownLink, BtnWrap } from './DropdownElements';
import { menuData } from '../../data/MenuData';
import { CustomButton } from '../Button/Button';


const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.tittle}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <CustomButton primary='true' round='true' big='true' to='/contact'>
                        Contact Us
                    </CustomButton>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
