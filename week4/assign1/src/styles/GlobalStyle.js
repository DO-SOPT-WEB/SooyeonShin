import {createGlobalStyle} from "styled-components";

const GlobalStyle=createGlobalStyle`

  *{
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({theme}) => theme.colors.bgColor};


  }

  #root{
    height: 100vh; //중앙에 오게 하려고 했는데 이렇게 하는게 맞는지,,,
  }


`;

export default GlobalStyle;