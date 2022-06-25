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
  const dateAr = new Date(date).toLocaleString('es-AR', { timezone: 'UTC' }).split(':')
  return `${dateAr[0]}:${dateAr[1]}`
}

module.exports = {
  dayName,
  emptyAppointment,
  formatDate,
  isMissingValue
}
