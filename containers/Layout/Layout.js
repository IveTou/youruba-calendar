import S, { GlobalStyle } from './Layout.style'
import Header from '../../components/Header/Header'
import TaskBar from '../../components/TaskBar'

const Layout = ({ children }) => (
  <S.Layout>
    <GlobalStyle />
    <Header />
    <TaskBar />
    <S.Main>
      {children}
    </S.Main>
  </S.Layout>
)

export default Layout