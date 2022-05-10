import Grid from '../../components/Grid'
import { WEEK_DAYS } from '../../constants'

const Month = () => {
  return (
    <Grid  pattern={WEEK_DAYS} rows={6} header={WEEK_DAYS} square />
  )
}

export default Month
