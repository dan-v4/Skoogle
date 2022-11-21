import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const getSkaters= async() => {
    const response = await api.get('/skaters')
    return response.data
}

export const getVideos = async() => {
    const response = await api.get('/videos')
    return response.data
}

export const getCompanies = async() => {
    const response = await api.get('/companies')
    return response.data
}

export const getAll = async() => {
    const response = await api.get('/all')
    return response.data
}