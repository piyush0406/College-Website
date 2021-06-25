import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomButton = styled(Link)`
    background: ${({ primary }) => (primary ? '#000d1a' : 'CD8F3F')};
    white-space:nowrap;
    outline:none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration:none !important;
    transform: all 0.3s ease;
    display:flex;
    border-radius: 50px;
    justify-content:center;
    align-items:center;
    padding: ${({big}) => (big ? '16px 40px' : '14px') };
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')} !important;
    font-size: ${({big}) => (big ? '20px' : '14px')};

    &:hover {
        transform: translateY(-2px);
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#CD8F3F' : '#000d1a')};
    }

`;

export const CustomButtonOne = styled(Link)`
    background: ${({ primary }) => (primary ? 'var(--secondary)' : 'CD8F3F')};
    white-space:nowrap;
    outline:none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration:none !important;
    transform: all 0.3s ease;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: ${({big}) => (big ? '16px 40px' : '14px') };
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')} !important;
    font-size: ${({big}) => (big ? '20px' : '14px')};

    &:hover {
        transform: translateY(-2px);
        color: var(--secondary) !important;
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? 'var(--primary)' : '#000d1a')};
    }

`;