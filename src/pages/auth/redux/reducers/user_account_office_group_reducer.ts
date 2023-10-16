
import { UserAccountOfficeGroupActionTypes, UserAccountOfficeGroupRequest, UserAccountOfficeGroupState } from '../types/user_account_office_group_types';
import axios from 'axios'
axios.defaults.withCredentials = true;

const initialState: UserAccountOfficeGroupState = {
    id: 0,
    name: '',
    data: [],
    user_account_office_groups: [],
    error: null,
    message: '',
    loading: false,
    selected: null,
    deleted: null,
    new_one: null,
    new_ones: [],
};

const UserAccountOfficeGroupReducer = (state = initialState, action: UserAccountOfficeGroupActionTypes) => {
    switch (action.type) {
        
        case 'POST_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, user_account_office_groups: [...state.user_account_office_groups || [], action.payload.new_one!], error: null, message: action.payload.message};
        case 'POST_SUCCESS_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, error: null, message: action.payload.message};
        case 'POST_FAIL_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'PUT_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, data: []};
        case 'PUT_SUCCESS_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, error: null, message: action.payload.message};
        case 'PUT_FAIL_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'UPDATE_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, data: []};
        case 'UPDATE_SUCCESS_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, error: null, message: action.payload.message};
        case 'UPDATE_FAIL_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, error: action.payload.error, message: action.payload.message};
            
        case 'DELETE_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, user_account_office_groups: action.payload.user_account_office_groups?.filter((x:UserAccountOfficeGroupRequest)=> x.id !== action.payload.deleted?.id), error: null, message: action.payload.message};
        case 'DELETE_SUCCESS_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, error: null, message: action.payload.message};
        case 'DELETE_FAIL_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'GET_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, user_account_office_groups: action.payload.user_account_office_groups, error: null, message: action.payload.message};
        case 'GET_SUCCESS_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, error: null, message: action.payload.message};
        case 'GET_FAIL_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, error: action.payload.error, message: action.payload.message};
// [ANCHOR_1]

        case 'SELECT_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, selected: action.payload};
        case 'SELECT_SUCCESS_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, error: null, message: action.payload.message};
        case 'SELECT_FAIL_USER_ACCOUNT_OFFICE_GROUP':
            return {...state, error: action.payload.error, message: action.payload.message};

        case 'START_LOADING':
            return {...state, loading: true};
        case 'END_LOADING':
            return {...state, loading: false};
        default:
            return state;
    }
};

export default UserAccountOfficeGroupReducer;
    