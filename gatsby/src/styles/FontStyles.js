import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
    body {
        font-family: 'Karla', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        font-size: 1.3rem;
        line-height: 1.6;
    }

    .font-uppercase {
        text-transform: uppercase;
    }

    .font-serif {
        font-family: Vollkorn, Georgia, 'Times New Roman', Times, serif;
    }

    .font-size-12 {
        font-size: 1.2rem;
    }

    .font-size-13 {
        font-size: 1.3rem;
    }

    .font-size-14 {
        font-size: 1.4rem;
    }

    .font-size-16 {
        font-size: 1.6rem;
    }

    .font-size-17 {
        font-size: 1.7rem;
    }

    .font-size-20 {
        font-size: 2rem;
    }

    .font-size-22 {
        font-size: 2.2rem;
    }

    .font-size-32 {
        font-size: 3.2rem;
    }

    .font-size-32 {
        font-size: 3.2rem;
    }

    .font-weight-medium {
        font-weight: 500;
    }

    .font-weight-semibold {
        font-weight: 600;
    }

    .font-weight-bold {
        font-weight: 700;
    }

    .font-weight-extrabold {
        font-weight: 800;
    }

    .font-weight-medium {
        font-weight: x;
    }

    .font-spacing-50 {
        letter-spacing: 0.05em;
    }

    .font-spacing-100 {
        letter-spacing: 0.1em;
    }

    .font-spacing-150 {
        letter-spacing: 0.15em;
    }

    .font-spacing-200 {
        letter-spacing: 0.2em;
    }

    .font-color-black {
        color: var(--black);
    }

    .font-color-blue {
        color: var(--blue);
    }

    .font-color-cream {
        color: var(--cream);
    }

    .font-color-cream-75 {
        color: var(--cream-75);
    }

    .font-color-white {
        color: #fff;
    }
`;

export default FontStyles;
