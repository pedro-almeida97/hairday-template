import dayjs from 'dayjs'
import { openingHours } from '../../utils/opening-hours'
import { hoursClick } from './hours-click'

const hours = document.getElementById('hours')

export function hoursLoad({ date }) {
  hours.innerHTML = ''

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(':')

    const hourDate = dayjs(date).hour(Number(scheduleHour)).minute(0)

    const isHourPast = hourDate.isBefore(dayjs())

    const item = {
      hour,
      available: !isHourPast,
    }

    console.log(item)
    return item
  })

  opening.forEach(({ hour, available }) => {
    const li = document.createElement('li')
    li.classList.add('hour')
    li.classList.add(available ? 'hour-available' : 'hour-unavailable')
    li.textContent = hour

    if (hour === '9:00') {
      hourHeaderAdd('Manhã')
    } else if (hour === '13:00') {
      hourHeaderAdd('Tarde')
    } else if (hour === '18:00') {
      hourHeaderAdd('Noite')
    }

    hours.append(li)
  })

  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement('li')
  header.classList.add('hour-period')
  header.textContent = title

  hours.append(header)
}
