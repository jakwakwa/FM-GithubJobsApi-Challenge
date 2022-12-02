import { createGlobalStyle } from "styled-components";
import { themeColors } from "./ThemeStyled";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Kumbh Sans', sans-serif;
}

body {
    font-family: 'Kumbh Sans', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
}


h1 {
  font-size: 28px;
  line-height: 34px;
  color: ${({ theme }) => theme.textHeadings};
  font-weight: 700;
}

h2 {
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.textHeadings};
  font-weight: 700;
}

h3 {
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
}

h4 {
  font-size: 14px;
  line-height: 18px;
  color: #19202D;
  font-weight: 700;
}

p, input, li {
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.text};
  font-weight: 400;

}

label, input {
    color: ${({ theme }) => theme.jobcardTitle};
}

strong {
    float: left;
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.textHeadings};
    margin-top: -24px;
    padding-top: 48px;
}

a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
}

p a {
    color: ${themeColors.primary.violet};
    font-weight: 700;
    font-size: 14px;
    line-height: 26px;
    text-decoration: underline;
}

button span  {

    font-size: 14px !important;
}

div.span {
    color: ${({ theme }) => theme.jobText};
}

ul {
    list-style: none;
    margin-bottom: 24px;
}

li::before {
    content: "• ";
    color: ${({ theme }) => theme.bullets};
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width:34px; /* Also needed for space (tweak if needed) */
    margin-left: -2em; /* Also needed for space (tweak if needed) */
}

ul li {
    margin-left: 34px;
}

`;

export default GlobalStyles;
