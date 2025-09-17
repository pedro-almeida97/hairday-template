import dayjs from 'dayjs'
import { schedulesDay } from '../schedules/load'

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (e) => {
  e.preventDefault()
  schedulesDay()
}
