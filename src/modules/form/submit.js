import dayjs from 'dayjs'
import { schedulesDay } from '../schedules/load'
import { scheduleNew } from '../../services/schedule-new'

const clientName = document.getElementById('client')
const form = document.querySelector('form')
const selectedDate = document.getElementById('date')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (e) => {
  e.preventDefault()
  try {
    const name = clientName.value.trim()

    if (!name) {
      return alert('Informe o nome do client!')
    }

    const hourSelected = document.querySelector('.hour-selected')
    if (!hourSelected) {
      return alert('Selecione um horarário!')
    }

    const [hour] = hourSelected.innerHTML.split(':')

    const when = dayjs(selectedDate.value).add(hour, 'hour')

    const id = new Date().getTime()

    await scheduleNew({
      id,
      name,
      when,
    })
  } catch (error) {
    alert('Não foi possível realizar o agendamento!')
  }
}
