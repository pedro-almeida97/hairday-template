import dayjs from 'dayjs'
import { openingHours } from '../../utils/opening-hours'

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

  return opening
}
