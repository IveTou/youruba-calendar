import S, { GlobalStyle } from './Layout.style'
import Header from '../../components/Header/Header'

const Layout = ({ children }) => (
  <S.Layout>
    <GlobalStyle />
    <Header />
    <S.Main>
      {children}
    </S.Main>
  </S.Layout>
)

export default Layout