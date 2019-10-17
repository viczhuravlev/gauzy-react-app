import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-accent: hsl(49, 100%, 71%);
    --color-dark: hsl(0, 0%, 10%);
    --color-dark-translucent: hsla(0, 0%, 10%, 0.85);
    --color-error: hsl(343, 100%, 45%);
    --color-light: hsl(70, 0%, 95%);
    --color-success: hsl(133, 60%, 67%);
    --content-width: 1000px;
    --font-size-xxs: 15px;
    --font-size-xs: 17px;
    --font-size-s: 18px;
    --font-size-m: 22px;
    --font-size-l: 30px;
    --font-size-xl: 46px;
    --font-size-xxl: 60px;
    --padding: 4%;
    --radius-l: 10px;
    --radius-m: 6px;
  }

  html
  body {
    background-color: var(--color-dark);
    color: var(--color-light);
    font-family: Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: var(--font-size-s);
    padding-top: 80px;
    
    @media (max-width: 600px) {
      font-size: var(--font-size-xs);
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* CSS Reset */

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
