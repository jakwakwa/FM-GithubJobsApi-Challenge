import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Kumbh Sans', sans-serif;
}

body {
  background-color: #F4F6F8;
}
h1 {
  font-size: 28px;
  line-height: 34px;
  color: #19202D;
  font-weight: 700;
}

h2 {
  font-size: 24px;
  line-height: 29px;
  color: #19202D;
  font-weight: 700;
}

h3 {
  font-size: 20px;
  line-height: 24px;
  color: #19202D;
  font-weight: 700;
}

h4 {
  font-size: 14px;
  line-height: 18px;
  color: #19202D;
  font-weight: 700;
}

p, span, input {
  font-size: 16px;
  line-height: 26px;
  color: #6E8098;
  font-weight: 400;
}
`;

export default GlobalStyles;
