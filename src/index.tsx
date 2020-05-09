import React from 'react';
import ReactDOM from 'react-dom';
import {css} from 'linaria';

import {App} from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalStyles = css`
  :global() {
    :root {
      --color-accent: hsl(49, 100%, 71%);
      --color-dark: hsl(0, 0%, 10%);
      --color-dark-translucent: hsla(0, 0%, 10%, 0.85);
      --color-light: hsl(70, 0%, 95%);
      --content-width: 1000px;
      --font-size-xs: 17px;
      --font-size-s: 18px;
      --font-size-m: 22px;
      --font-size-l: 30px;
      --font-size-xl: 46px;
      --padding: 5%;
    }

    html body {
      background-color: var(--color-dark);
      color: var(--color-light);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif;
      font-size: var(--font-size-s);
      padding-top: 80px;

      @media (max-width: 600px) {
        font-size: var(--font-size-xs);
      }
    }

    /* CSS Reset */
    html {
      line-height: 1.15;
      -webkit-text-size-adjust: 100%;
    }
    body {
      margin: 0;
    }
    main {
      display: block;
    }
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }
    pre {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    a {
      background-color: transparent;
    }
    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
    }
    b,
    strong {
      font-weight: bolder;
    }
    code,
    kbd,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }
    button,
    input {
      overflow: visible;
    }
    button,
    select {
      text-transform: none;
    }
    [type='button'],
    [type='reset'],
    [type='submit'],
    button {
      -webkit-appearance: button;
    }
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner,
    button::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring,
    button:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }
    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }
    progress {
      vertical-align: baseline;
    }
    textarea {
      overflow: auto;
    }
    [type='checkbox'],
    [type='radio'] {
      box-sizing: border-box;
      padding: 0;
    }
    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
      height: auto;
    }
    [type='search'] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }
    [type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    details {
      display: block;
    }
    summary {
      display: list-item;
    }
    [hidden],
    template {
      display: none;
    }
    blockquote,
    dd,
    dl,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    p,
    pre {
      margin: 0;
    }
    button {
      background-color: transparent;
      background-image: none;
      padding: 0;
    }
    button:focus {
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }
    fieldset,
    ol,
    ul {
      margin: 0;
      padding: 0;
    }
    ol,
    ul {
      list-style: none;
    }
    html {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
        Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
        Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
      line-height: 1.5;
    }
    *,
    :after,
    :before {
      box-sizing: border-box;
      border: 0 solid #e2e8f0;
    }
    hr {
      border-top-width: 1px;
    }
    img {
      border-style: solid;
    }
    textarea {
      resize: vertical;
    }
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: #a0aec0;
    }
    input::-moz-placeholder,
    textarea::-moz-placeholder {
      color: #a0aec0;
    }
    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      color: #a0aec0;
    }
    input::-ms-input-placeholder,
    textarea::-ms-input-placeholder {
      color: #a0aec0;
    }
    input::placeholder,
    textarea::placeholder {
      color: #a0aec0;
    }
    [role='button'],
    button {
      cursor: pointer;
    }
    table {
      border-collapse: collapse;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }
    a {
      color: inherit;
      text-decoration: inherit;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      padding: 0;
      line-height: inherit;
      color: inherit;
    }
    code,
    kbd,
    pre,
    samp {
      font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New,
        monospace;
    }
    audio,
    canvas,
    embed,
    iframe,
    img,
    object,
    svg,
    video {
      display: block;
    }
    img,
    video {
      max-width: 100%;
      height: auto;
    }
  }
`;
