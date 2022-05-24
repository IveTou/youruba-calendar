import { memo } from 'react'

import UIBase from '../../containers/UIBase'
import S from './Header.style'

const Header = () => (
  <UIBase background='#e8ac3e'>
    <S.Header>
      <S.Content>
        <S.Icon>Calyô</S.Icon>
        <S.ToolBar></S.ToolBar>
      </S.Content>
    </S.Header>
  </UIBase>
)

export default memo(Header)
