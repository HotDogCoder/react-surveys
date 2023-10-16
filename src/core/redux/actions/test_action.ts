
import { Dispatch } from 'redux';
import { TestActionTypes, TestRequest, TestState } from '../types/test_types';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const postTest = (data: TestRequest) => async (dispatch: Dispatch<TestActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const body = [{
            "ip": "string",
            "address": "string",
            "country": "string"
        }]
        const response = await axios.post(`${process.env.REACT_APP_NETCORE_API_URL}/GeoApi/PostGeoApiClasses`, body);
        dispatch({ type: 'POST_TEST', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_SUCCESS_TEST', payload: {...response.data, error: null, message: "POST_TEST_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_FAIL_TEST', payload: {...data, error: error, message: "POST_TEST_FAIL"} });
    }
}};

export const putTest = (data: TestRequest) => async (dispatch: Dispatch<TestActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/legal-surfer/test?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'PUT_TEST', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_SUCCESS_TEST', payload: {...response.data, error: null, message: "PUT_TEST_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_FAIL_TEST', payload: {...data, error: error, message: "PUT_TEST_FAIL"} });
    }
}};

export const updateTest = (data: TestRequest) => async (dispatch: Dispatch<TestActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/legal-surfer/test?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'UPDATE_TEST', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_SUCCESS_TEST', payload: {...response.data, error: null, message: "UPDATE_TEST_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_FAIL_TEST', payload: {...data, error: error, message: "UPDATE_TEST_FAIL"} });
    }
}};

export const deleteTest = (data: TestRequest) => async (dispatch: Dispatch<TestActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/legal-surfer/test?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'DELETE_TEST', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_SUCCESS_TEST', payload: {...response.data, error: null, message: "DELETE_TEST_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_FAIL_TEST', payload: {...data, error: error, message: "DELETE_TEST_FAIL"} });
    }
}};

export const getTest = (data: TestRequest) => async (dispatch: Dispatch<TestActionTypes>) => {{

    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        // const response = await axios.get(`${process.env.REACT_APP_NETCORE_API_URL}/GeoApi/GetGeoApiClasses`);
        const response = await axios.get(`${process.env.REACT_APP_NETCORE_API_URL}/GeoApi/GetGeoApiClasses`);
        
        dispatch({ type: 'GET_TEST', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_SUCCESS_TEST', payload: {...response.data, error: null, message: "GET_TEST_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_FAIL_TEST', payload: {...data, error: error, message: "GET_TEST_FAIL"} });
    }
}};
// [ANCHOR_1]
    