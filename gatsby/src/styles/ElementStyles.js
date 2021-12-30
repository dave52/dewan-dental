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
        text-align: center;
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

    a.underscore {
        z-index: 1;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        color: #4859be;
        font-weight: 600;
        transition: color 0.3s ease-out;

        &::after {
            content: '';
            background: #d1d9f3;
            position: absolute;
            left: 4px;
            bottom: -5px;
            width: 100%;
            height: calc(100% - 12px);
            z-index: -1;
            transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
        }

        &:hover {
            color: #581414;

            :after {
                left: -3px;
                bottom: -3px;
                width: calc(100% + 6px);
                height: 106%;
            }
        }
    }
`;

export default ElementStyles;
