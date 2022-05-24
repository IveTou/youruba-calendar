import styled from 'styled-components'

const S = {
  TaskBar: styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 24px;
      
    @media (min-width: 600px) {
      padding: 32px 40px;
    }
  `,
  Content: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
  `,
  Title: styled.span`
    display: flex;
    align-items: flex-end;
    white-space: nowrap;
    font-weight: 500;
    font-size: 24px;
    text-transform: capitalize;
  `,
  ToolBar: styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
  `,
  ArrowButtons: styled.div`
    display: flex;
    gap: 12px;
  `,
  Arrow: styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 24px;
    font-size: 24px;
    color: #5f6368;
    cursor: pointer;

    :hover {
      background: #f6f6f6;
    }
  `
}

export default S