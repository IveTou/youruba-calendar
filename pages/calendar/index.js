import { useRouter } from 'next/router'

import Grid from '../../components/Grid'
import { WEEK_DAYS } from '../../constants'
import daysProvider from '../../utils/daysProvider'
import { chunkMonth, chunkWeek, chunkDay } from '../../utils/chunkData'
import Layout from '../../containers/Layout/Layout'
import Details from '../../components/Details/Details'


const Views = () => {
  const router = useRouter()
  const { view, year, month, day = new Date().getDate() } = router.query

  const days = daysProvider({ year, month })
  const viewDayData = chunkDay(days, day)
  const today = WEEK_DAYS[viewDayData[0][0]?.index]

  const viewMap = {
    day: {
      data: viewDayData,
      header: [today],
      unique: true
    },
    week: {
      data: chunkWeek(days, day),
      header: WEEK_DAYS
    },
    month: {
      data:  chunkMonth(days),
      header: WEEK_DAYS,
      square: true
    }
  }

  const gridProps = viewMap[view]

  if (!gridProps) return null
  /* TODO: redirect to base ow notfound page */

  /* TODO: check when grid pros is true but empty arrays */
  return (
    <Layout>
      <Grid  {...gridProps} />
      <Details
        date={day}
        day={today}
        description='Lorem ipsum'
      />
    </Layout>
  )
}

export default Views
