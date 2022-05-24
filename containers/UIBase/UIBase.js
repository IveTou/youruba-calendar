import PropTypes from 'prop-types'

import S from './UIBase.style'

const UIBase = ({ constraint, background, children }) => 
  <S.UIBase constraint={constraint} background={background}>
    <div>
      {children}
    </div>
  </S.UIBase >

UIBase.protType = {
  constraint: PropTypes.number,
  children: PropTypes.object,
  background: PropTypes.string
}

UIBase.defaultProps = {
  constraint: 1024,
  background: '#fff'
}

export default UIBase
