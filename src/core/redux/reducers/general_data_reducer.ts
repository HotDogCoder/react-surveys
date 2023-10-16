
import { GeneralDataActionTypes, GeneralDataState, GeneralDataRequest } from '../types/general_data_types';
import axios from 'axios'

axios.defaults.withCredentials = true;

const initialState: GeneralDataState = {
    id: 0,
    name: '',
    data: [],
    error: null,
    message: '',
    loading: false,
    selected: null,
    deleted: null,
    new_one: null,
    new_ones: [],
};

const GeneralDataReducer = (state = initialState, action: GeneralDataActionTypes) => {
    switch (action.type) {
        
        case 'POST_GENERAL_DATA':
            return {...state, data: action.payload.data, error: null, message: action.payload.message};
        case 'POST_SUCCESS_GENERAL_DATA':
            return {...state, error: null, message: action.payload.message};
        case 'POST_FAIL_GENERAL_DATA':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'PUT_GENERAL_DATA':
            return {...state, data: []};
        case 'PUT_SUCCESS_GENERAL_DATA':
            return {...state, error: null, message: action.payload.message};
        case 'PUT_FAIL_GENERAL_DATA':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'UPDATE_GENERAL_DATA':
            return {...state, data: []};
        case 'UPDATE_SUCCESS_GENERAL_DATA':
            return {...state, error: null, message: action.payload.message};
        case 'UPDATE_FAIL_GENERAL_DATA':
            return {...state, data: action.payload.error, message: action.payload.message};
            
        case 'DELETE_GENERAL_DATA':
            return {...state, data: [...action.payload.data!.filter((x:GeneralDataRequest) => x.id !== action.payload.deleted?.id) || []], error: null, message: action.payload.message};
        case 'DELETE_SUCCESS_GENERAL_DATA':
            return {...state, error: null, message: action.payload.message};
        case 'DELETE_FAIL_GENERAL_DATA':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'GET_GENERAL_DATA':

            return {...state};
        case 'GET_SUCCESS_GENERAL_DATA':
            return {...state, error: null, message: action.payload.message};
        case 'GET_FAIL_GENERAL_DATA':
            return {...state, error: action.payload.error, message: action.payload.message};
// [ANCHOR_1]

        case 'SELECT_GENERAL_DATA':
            return {...state, selected: action.payload};
        case 'SELECT_SUCCESS_GENERAL_DATA':
            return {...state, error: null, message: action.payload.message};
        case 'SELECT_FAIL_GENERAL_DATA':
            return {...state, error: action.payload.error, message: action.payload.message};

        case 'START_LOADING':
            return {...state, loading: true};
        case 'END_LOADING':
            return {...state, loading: false};
        default:
            return state;
    }
};

export default GeneralDataReducer;
    