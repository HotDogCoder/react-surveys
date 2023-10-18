
import { Dispatch } from 'redux';
import { UserSurveyResponseActionTypes, UserSurveyResponseRequest, UserSurveyResponseState } from '../types/user_survey_response_types';
import axios from 'axios';
import { SurveyRequest } from '../types/survey_types';
axios.defaults.withCredentials = true;

export const postUserSurveyResponse = (data: SurveyRequest) => async (dispatch: Dispatch<UserSurveyResponseActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.post(`${process.env.REACT_APP_NETCORE_API_URL}/api/UserSurveyResponse`, data);
        dispatch({ type: 'POST_USER_SURVEY_RESPONSE', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_SUCCESS_USER_SURVEY_RESPONSE', payload: {...response.data, error: null, message: "POST_USER_SURVEY_RESPONSE_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_FAIL_USER_SURVEY_RESPONSE', payload: {...data, error: error, message: "POST_USER_SURVEY_RESPONSE_FAIL"} });
    }
}};

export const putUserSurveyResponse = (data: UserSurveyResponseRequest) => async (dispatch: Dispatch<UserSurveyResponseActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_NETCORE_API_URL}/api/legal-surfer/user_survey_response?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'PUT_USER_SURVEY_RESPONSE', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_SUCCESS_USER_SURVEY_RESPONSE', payload: {...response.data, error: null, message: "PUT_USER_SURVEY_RESPONSE_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_FAIL_USER_SURVEY_RESPONSE', payload: {...data, error: error, message: "PUT_USER_SURVEY_RESPONSE_FAIL"} });
    }
}};

export const updateUserSurveyResponse = (data: UserSurveyResponseRequest) => async (dispatch: Dispatch<UserSurveyResponseActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_NETCORE_API_URL}/api/legal-surfer/user_survey_response?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'UPDATE_USER_SURVEY_RESPONSE', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_SUCCESS_USER_SURVEY_RESPONSE', payload: {...response.data, error: null, message: "UPDATE_USER_SURVEY_RESPONSE_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_FAIL_USER_SURVEY_RESPONSE', payload: {...data, error: error, message: "UPDATE_USER_SURVEY_RESPONSE_FAIL"} });
    }
}};

export const deleteUserSurveyResponse = (data: UserSurveyResponseRequest) => async (dispatch: Dispatch<UserSurveyResponseActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.delete(`${process.env.REACT_APP_NETCORE_API_URL}/api/legal-surfer/user_survey_response?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'DELETE_USER_SURVEY_RESPONSE', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_SUCCESS_USER_SURVEY_RESPONSE', payload: {...response.data, error: null, message: "DELETE_USER_SURVEY_RESPONSE_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_FAIL_USER_SURVEY_RESPONSE', payload: {...data, error: error, message: "DELETE_USER_SURVEY_RESPONSE_FAIL"} });
    }
}};

export const getUserSurveyResponse = (data: UserSurveyResponseRequest) => async (dispatch: Dispatch<UserSurveyResponseActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.get(`${process.env.REACT_APP_NETCORE_API_URL}/api/user_survey_response?id=${data.id}&name=${data.name}`);
        
        dispatch({ type: 'GET_USER_SURVEY_RESPONSE', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_SUCCESS_USER_SURVEY_RESPONSE', payload: {...response.data, error: null, message: "GET_USER_SURVEY_RESPONSE_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_FAIL_USER_SURVEY_RESPONSE', payload: {...data, error: error, message: "GET_USER_SURVEY_RESPONSE_FAIL"} });
    }
}};
// [ANCHOR_1]
    