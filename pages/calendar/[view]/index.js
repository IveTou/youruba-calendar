import { useRouter } from 'next/router'

import Grid from '../../../components/Grid'
import { WEEK_DAYS } from '../../../constants'

const Views = () => {
  const router = useRouter()
  const { view } = router.query

  const viewMap = {
    day: {
      pattern: ['saturday'],
      rows: 1,
      header: ['saturday']
    },
    week: {
      pattern: WEEK_DAYS,
      rows: 1,
      header: WEEK_DAYS
    },
    month: {
      pattern: WEEK_DAYS,
      rows: 6,
      header: WEEK_DAYS,
      square: true
    }
  }

  const gridProps = viewMap[view]

  if (!gridProps) return null

  return (
    <Grid  {...gridProps} />
  )
}

export default Views
