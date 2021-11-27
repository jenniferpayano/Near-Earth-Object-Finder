import apiUrl from '../apiConfig'
import axios from 'axios'

export const earthObjectShow = (earthObjects) => {
  console.log(earthObjects)
    return axios({
      url: apiUrl + "/feed?start_date=" + earthObjects.startDate +"&end_date=" + earthObjects.endDate + "&api_key=DEMO_KEY",
      method: 'GET'
    })
  }
