
import { Dispatch } from 'redux';
import { SurveyResponseActionTypes, SurveyResponseRequest, SurveyResponseState } from '../types/survey_response_types';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const postSurveyResponse = (data: SurveyResponseRequest) => async (dispatch: Dispatch<SurveyResponseActionTypes>) => {{
    try {
        const token = localStorage.getItem('access_token'); // Assuming you store your JWT in localStorage
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.post(`${process.env.REACT_APP_NETCORE_API_URL}/api/legal-surfer/survey_response`, data);
        dispatch({ type: 'POST_SURVEY_RESPONSE', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_SUCCESS_SURVEY_RESPONSE', payload: {...response.data, error: null, message: "POST_SURVEY_RESPONSE_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_FAIL_SURVEY_RESPONSE', payload: {...data, error: error, message: "POST_SURVEY_RESPONSE_FAIL"} });
    }
}};

export const putSurveyResponse = (data: SurveyResponseRequest) => async (dispatch: Dispatch<SurveyResponseActionTypes>) => {{
    try {
        const token = localStorage.getItem('access_token'); // Assuming you store your JWT in localStorage
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_NETCORE_API_URL}/api/legal-surfer/survey_response?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'PUT_SURVEY_RESPONSE', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_SUCCESS_SURVEY_RESPONSE', payload: {...response.data, error: null, message: "PUT_SURVEY_RESPONSE_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_FAIL_SURVEY_RESPONSE', payload: {...data, error: error, message: "PUT_SURVEY_RESPONSE_FAIL"} });
    }
}};

export const updateSurveyResponse = (data: SurveyResponseRequest) => async (dispatch: Dispatch<SurveyResponseActionTypes>) => {{
    try {
        const token = localStorage.getItem('access_token'); // Assuming you store your JWT in localStorage
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_NETCORE_API_URL}/api/legal-surfer/survey_response?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'UPDATE_SURVEY_RESPONSE', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_SUCCESS_SURVEY_RESPONSE', payload: {...response.data, error: null, message: "UPDATE_SURVEY_RESPONSE_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_FAIL_SURVEY_RESPONSE', payload: {...data, error: error, message: "UPDATE_SURVEY_RESPONSE_FAIL"} });
    }
}};

export const deleteSurveyResponse = (data: SurveyResponseRequest) => async (dispatch: Dispatch<SurveyResponseActionTypes>) => {{
    try {
        const token = localStorage.getItem('access_token'); // Assuming you store your JWT in localStorage
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.delete(`${process.env.REACT_APP_NETCORE_API_URL}/api/legal-surfer/survey_response?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'DELETE_SURVEY_RESPONSE', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_SUCCESS_SURVEY_RESPONSE', payload: {...response.data, error: null, message: "DELETE_SURVEY_RESPONSE_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_FAIL_SURVEY_RESPONSE', payload: {...data, error: error, message: "DELETE_SURVEY_RESPONSE_FAIL"} });
    }
}};

export const getSurveyResponse = (data: SurveyResponseRequest) => async (dispatch: Dispatch<SurveyResponseActionTypes>) => {{
    try {
        const token = localStorage.getItem('access_token'); // Assuming you store your JWT in localStorage
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        dispatch({ type: 'GET_SURVEY_RESPONSE', payload: data });
        const response = await axios.get(`${process.env.REACT_APP_NETCORE_API_URL}/api/SurveyResponse`);
        
        
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_SUCCESS_SURVEY_RESPONSE', payload: response.data });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_FAIL_SURVEY_RESPONSE', payload: {...data, error: error, message: "GET_SURVEY_RESPONSE_FAIL"} });
    }
}};
// [ANCHOR_1]
    