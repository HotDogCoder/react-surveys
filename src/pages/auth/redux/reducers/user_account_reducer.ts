
import { UserAccountActionTypes, UserAccountState } from '../types/user_account_types';

const initialState: UserAccountState = {
    id: 0,
    name: '',
    data: [],
    error: null,
    message: '',
    user: undefined,
    access: localStorage.getItem('access')!,
    isAuthenticated: false,
    first_name: '',
    last_name: '',
    email: '',
    picture: ''
};

const UserAccountReducer = (state = initialState, action: UserAccountActionTypes) => {
    switch (action.type) {
        
        case 'POST_USER_ACCOUNT':
            return {...state};
            
        case 'POST_SUCCESS_USER_ACCOUNT':
            // localStorage.setItem('access', action.payload.access!);
            localStorage.setItem('access_token', action.payload.token!);
            return {...state, token: action.payload.token!, isAuthenticated: true, error: null, message: action.payload.message!};
        case 'POST_FAIL_USER_ACCOUNT':
            // localStorage.removeItem('access'); 
            localStorage.removeItem('access_token'); 
            return {...state, access: null, isAuthenticate: false, user: null, error: action.payload.error, message: action.payload.message, non_field_errors: action.payload.non_field_errors};
        
        case 'PUT_USER_ACCOUNT':
            // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/`, {});
            // console.log(response)
            return {...state, data: []};
        case 'PUT_SUCCESS_USER_ACCOUNT':
            return {...state, error: null, message: action.payload.message!};
        case 'PUT_FAIL_USER_ACCOUNT':
            return {...state, error: action.payload.error!, message: action.payload.message!};
        
        case 'UPDATE_USER_ACCOUNT':
            // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/`, {});
            // console.log(response)
            return {...state, data: []};
        case 'UPDATE_SUCCESS_USER_ACCOUNT':
            return {...state, error: null, message: action.payload.message};
        case 'UPDATE_FAIL_USER_ACCOUNT':
            return {...state, error: action.payload.error!, message: action.payload.message};
            
        case 'DELETE_USER_ACCOUNT':
            // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/`, {});
            // console.log(response)
            return {...state, data: []};
        case 'DELETE_SUCCESS_USER_ACCOUNT':
            return {...state, error: null, message: action.payload.message};
        case 'DELETE_FAIL_USER_ACCOUNT':
            return {...state, error: action.payload.error!, message: action.payload.message};
        
        case 'GET_USER_ACCOUNT':
            // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/`, {});
            // console.log(response)
            return state;
        case 'GET_SUCCESS_USER_ACCOUNT':
            return {...state, user: action.payload.user};
        case 'GET_FAIL_USER_ACCOUNT':
            return {...state, user: null, error: action.payload.error, message: action.payload.message};

        case 'VERIFY_USER_ACCOUNT':
            return state;
        case 'VERIFY_SUCCESS_USER_ACCOUNT':
            return {...state, isAuthenticated: true};
        case 'VERIFY_FAIL_USER_ACCOUNT':
            return {...state, error: action.payload.error!, isAuthenticated: false};

        case 'REFRESH_USER_ACCOUNT':
            return state;
        case 'REFRESH_SUCCESS_USER_ACCOUNT':
            localStorage.setItem('access_token', action.payload.token!);
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                message: "Refresh token success"
            }
        case 'REFRESH_FAIL_USER_ACCOUNT':
            localStorage.removeItem('access_token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                message: "Refresh token fail"
            }

        case 'LOGOUT_USER_ACCOUNT':
            localStorage.removeItem('access_token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                message: "User has logged out"
            }
        case 'LOGOUT_SUCCESS_USER_ACCOUNT':
            return {...state, data: []};
        case 'LOGOUT_FAIL_USER_ACCOUNT':
            return {...state, error: action.payload.error, data: []};
// [ANCHOR_1]
        
        
        
        case 'START_LOADING':
            return {...state, loading: true};
        case 'END_LOADING':
            return {...state, loading: false};
        
        case 'DEFAULT_USER_ACCOUNT':
            localStorage.removeItem('access_token');
            localStorage.removeItem('user');
            localStorage.removeItem('access');
            return {...initialState};
        
        default:
            return state;
    }
};

export default UserAccountReducer;
    