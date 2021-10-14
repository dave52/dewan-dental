import { createGlobalStyle } from 'styled-components';

const ElementStyles = createGlobalStyle`
    button.button,
    a.button {
        display: flex;
        justify-content: center;
        padding: var(--button-padding, 1.5rem 4.5rem);
        background: var(--button-background-color, var(--blue));
        border-radius: 0.6rem;
        border: 0.3rem solid var(--button-color, var(--cream-75));
        color: var(--button-color, var(--cream-75));
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        text-decoration: none;
        cursor: pointer;
        transition: background .5s ease-out, border .5s ease-in, color .5s ease-out;

        &:hover {
            background: var(--button-color, var(--cream-75));
            border: 0.3rem solid var(--button-background-color, var(--blue));
            color: var(--button-background-color, var(--blue));
        }
    }
`;

export default ElementStyles;
