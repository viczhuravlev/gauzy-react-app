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

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html,
  body {
    margin: 0;
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  button {
    background-color: inherit;
    border: none;
    color: inherit;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    padding: 0;
    text-align: center;
    text-decoration: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button:focus {
    outline: 0;
  }

  input {
    border-color: initial;
    border-image: initial;
    border-style: none;
    color: inherit;
    display: block;
    font: inherit;
    padding: 10px;
    margin: 0;
    width: 100%;
  }

  input:focus {
    outline: 0;
  }
`;
