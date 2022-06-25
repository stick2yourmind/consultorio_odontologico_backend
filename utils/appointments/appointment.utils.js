// const format = require('date-fns/format')
// const addHours = require('date-fns/addHours')

const dayName = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
]
const isMissingValue = (payload) => {
  if (!payload.professionalId) throw new Error("Missing 'professional' value")
  if (!payload.specialtyId) throw new Error("Missing 'specialty' value")
  if (!payload.user) throw new Error("Missing 'user' value")
  if (!payload.user.dni) throw new Error("Missing 'dni' value")
  if (!payload.user.email) throw new Error("Missing 'email' value")
  if (!payload.user.fullName) throw new Error("Missing 'fullName' value")
  if (!payload.user.phone) throw new Error("Missing 'phone' value")
  return false
}
const emptyAppointment = {
  professionalId: '',
  specialtyId: '',
  user: {
    dni: null,
    email: '',
    fullName: '',
    phone: ''
  }
}
const formatDate = (date) => {
  console.log(date)
  console.log(new Date(date).toISOString())
  const dateUTC = new Date(date)
  const hoursUTC = dateUTC.getUTCHours()
  const dateAr = new Date(date)
  dateAr.setUTCHours(hoursUTC - 3)
  console.log(`${dateAr.getUTCDate()}/${dateAr.getUTCMonth() + 1}/${dateAr.getUTCFullYear()} a las ${dateAr.getUTCHours()}:${!dateAr.getUTCMinutes() ? '00' : dateAr.getUTCMinutes()} hs`)
  return `${dateAr.getUTCDate()}/${dateAr.getUTCMonth() + 1}/${dateAr.getUTCFullYear()} a las ${dateAr.getUTCHours()}:${!dateAr.getUTCMinutes() ? '00' : dateAr.getUTCMinutes()} hs`
}

module.exports = {
  dayName,
  emptyAppointment,
  formatDate,
  isMissingValue
}
