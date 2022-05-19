const CALENDAR_LENGTH = 42

const daysProvider = date => {
  const { year, month } = date || {}
  const formattedYear = parseInt(year)
  const formattedMonth = parseInt(month)

  if (date && !(formattedYear && formattedMonth)) return []

  const rawMonth = formattedMonth - 1
  const dateObj = new Date()
  const rawTodayMonth = date ? rawMonth : dateObj.getMonth()
  const todayYear = date ? formattedYear : dateObj.getFullYear()
  const dayOne = new Date(todayYear, rawTodayMonth, 1).getDay()

  const todayMonth = formattedMonth || rawTodayMonth + 1
  const pastMonth = todayMonth - 1
  const nextMonth = todayMonth + 1
  
  const daysInThisMonth = new Date(todayYear, todayMonth, 0).getDate()
  const daysInPastMonth = new Date(todayYear, pastMonth, 0).getDate()
  const daysInNextMonth = new Date(todayYear, nextMonth, 0).getDate()
  
  const todayMonthArr = Array.from(
    Array(daysInThisMonth)
      .keys(), e => ({ day: e + 1, month: todayMonth, onMonth: true, year: todayYear })
  )

  const pastMonthArr = dayOne
    ? Array.from(
        Array(daysInPastMonth).keys(), e =>({
          day: e + 1,
          month: pastMonth,
          onMonth: false,
          year: todayMonth < 1 ? todayYear - 1 : todayYear 
        })
      )
        .slice(-dayOne)
    : []
    
  const nextMonthArr = 
    Array.from(
      Array(daysInNextMonth).keys(), e => ({
        day: e + 1,
        month: nextMonth,
        onMonth: false,
        year: todayMonth > 12 ? todayYear + 1 : todayYear 
      })
    )
      .slice(0, CALENDAR_LENGTH - (dayOne + daysInThisMonth))
  
      
  const filledCalendar = [...pastMonthArr, ...todayMonthArr, ...nextMonthArr]

  return filledCalendar
}

export default daysProvider
