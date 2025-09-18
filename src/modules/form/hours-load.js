import dayjs from 'dayjs'
import { openingHours } from '../../utils/opening-hours'

const hours = document.getElementById('hours')

export function hoursLoad({ date }) {
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
    hours.append(li)
  })
}
