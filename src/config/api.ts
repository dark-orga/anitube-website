import axios from 'axios'

import { config } from '.'

export const api = axios.create({
  baseURL: config.animeApiUrl,
})
