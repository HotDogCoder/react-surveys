
import { Dispatch } from 'redux';
import { GeneralDataActionTypes, GeneralDataRequest, GeneralDataState } from '../types/general_data_types';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const postGeneralData = (data: GeneralDataRequest) => async (dispatch: Dispatch<GeneralDataActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/legal-surfer/general-data`, data);
        dispatch({ type: 'POST_GENERAL_DATA', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_SUCCESS_GENERAL_DATA', payload: {...response.data, error: null, message: "POST_GENERAL_DATA_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_FAIL_GENERAL_DATA', payload: {...data, error: error, message: "POST_GENERAL_DATA_FAIL"} });
    }
}};

export const putGeneralData = (data: GeneralDataRequest) => async (dispatch: Dispatch<GeneralDataActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/legal-surfer/general-data?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'PUT_GENERAL_DATA', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_SUCCESS_GENERAL_DATA', payload: {...response.data, error: null, message: "PUT_GENERAL_DATA_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_FAIL_GENERAL_DATA', payload: {...data, error: error, message: "PUT_GENERAL_DATA_FAIL"} });
    }
}};

export const updateGeneralData = (data: GeneralDataRequest) => async (dispatch: Dispatch<GeneralDataActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/legal-surfer/general-data?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'UPDATE_GENERAL_DATA', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_SUCCESS_GENERAL_DATA', payload: {...response.data, error: null, message: "UPDATE_GENERAL_DATA_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_FAIL_GENERAL_DATA', payload: {...data, error: error, message: "UPDATE_GENERAL_DATA_FAIL"} });
    }
}};

export const deleteGeneralData = (data: GeneralDataRequest) => async (dispatch: Dispatch<GeneralDataActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/legal-surfer/general-data?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'DELETE_GENERAL_DATA', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_SUCCESS_GENERAL_DATA', payload: {...response.data, error: null, message: "DELETE_GENERAL_DATA_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_FAIL_GENERAL_DATA', payload: {...data, error: error, message: "DELETE_GENERAL_DATA_FAIL"} });
    }
}};

export const getGeneralData = (data: GeneralDataRequest) => async (dispatch: Dispatch<GeneralDataActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/legal-surfer/general-data?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'GET_GENERAL_DATA', payload: response.data });
        
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_SUCCESS_GENERAL_DATA', payload: {...response.data, error: null, message: "GET_GENERAL_DATA_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_FAIL_GENERAL_DATA', payload: {...data, error: error, message: "GET_GENERAL_DATA_FAIL"} });
    }
}};
// [ANCHOR_1]
    