import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        scroll-behavior: smooth;
    }
    
    body {
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
    
    a {
        text-decoration: none;
        color:inherit;
    }

    a:hover{
        text-decoration: none;
        color: inherit;
    }

    :root {
        --primary: #f2be00;
        --secondary: #272170;
    }

    ::-webkit-scrollbar { 
        width: 10px;
        border-bottom: 10px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--primary);
        border-radius: 12px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #d9aa00;
    }
`;

export default GlobalStyle;