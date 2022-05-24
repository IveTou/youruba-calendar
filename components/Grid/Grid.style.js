import styled, { css } from 'styled-components'

const S = {
  Wrapper: styled.div`
    position: relative;
    width: 100%;
    min-height: 260px;
    padding: 0 24px 8px;
  `,
  Box: styled.div`
    position: relative;
    width: 100%;

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
    font-size: 14px;
    font-weight: 500;
    color: ${({ onMonth }) => onMonth ? 'black' : 'grey'};

    ${({ active }) => active && css`
      color: #fff;
      background: #dc8e00d4;
      font-weight: 600;
    `}
  `,
  Header: styled.div`
    display: flex;
    width: 100%;
    min-height: 40px;
    margin-bottom: 8px;
  `,
  HeaderCell: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 18px;
    font-weight: 700;

    ${({ unique }) => !unique && css`
      :first-child, :last-child {
        color: #dc8e00
      }
    `}
  `
}


export default S