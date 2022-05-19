import { ThemeProvider } from 'styled-components'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{ mode: 'default' }}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
