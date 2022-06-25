const format = require('date-fns/format')
const { enUS } = require('date-fns/locale/en-US')

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
  // const dateUtc = new Date(date)
  // const result = sub(new Date(2017, 5, 15, 15, 29, 20), { hours: 3 })
  return format(new Date(date), "dd/MM/yyyy 'a las' hh':'mm 'hs'", {
    locale: enUS
  })
}

module.exports = {
  dayName,
  emptyAppointment,
  formatDate,
  isMissingValue
}
