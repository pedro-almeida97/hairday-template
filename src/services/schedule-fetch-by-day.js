import dayjs from 'dayjs'
import { apiConfig } from './api-config'

export async function scheduleFetchByDay({ date }) {
  try {
    const reponse = await fetch(`${apiConfig.baseURL}/schedule`)

    const data = await reponse.json()

    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, 'day')
    )

    return dailySchedules
  } catch (error) {
    console.log(error)
    alert('Não foi possível buscar os agendamentos do dia selecionado.')
  }
}
