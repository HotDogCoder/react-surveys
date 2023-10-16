
import { Dispatch } from 'redux';
import { UserAccount, UserAccountActionTypes, UserAccountRequest, UserAccountResponse, UserAccountState } from '../types/user_account_types';
import axios, { AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';

export const postUserAccount = (data: UserAccount) => async (dispatch: Dispatch<UserAccountActionTypes>) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        dispatch({ type: 'POST_USER_ACCOUNT', payload: {...data, id: 0} });
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, data, config);

        dispatch({ type: 'POST_SUCCESS_USER_ACCOUNT', payload: { ...response.data, isAuthenticated: true,error: null, message: "POST_SUCCESS" } });
        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });

    } catch (error) {
        // Handle other types of errors (e.g., network issues)
         
        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });

        dispatch({ type: 'POST_FAIL_USER_ACCOUNT', payload: { error, message: "Usuario no valido" } });
    }
};

export const putUserAccount = (data: UserAccountRequest) => (dispatch: Dispatch<UserAccountActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        
        dispatch({ type: 'PUT_USER_ACCOUNT', payload: data });
        
        dispatch({ type: 'PUT_SUCCESS_USER_ACCOUNT', payload: {...data, error: null, message: "PUT_SUCCESS"} });
        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });

    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });

        dispatch({ type: 'PUT_FAIL_USER_ACCOUNT', payload: {...data, error: error, message: "PUT_FAIL"} });
    }
}};

export const updateUserAccount = (data: UserAccountRequest) => (dispatch: Dispatch<UserAccountActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        
        dispatch({ type: 'UPDATE_USER_ACCOUNT', payload: data });
        
        dispatch({ type: 'UPDATE_SUCCESS_USER_ACCOUNT', payload: {...data, error: null, message: "UPDATE_SUCCESS"} });

        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });

    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });

        dispatch({ type: 'UPDATE_FAIL_USER_ACCOUNT', payload: {...data, error: error, message: "UPDATE_FAIL"} });
    }
}};

export const deleteUserAccount = (data: UserAccountRequest) => (dispatch: Dispatch<UserAccountActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        
        dispatch({ type: 'DELETE_USER_ACCOUNT', payload: data });
        
        dispatch({ type: 'DELETE_SUCCESS_USER_ACCOUNT', payload: {...data, error: null, message: "DELETE_SUCCESS"} });
        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });

    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });

        dispatch({ type: 'DELETE_FAIL_USER_ACCOUNT', payload: {...data, error: error, message: "DELETE_FAIL"} });
    }
}};

export const getUserAccount = (data: UserAccountRequest) => (dispatch: Dispatch<UserAccountActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        
        dispatch({ type: 'GET_USER_ACCOUNT', payload: data });
        
        dispatch({ type: 'GET_SUCCESS_USER_ACCOUNT', payload: {...data, error: null, message: "GET_SUCCESS"} });
        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });

    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });

        dispatch({ type: 'GET_FAIL_USER_ACCOUNT', payload: {...data, error: error, message: "GET_FAIL"} });
    }
}};

export const verifyUserAccount = (): ThunkAction<void, UserAccountState, null, UserAccountActionTypes> => async (dispatch) => {
    dispatch({ type: 'START_LOADING', payload: { error: null, message: "START_LOADING"  }});
        
    if ( localStorage.getItem('access_token') ) {
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        };
        try {
            const body = JSON.stringify({ "token": localStorage.getItem('access_token') });
            const token = localStorage.getItem('access_token')
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/verify?token=${token}`, config)
        
            dispatch ({
                type: 'VERIFY_SUCCESS_USER_ACCOUNT',
                payload: response.data
            });
            dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });
        
        } catch (error) {
            console.log('correcto fallo')
            dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });
            dispatch ({
                type: 'VERIFY_FAIL_USER_ACCOUNT',
                payload: { 
                    id: 0,
                    name: '',
                    error: error
                }
            });
            dispatch(refreshUserAccount())
        }
    } else {
        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });

        dispatch ({
            type: 'DEFAULT_USER_ACCOUNT',
            payload: null
        })
    }
};


export const refreshUserAccount = (): ThunkAction<void, any, null, any> => async (dispatch) => {
    dispatch({ type: 'START_LOADING', payload: { error: null, message: "START_LOADING"} });
    if ( localStorage.getItem('access_token') ) {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            const body = JSON.stringify({ "RefreshToken": localStorage.getItem('access_token') });
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/refresh`, body, config);
            dispatch ({
                type: 'REFRESH_USER_ACCOUNT',
                payload: response.data
            });
            dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });
            dispatch({ type: 'REFRESH_SUCCESS_USER_ACCOUNT', payload: {...response.data, error: null, message: "REFRESH_SUCCESS"} });
        } catch (error) {
            console.log(error);
            dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });

            dispatch({ type: 'REFRESH_FAIL_USER_ACCOUNT', payload: {
                id: 0,
                name: '',
                error: error, 
                message: "REFRESH_FAIL"
            } });

            dispatch ({
                type: 'DEFAULT_USER_ACCOUNT',
                payload: null
            })
    
        }
    } else {
        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });

        dispatch ({
            type: 'DEFAULT_USER_ACCOUNT',
            payload: null
        })
    }
};


export const logoutUserAccount = () => async (dispatch: Dispatch<UserAccountActionTypes>) => {{
    dispatch({ type: 'START_LOADING', payload: {error: null, message: "START_LOADING"} });
        
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        //const response = await axios.post(`${process.env.REACT_APP_API_URL}/dj-rest-auth/logout/`, {},config);
        dispatch({ type: 'LOGOUT_USER_ACCOUNT', payload: {
            id: 0,
            name: '',
            data: []
        } });
        
        dispatch({ type: 'LOGOUT_SUCCESS_USER_ACCOUNT', payload: {...{
            id: 0,
            name: '',
            data: []
        }, error: null, message: "LOGOUT_SUCCESS"} });
        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });
        
    } catch (error) {
        
        dispatch({ type: 'END_LOADING', payload: { id: 0, name: '', error: null, message: "END_LOADING"} });
        dispatch({ type: 'LOGOUT_FAIL_USER_ACCOUNT', payload: {
            error: error, 
            message: "LOGOUT_FAIL",
            id: 0,
            name: '',
        } });
    }
}};
// [ANCHOR_1]
        
        
        
    