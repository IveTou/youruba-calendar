import S, { GlobalStyle } from './Layout.style'

const Layout = ({ children }) => (
  <S.Layout>
    <GlobalStyle />
    <S.Main>
      {children}
    </S.Main>
  </S.Layout>
)

export default Layout