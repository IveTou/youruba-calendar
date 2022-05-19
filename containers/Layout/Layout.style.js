import styled, { createGlobalStyle } from 'styled-components'

const S = {
  Layout: styled.div``,/* TODO: Footer issue */
  Main: styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
  `
}

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    * {
      box-sizing: border-box;
    }
`

export default S