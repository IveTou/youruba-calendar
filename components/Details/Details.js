import PropTypes from 'prop-types'
import S from './Details.style'

const Details = ({ date, day, description }) => {
  if (!(date && day && description)) return null
  
  return (
    <S.Details>
      <S.Content>
        <S.Date>{date}</S.Date>
        <S.WeekDay>{day}</S.WeekDay>
        <S.Description>
          {description}
        </S.Description>
      </S.Content>
    </S.Details>
  )
}

Details.propTypes = {
  date: PropTypes.string,
  day: PropTypes.string,
  description: PropTypes.string
}

export default Details
