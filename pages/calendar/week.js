import Grid from '../../components/Grid'
import { WEEK_DAYS } from '../../constants'

const Week = () => {
  return (
    <Grid  pattern={WEEK_DAYS} rows={1} header={WEEK_DAYS} />
  )
}

export default Week
