import apiUrl from '../apiConfig'
import axios from 'axios'

export const earthObjectShow = () => {
    return axios({
      url: apiUrl,
      method: 'GET'
    })
  }
