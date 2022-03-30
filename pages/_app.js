import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../globalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ mode: "default" }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
