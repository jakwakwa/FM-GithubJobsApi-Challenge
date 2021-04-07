import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Kumbh Sans', sans-serif;
}

body {
  background-color: #F4F6F8;
  font-family: 'Kumbh Sans', sans-serif;
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

p, input, li {
  font-size: 16px;
  line-height: 26px;
  color: #6E8098;
  font-weight: 400;
}

p strong {
    font-size: 20px;
    line-height: 92px;
    font-weight: 700;
    color: #19202D;
    margin-bottom: 28px;
}
a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
p a {
    color: #5964E0;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
}

ul {
    margin-left: 15px;
}

li {
    padding-left: 20px;
}
`;

export default GlobalStyles;
