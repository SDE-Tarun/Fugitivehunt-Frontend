import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

export const getCities = () => {
    return axios.get(`${API_BASE_URL}/cities`);
};

export const getVehicles = () => {
    return axios.get(`${API_BASE_URL}/vehicles`);
};

export const selectCity = (cop, city) => {
    return axios.post(`${API_BASE_URL}/select-city`, { cop, city });
};

export const selectVehicle = (cop, vehicle) => {
    return axios.post(`${API_BASE_URL}/select-vehicle`, { cop, vehicle });
};

export const getResult = () => {
    return axios.get(`${API_BASE_URL}/result`);
};