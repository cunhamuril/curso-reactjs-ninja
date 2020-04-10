import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
  
    box-sizing: border-box;
  
    font-family: sans-serif;
  }
  
  body {
    padding: 0 10px;
  
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
  }
  
  #root {
    display: flex;
    align-items: center;

    min-height: 100vh;
  }

  .App {
    display: flex;
    align-items: center;
    flex-direction: column;
    
    margin: 0 auto;
    min-height: 520px;    

    width: 100%;
    max-width: 1000px;
  }
`;
