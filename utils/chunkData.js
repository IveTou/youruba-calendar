const WEEK_DAYS_LENGTH = 7

export const chunkMonth = data => {
  if (!data?.length) return [[]]

  let chunk = []

  for(let i = 0; i < data.length; i = i + WEEK_DAYS_LENGTH) {
    const slice = data.slice(i, i + WEEK_DAYS_LENGTH)

    if (slice.some(({ onMonth }) => onMonth )) {
      chunk.push(slice)
    }
  }

  return chunk
}

export const chunkWeek = (data, day = 1) => {
  const formatDay = parseInt(day)
  
  if (!(data?.length && formatDay)) return [[]]

  const monthData = chunkMonth(data)

  const weekData = monthData
    .map(row => {
      const someRow = row.some(({ day, onMonth }) => day === formatDay && onMonth)
      if (someRow) return row
    })
    .filter(el => el)
  
  return weekData
}

export const chunkDay = (data, day = 1) => {
  const formatDay = parseInt(day)

  if (!(data?.length && formatDay)) return [[]]

  const monthData = chunkMonth(data)

  const dayData = monthData
    .map(row => row.map((el, index) => {
      const { day, onMonth } = el
      if (day === formatDay && onMonth) return ({ ...el, index})
    }))
    .map(el => el.filter(el => el))
    .filter(el => el.length)  
  
  return dayData
}