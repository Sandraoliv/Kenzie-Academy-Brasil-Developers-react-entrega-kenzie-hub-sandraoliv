import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    text-decoration: none;
    font-family: 'Inter' ;
    background: #000000;
    font-family: 'Inter';
    cursor: pointer;
    
}
    :root{
        
    --color-primary:#FF577F;
    --color-secondary: #59323F;
    --color-white: #F8F9FA;
    --color-success: #7CC39C;
    --color-warning: #FBEA85;
    --color-error: #EA524F;
 
    --grey-0:#F8F9FA;
    --grey-1:#868E96;
    --grey-2:#343B41;
    --grey-3:#212529;
    }

    .root{
        height: 100vh;
    }

    .App{
        height: 100vh;
    }
    header {
    height: 175px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  `;
