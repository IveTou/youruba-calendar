const CALENDAR_LENGTH = 42

const daysProvider = date => {
  const { year, month } = date || {}
  const dateObj = new Date()

  const formattedYear = parseInt(year) ||  dateObj.getFullYear()
  const formattedMonth = parseInt(month) || (dateObj.getMonth() + 1)

  if (date && !(formattedYear && formattedMonth)) return []

  const rawMonth = formattedMonth - 1
  const dayOne = new Date(formattedYear, rawMonth, 1).getDay()

  const todayMonth = formattedMonth
  const pastMonth = todayMonth - 1
  const nextMonth = todayMonth + 1
  
  const daysInThisMonth = new Date(formattedYear, todayMonth, 0).getDate()
  const daysInPastMonth = new Date(formattedYear, pastMonth, 0).getDate()
  const daysInNextMonth = new Date(formattedYear, nextMonth, 0).getDate()
  
  const todayMonthArr = Array.from(
    Array(daysInThisMonth)
      .keys(), e => ({ day: e + 1, month: todayMonth, onMonth: true, year: formattedYear })
  )

  const pastMonthArr = dayOne
    ? Array.from(
        Array(daysInPastMonth).keys(), e =>({
          day: e + 1,
          month: pastMonth,
          onMonth: false,
          year: todayMonth < 1 ? formattedYear - 1 : formattedYear 
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
        year: todayMonth > 12 ? formattedYear + 1 : formattedYear 
      })
    )
      .slice(0, CALENDAR_LENGTH - (dayOne + daysInThisMonth))
  
      
  const filledCalendar = [...pastMonthArr, ...todayMonthArr, ...nextMonthArr]

  return filledCalendar
}

export default daysProvider
