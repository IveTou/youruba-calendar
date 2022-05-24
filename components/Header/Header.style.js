import styled from 'styled-components'

const S = {
  Header: styled.header`
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: 72px;
    padding: 0 16px;
      
    @media (min-width: 600px) {
      padding: 0 40px;
    }
  `,
  Content: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Icon: styled.span`
    display: flex;
    font-weight: 700;
    font-size: 32px;
  `,
  ToolBar: styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
  `
}

export default S