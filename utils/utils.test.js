import daysProvider from './daysProvider'
import { chunkMonth, chunkWeek, chunkDay } from './chunkData'

describe('daysProvider', () => {
  it('should return a array when props are valid', () => {
    const data = daysProvider({ year: 2022, month: '05' })
    
    expect(data).toHaveLength(42)
  })

  it('should not return empty array when props are invalid', () => {
    const data = daysProvider({ year: 2022, month: 'may' })
    
    expect(data.length).toBeGreaterThan(0)
  })

  
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
  const data = daysProvider({ year: 2022, month: 5 })

  describe('chunkMonth', () => {
    it('should return empty matrix when no data is passed', () => {
      const chunk = chunkMonth()

      expect(chunk).toHaveLength(1)
      expect(chunk[0]).toHaveLength(0)
    })

    it('should chunk data into seven weeks matrix - chunkMonth', () => {
      const chunk = chunkMonth(data)
  
      expect(chunk).toHaveLength(5)
  
      expect(chunk[0]).toHaveLength(7)
      expect(chunk[1]).toHaveLength(7)
      expect(chunk[2]).toHaveLength(7)
      expect(chunk[3]).toHaveLength(7)
      expect(chunk[4]).toHaveLength(7)
    })
  })

  describe('chunkWeek', () => {
    it('should return empty matrix when no data is passed', () => {
      const chunk = chunkWeek()

      expect(chunk).toHaveLength(1)
      expect(chunk[0]).toHaveLength(0)
    })

    it('should chunk data into one week matrix', () => {
      const chunk = chunkWeek(data)
  
      expect(chunk).toHaveLength(1)
  
      expect(chunk[0]).toHaveLength(7)
    })

    it('return te right week of set day #0', () => {
      const setDay = 1
      const chunk = chunkDay(data, setDay)
      const week = chunk[0]

      const someWeek = week.some(({ day, onMonth }) => day === setDay && onMonth)

      expect(someWeek).toBeTruthy()
    })

    it('return te right week of set day #0', () => {
      const setDay = 15
      const chunk = chunkDay(data, setDay)
      const week = chunk[0]

      const someWeek = week.some(({ day, onMonth }) => day === setDay && onMonth)

      expect(someWeek).toBeTruthy()
    })
  })

  describe('chunkDay', () => {
    it('should return empty matrix when no data is passed', () => {
      const chunk = chunkDay()

      expect(chunk).toHaveLength(1)
      expect(chunk[0]).toHaveLength(0)
    })

    it('should chunk data into one day matrix', () => {
      const chunk = chunkDay(data)

      expect(chunk).toHaveLength(1)
      expect(chunk[0]).toHaveLength(1)
    })

    it('should chunk data when valid prop is passed', () => {
      const chunk = chunkDay(data, 1)

      expect(chunk).toHaveLength(1)
      expect(chunk[0]).toHaveLength(1)
    })

    it('return empty matrix when invalid prop is passed', () => {
      const chunk = chunkDay(data, 'a')

      expect(chunk).toHaveLength(1)
      expect(chunk[0]).toHaveLength(0)
    })

    it('return te right day and index #0', () => {
      const chunk = chunkDay(data, '1')
      const day = chunk[0][0]

      expect(day).toHaveProperty('day', 1)
      expect(day).toHaveProperty('index', 0)
    })

    it('return te right day and index #1', () => {
      const chunk = chunkDay(data, 20)
      const day = chunk[0][0]

      expect(day).toHaveProperty('day', 20)
      expect(day).toHaveProperty('index', 5)
    })
  })
})