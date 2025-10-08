import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day'
import { hoursLoad } from '../form/hours-load'
import { schedulesShow } from './show'

const selectedDate = document.getElementById('date')

export async function schedulesDay() {
  const date = selectedDate.value
  const hours = hoursLoad({ date, dailySchedules })

  schedulesShow({ dailySchedules })

  const dailySchedules = await scheduleFetchByDay({ date })
  console.log(dailySchedules)
}
