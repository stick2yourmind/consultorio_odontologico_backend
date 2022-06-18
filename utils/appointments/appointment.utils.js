
const FORTY_FIVE_MINUTES_STEP = 2700000
const TEN_HOURS_STEP = 36000000
const FOURTEEN_HOURS_STEP = 50400000

const SUNDAY = 0
const SATURDAY = 6

const dayName = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
]
const nextWeekDays = (month) => {
  const currentDate = new Date()
  const dateLimitTarget = new Date(currentDate.getFullYear(), currentDate.getMonth() && month + 1, 0)
  console.log('dateLimitTarget')
  console.log(dateLimitTarget)
  const auxDay = new Date()
  const weekDays = []
  /* eslint-disable */
  for (let i = 0; auxDay <= dateLimitTarget; i++) {
    auxDay.setHours(24)
    if (auxDay.getDay() < SATURDAY && auxDay.getDay() > SUNDAY) { weekDays.push(auxDay.getDate()) }
  }
  /* eslint-enable */
  console.log('weekDays')
  console.log(weekDays.slice(0, 20))
  return weekDays.slice(0, 21)
}

const emptyAppointmentGenerator = (month) => {
  const nextWeekDaysArray = nextWeekDays(month)
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const allAppointments = []
  for (let i = 0; i < nextWeekDaysArray.length; i++) {
    /* eslint-disable */
    let zero = new Date(currentYear, currentMonth && month, nextWeekDaysArray[i])

    let tenAM = zero.getTime() + TEN_HOURS_STEP
    let quarterToEleven = tenAM + FORTY_FIVE_MINUTES_STEP
    let halfPastEleven = quarterToEleven + FORTY_FIVE_MINUTES_STEP
    let quarterPastTwelve = halfPastEleven + FORTY_FIVE_MINUTES_STEP
    let thirteen = quarterPastTwelve + FORTY_FIVE_MINUTES_STEP

    let twoPM = zero.getTime() + FOURTEEN_HOURS_STEP
    let quarterToFifteen = twoPM + FORTY_FIVE_MINUTES_STEP
    let halfPastSixteen = quarterToFifteen + FORTY_FIVE_MINUTES_STEP
    let quarterPastSeventeen = halfPastSixteen + FORTY_FIVE_MINUTES_STEP
    let eighteen = quarterPastSeventeen + FORTY_FIVE_MINUTES_STEP
    // let allAppointmentsPerDay = [
    //   new Date(tenAM),
    //   new Date(quarterToEleven),
    //   new Date(halfPastEleven),
    //   new Date(quarterPastTwelve),
    //   new Date(thirteen),
    //   new Date(twoPM),
    //   new Date(quarterToFifteen),
    //   new Date(quarterPastSeventeen),
    //   new Date(eighteen)
    //   /* eslint-enable */
    // ]
    // allAppointments.push(allAppointmentsPerDay)
    allAppointments.push(
      new Date(tenAM),
      new Date(quarterToEleven),
      new Date(halfPastEleven),
      new Date(quarterPastTwelve),
      new Date(thirteen),
      new Date(twoPM),
      new Date(quarterToFifteen),
      new Date(quarterPastSeventeen),
      new Date(eighteen))
  }
  console.log(allAppointments)
}

// const currentMonth = new Date().getMonth()
// const includeNextMonth = currentMonth + 1
// emptyAppointmentGenerator(includeNextMonth)

module.exports = {
  dayName,
  emptyAppointmentGenerator
}
