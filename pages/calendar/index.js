import { useRouter } from 'next/router'

import Grid from '../../components/Grid'
import { WEEK_DAYS } from '../../constants'
import daysProvider from '../../utils/daysProvider'
import { chunkMonth, chunkWeek, chunkDay } from '../../utils/chunkData'


const Views = () => {
  const router = useRouter()
  const { view, year, month, day } = router.query

  const days = daysProvider({ year, month })

  const viewMap = {
    day: {
      data: chunkDay(days, day),
      header: [WEEK_DAYS[chunkDay(days, day)[0]?.index]]
    },
    week: {
      data: chunkWeek(days),
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

  console.log(gridProps)

  return (
    <Grid  {...gridProps} />
  )
}

export default Views
