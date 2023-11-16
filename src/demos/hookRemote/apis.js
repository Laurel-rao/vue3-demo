import axios from 'axios'
export function update() {
    return axios.get('http://127.0.0.1:5000/update')
}

export function get() {
    return axios.get('http://127.0.0.1:5000/get')
}
