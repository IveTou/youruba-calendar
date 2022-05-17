export const chunkMonth = data => {
  if (!data) return [[]]

  const WEEK_DAYS_LENGTH = 7
  let chunk = []

  for(let i = 0; i < data.length; i = i + WEEK_DAYS_LENGTH) {
    const slice = data.slice(i, i + WEEK_DAYS_LENGTH)

    if (slice.some(({ onMonth }) => onMonth )) {
      chunk.push(slice)
    }
  }

  return chunk
}

export const chunkWeek = (data, week = 1) => {
  if (!data) return [[]]

  const row = week -1
  const monthData = chunkMonth(data)

  return [monthData[row]]
}

export const chunkDay = (data, day = 1) => {
  if (!data) return []

  const dayData = data
    .filter(({ day: dayName, onMonth }) => dayName === day && onMonth)
    .map((el, index) => ({ ...el, index }))

  return dayData
}