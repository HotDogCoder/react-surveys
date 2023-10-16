
import { Dispatch } from 'redux';
import { SurveyActionTypes, SurveyRequest, SurveyState } from '../types/survey_types';
import axios from 'axios';
const token = localStorage.getItem('access_token'); // Assuming you store your JWT in localStorage
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const postSurvey = (data: SurveyRequest) => async (dispatch: Dispatch<SurveyActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/Survey`, data);
        dispatch({ type: 'POST_SURVEY', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_SUCCESS_SURVEY', payload: {...response.data, error: null, message: "POST_SURVEY_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_FAIL_SURVEY', payload: {...data, error: error, message: "POST_SURVEY_FAIL"} });
    }
}};

export const putSurvey = (data: SurveyRequest) => async (dispatch: Dispatch<SurveyActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/Survey/${data.id}`, data);
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_SURVEY', payload: response.data });
        
        dispatch({ type: 'PUT_SUCCESS_SURVEY', payload: {...response.data, error: null, message: "PUT_SURVEY_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_FAIL_SURVEY', payload: {...data, error: error, message: "PUT_SURVEY_FAIL"} });
    }
}};

export const updateSurvey = (data: SurveyRequest) => async (dispatch: Dispatch<SurveyActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/legal-surfer/survey?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'UPDATE_SURVEY', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_SUCCESS_SURVEY', payload: {...response.data, error: null, message: "UPDATE_SURVEY_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_FAIL_SURVEY', payload: {...data, error: error, message: "UPDATE_SURVEY_FAIL"} });
    }
}};

export const deleteSurvey = (data: SurveyRequest) => async (dispatch: Dispatch<SurveyActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/legal-surfer/survey?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'DELETE_SURVEY', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_SUCCESS_SURVEY', payload: {...response.data, error: null, message: "DELETE_SURVEY_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_FAIL_SURVEY', payload: {...data, error: error, message: "DELETE_SURVEY_FAIL"} });
    }
}};

export const getSurvey = (data: SurveyRequest) => async (dispatch: Dispatch<SurveyActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Survey`);
        
        dispatch({ type: 'GET_SURVEY', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_SUCCESS_SURVEY', payload: {...response.data, error: null, message: "GET_SURVEY_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_FAIL_SURVEY', payload: {...data, error: error, message: "GET_SURVEY_FAIL"} });
    }
}};


export const addQuestionSurvey = (data: SurveyState) => (dispatch: Dispatch<SurveyActionTypes>) => {{
    try {
        dispatch({ type: 'ADD_QUESTION_SURVEY', payload: data });
        
        dispatch({ type: 'ADD_QUESTION_SUCCESS_SURVEY', payload: {...data, error: null, message: "ADD_QUESTION_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'ADD_QUESTION_FAIL_SURVEY', payload: {...data, error: error, message: "ADD_QUESTION_FAIL"} });
    }
}};


export const addOptionSurvey = (data: SurveyState) => (dispatch: Dispatch<SurveyActionTypes>) => {{
    try {
        dispatch({ type: 'ADD_OPTION_SURVEY', payload: data });
        
        dispatch({ type: 'ADD_OPTION_SUCCESS_SURVEY', payload: {...data, error: null, message: "ADD_OPTION_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'ADD_OPTION_FAIL_SURVEY', payload: {...data, error: error, message: "ADD_OPTION_FAIL"} });
    }
}};


export const getQuestionSurvey = (data: SurveyState) => (dispatch: Dispatch<SurveyActionTypes>) => {{
    try {
        dispatch({ type: 'GET_QUESTION_SURVEY', payload: data });
        
        dispatch({ type: 'GET_QUESTION_SUCCESS_SURVEY', payload: {...data, error: null, message: "GET_QUESTION_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'GET_QUESTION_FAIL_SURVEY', payload: {...data, error: error, message: "GET_QUESTION_FAIL"} });
    }
}};


export const getOptionSurvey = (data: SurveyState) => (dispatch: Dispatch<SurveyActionTypes>) => {{
    try {
        dispatch({ type: 'GET_OPTION_SURVEY', payload: data });
        
        dispatch({ type: 'GET_OPTION_SUCCESS_SURVEY', payload: {...data, error: null, message: "GET_OPTION_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'GET_OPTION_FAIL_SURVEY', payload: {...data, error: error, message: "GET_OPTION_FAIL"} });
    }
}};


export const addUserResponseSurvey = (data: SurveyState) => (dispatch: Dispatch<SurveyActionTypes>) => {{
    try {
        dispatch({ type: 'ADD_USER_RESPONSE_SURVEY', payload: data });
        
        dispatch({ type: 'ADD_USER_RESPONSE_SUCCESS_SURVEY', payload: {...data, error: null, message: "ADD_USER_RESPONSE_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'ADD_USER_RESPONSE_FAIL_SURVEY', payload: {...data, error: error, message: "ADD_USER_RESPONSE_FAIL"} });
    }
}};


export const getRankingSurvey = (data: SurveyRequest) => async (dispatch: Dispatch<SurveyActionTypes>) => {{
    try {
        dispatch({ type: 'GET_RANKING_SURVEY', payload: data });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Ranking`);
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_RANKING_SUCCESS_SURVEY', payload: response.data });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_RANKING_FAIL_SURVEY', payload: {...data, error: error, message: "GET_RANKING_FAIL"} });
    }
}};
// [ANCHOR_1]
        
        
        
        
        
        
    