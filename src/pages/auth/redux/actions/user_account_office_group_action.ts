
import { Dispatch } from 'redux';
import { UserAccountOfficeGroupActionTypes, UserAccountOfficeGroupRequest, UserAccountOfficeGroupState } from '../types/user_account_office_group_types';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const postUserAccountOfficeGroup = (data: UserAccountOfficeGroupRequest) => async (dispatch: Dispatch<UserAccountOfficeGroupActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/user-account-office-group`, data);
        dispatch({ type: 'POST_USER_ACCOUNT_OFFICE_GROUP', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_SUCCESS_USER_ACCOUNT_OFFICE_GROUP', payload: {...response.data, error: null, message: "POST_USER_ACCOUNT_OFFICE_GROUP_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_FAIL_USER_ACCOUNT_OFFICE_GROUP', payload: {...data, error: error, message: "POST_USER_ACCOUNT_OFFICE_GROUP_FAIL"} });
    }
}};

export const putUserAccountOfficeGroup = (data: UserAccountOfficeGroupRequest) => async (dispatch: Dispatch<UserAccountOfficeGroupActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/user/user-account-office-group?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'PUT_USER_ACCOUNT_OFFICE_GROUP', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_SUCCESS_USER_ACCOUNT_OFFICE_GROUP', payload: {...response.data, error: null, message: "PUT_USER_ACCOUNT_OFFICE_GROUP_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_FAIL_USER_ACCOUNT_OFFICE_GROUP', payload: {...data, error: error, message: "PUT_USER_ACCOUNT_OFFICE_GROUP_FAIL"} });
    }
}};

export const updateUserAccountOfficeGroup = (data: UserAccountOfficeGroupRequest) => async (dispatch: Dispatch<UserAccountOfficeGroupActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/user/user-account-office-group?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'UPDATE_USER_ACCOUNT_OFFICE_GROUP', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_SUCCESS_USER_ACCOUNT_OFFICE_GROUP', payload: {...response.data, error: null, message: "UPDATE_USER_ACCOUNT_OFFICE_GROUP_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_FAIL_USER_ACCOUNT_OFFICE_GROUP', payload: {...data, error: error, message: "UPDATE_USER_ACCOUNT_OFFICE_GROUP_FAIL"} });
    }
}};

export const deleteUserAccountOfficeGroup = (data: UserAccountOfficeGroupRequest) => async (dispatch: Dispatch<UserAccountOfficeGroupActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/user/user-account-office-group?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'DELETE_USER_ACCOUNT_OFFICE_GROUP', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_SUCCESS_USER_ACCOUNT_OFFICE_GROUP', payload: {...response.data, error: null, message: "DELETE_USER_ACCOUNT_OFFICE_GROUP_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_FAIL_USER_ACCOUNT_OFFICE_GROUP', payload: {...data, error: error, message: "DELETE_USER_ACCOUNT_OFFICE_GROUP_FAIL"} });
    }
}};

export const getUserAccountOfficeGroup = (data: UserAccountOfficeGroupRequest) => async (dispatch: Dispatch<UserAccountOfficeGroupActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/user-account-office-group?id=${data.id}&name=${data.name}`);
        
        dispatch({ type: 'GET_USER_ACCOUNT_OFFICE_GROUP', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_SUCCESS_USER_ACCOUNT_OFFICE_GROUP', payload: {...response.data, error: null, message: "GET_USER_ACCOUNT_OFFICE_GROUP_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_FAIL_USER_ACCOUNT_OFFICE_GROUP', payload: {...data, error: error, message: "GET_USER_ACCOUNT_OFFICE_GROUP_FAIL"} });
    }
}};
// [ANCHOR_1]
    