import styled, { css } from 'styled-components'

const S = {
  Box: styled.div`
    position: relative;
    width: 100%;
    background: aliceblue;

    &:after {
      display: block;
      content: "";

      ${({ percent }) => percent
        ? css`
          padding-bottom: ${100 / percent}%;
        `
        : css`
          padding-bottom: 100%;
        `
      }
    }
  `,
  Grid: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
  `,
  Row: styled.div`
    display: flex;
    width: 100%;
    height: ${({ percent }) => 100 / percent}%;
  `,
  Cell: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: ${({ active }) => active ? 'black' : 'grey'};
  `,
  Header: styled.div`
    display: flex;
    width: 100%;
    height: 36px;
  `,
  HeaderCell: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `
}


export default S