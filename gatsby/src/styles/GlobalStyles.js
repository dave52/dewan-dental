import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
    * { 
        box-sizing: border-box; 
    }

    // scroll bar styles
    /* Works on Firefox */
    html {
        scrollbar-width: auto;
        scrollbar-color: var(--blue) var(--blue-50);
    }

    /* Works on Chrome, Edge, and Safari */
    html::-webkit-scrollbar {
        width: var(--frame-size);
    }

    html::-webkit-scrollbar-track {
        background: var(--blue-50);
    }

    html::-webkit-scrollbar-thumb {
        background: var(--blue);
    }

    :root {
        --black: #1F2421;
        --blue: #466287;
        --blue-90: hsla(214, 32%, 40%, 0.9);
        --blue-50: hsla(214, 32%, 40%, 0.5);
        --brown: #A56F51;
        --cream: #E3ECD3;
        --cream-75: hsla(82, 40%, 88%, 0.75);
        --gray: #E2DDDE;
        --white-85: hsla(0, 0%, 100%, 0.85);

        --frame-size: 1.8rem;
    }

    html {
        font-size: 10px;
    }

    .overflow-hidden {
        overflow: hidden;
    }

    .row {
        display: flex;
    }

    .column {
        display: flex;
        flex-direction: column;
    }

    .align-flex-start {
        align-items: flex-start;
    }

    .space-between {
        display: flex;
        justify-content: space-between;
    }
`;

export default GlobalStyles;
