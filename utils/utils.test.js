import daysProvider from './daysProvider'
import { chunkMonth, chunkWeek, chunkDay } from './chunkData'

describe('daysProvider', () => {
  it('should return month data', () => {
    const data = daysProvider({ year: 2022, month: 5 })
    const onMonth = data.filter(({ onMonth }) => onMonth)
    const dayOne = data[0]

    expect(onMonth).toHaveLength(31)
    expect(dayOne.day).toBe(1)
    expect(dayOne.onMonth).toBeTruthy()

    const noMonth = data.filter(({ onMonth }) => !onMonth)
    const isOutsiderNextMonth = noMonth.every(({ month }) => month === 6)

    expect(isOutsiderNextMonth).toBeTruthy()
  })

  it('should return today\'s month data if no specified', () => {
    const date = new Date()

    const month = date.getMonth()
    const year = date.getFullYear()

    const todayMonth = daysProvider()
    const specMonth = daysProvider({ year, month: month + 1 })

    expect(todayMonth).toMatchObject(specMonth)
  })
})

describe('chunkData', () => {
  const data = daysProvider()

  it('should chunk data into seven weeks matrix - chunkMonth', () => {
    const chunk = chunkMonth(data)

    expect(chunk).toHaveLength(5)

    expect(chunk[0]).toHaveLength(7)
    expect(chunk[1]).toHaveLength(7)
    expect(chunk[2]).toHaveLength(7)
    expect(chunk[3]).toHaveLength(7)
    expect(chunk[4]).toHaveLength(7)
  })

  it('should chunk data into one week matrix - chunkWeek', () => {
    const chunk = chunkWeek(data)

    expect(chunk).toHaveLength(1)

    expect(chunk[0]).toHaveLength(7)
  })

  it('should chunk data into one day matrix - chunkDay', () => {
    const chunk = chunkDay(data)

    expect(chunk).toHaveLength(1)

    expect(chunk[0]).toHaveLength(1)
  })
})