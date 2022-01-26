import axios from 'axios'
import isNil from 'lodash/isNil'

const baseUrl = process.env.REACT_APP_API_HOST?.replace(/\/$/, '')
const getAPIUrl = (url: string) => (url.startsWith('http') ? url : `${baseUrl}${url}`)

const initialOptions = {
  headers: {
    'Content-type': 'application/json',
  },
}

export function get<T>(url: string, queryParams: UnknownMap = {}): Promise<T> {
  return new Promise((resolve, reject) => {
    axios
      .get<T>(getAPIUrl(url), { ...initialOptions, params: queryParams })
      .then((result) => {
        if (result.data) {
          resolve(result.data)
        } else {
          reject({ error: { message: 'empty' } })
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function post<T>(url: string, body: UnknownMap, queryParams: UnknownMap = {}): Promise<T> {
  return new Promise((resolve, reject) => {
    axios
      .post<T>(getAPIUrl(url), body, { ...initialOptions, params: queryParams })
      .then((result) => {
        if (result.data) {
          resolve(result.data)
        } else {
          reject({ error: { message: 'empty' } })
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function put<T>(url: string, body: UnknownMap, queryParams: UnknownMap = {}): Promise<T> {
  return new Promise((resolve, reject) => {
    axios
      .post<T>(getAPIUrl(url), body, { ...initialOptions, params: queryParams })
      .then((result) => {
        if (result.data) {
          resolve(result.data)
        } else {
          reject({ error: { message: 'empty' } })
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function patch<T>(url: string, body: UnknownMap, queryParams: UnknownMap = {}): Promise<T> {
  return new Promise((resolve, reject) => {
    axios
      .post<T>(getAPIUrl(url), body, { ...initialOptions, params: queryParams })
      .then((result) => {
        if (result.data) {
          resolve(result.data)
        } else {
          reject({ error: { message: 'empty' } })
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function deleteR<T>(url: string, id?: number | string, queryParams: UnknownMap = {}): Promise<T> {
  return new Promise((resolve, reject) => {
    const deleteUrl = !isNil(id) ? `${getAPIUrl(url)}/${id}` : url

    axios
      .post<T>(deleteUrl, { ...initialOptions, params: queryParams })
      .then((result) => {
        if (result.data) {
          resolve(result.data)
        } else {
          reject({ error: { message: 'empty' } })
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default { get, post, put, patch, delete: deleteR }
