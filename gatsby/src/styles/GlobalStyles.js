import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
    * { 
        box-sizing: border-box; 
    }

    // add colors
    :root {
        --black: #1F2421;
        --blue: #466287;
        --brown: #A56F51;
        --gray: #E2DDDE;
    }

    html {
        font-size: 10px;
    }

    // scroll bar styles
    /* Works on Firefox */
    * {
        scrollbar-width: auto;
        scrollbar-color: var(--blue) var(--gray);
    }

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 1.8rem;
    }

    *::-webkit-scrollbar-track {
        background: var(--gray);
    }

    *::-webkit-scrollbar-thumb {
        background: var(--blue);
    }
`;

export default GlobalStyles;
