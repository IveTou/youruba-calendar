import styled from 'styled-components'

export default {
  Box: styled.div`
    position: relative;
    width: 100%;
    background: aliceblue;

    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  `,
  Grid: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
  `
}