import styled from 'styled-components'

const S = {
  Details: styled.div`
    width: 100%;
    min-height: 488px;
    padding: 24px;
    background: #dc8e00;
    background: linear-gradient(to bottom,#dc8e00a8,#dc8e00);
  `,
  Content: styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 auto;
    padding: 24px 0;
    color: #fff;

    @media (min-width: 600px) {
      max-width: 600px;
    }
  `,
  Date: styled.div`
    font-size: 80px;
    font-weight: 500;
  `,
  WeekDay: styled.div`
    font-size: 24px;
    font-weight: 400;
    text-transform: capitalize;
  `,
  Description: styled.div`
    padding-top: 14px;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
  `
}

export default S