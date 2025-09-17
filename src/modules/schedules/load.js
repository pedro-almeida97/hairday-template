import { hoursLoad } from '../form/hours-load'

const selectedDate = document.getElementById('date')

export function schedulesDay() {
  const date = selectedDate.value
  const hours = hoursLoad({ date })

  console.log('Horários gerados:', hours)
}
