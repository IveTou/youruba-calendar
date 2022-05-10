import Grid from '../../components/Grid'
import { WEEK_DAYS } from '../../constants'

const Calendar = () => {
  return (
    <Grid  pattern={WEEK_DAYS} rows={6}/>
  )
}

export default Calendar
