import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
    * { 
        box-sizing: border-box; 
    }

    :root {
        --black: #1F2421;
        --blue: #466287;
        --brown: #A56F51;
        --gray: #E2DDDE;

        --frame-size: 1.8rem;
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
        width: var(--frame-size);
    }

    *::-webkit-scrollbar-track {
        background: var(--gray);
    }

    *::-webkit-scrollbar-thumb {
        background: var(--blue);
    }
`;

export default GlobalStyles;
