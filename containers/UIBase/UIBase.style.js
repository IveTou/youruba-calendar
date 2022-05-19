import styled, { css } from 'styled-components'

const S = {
  UIBase: styled.div`
    background: ${({ background }) => background};
    ${({ constraint }) => css`
      > div {
        max-width: ${constraint}px;
        margin: 0 auto;
      }
    `}
  `
}

export default S