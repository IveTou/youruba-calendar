import UIBase from '../../containers/UIBase'
import S from './Details.style'

const Details = () => {
  return (
    <S.Details>
      <S.Content>
        <S.Date>02</S.Date>
        <S.WeekDay>Monday</S.WeekDay>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar enim eget velit varius pharetra. Integer rutrum faucibus magna, non ultrices diam fringilla ut. Aliquam at viverra enim.
        </S.Description>
      </S.Content>
    </S.Details>
  )
}

export default Details
