
import { TestActionTypes, TestState, TestRequest } from '../types/test_types';
import axios from 'axios'
axios.defaults.withCredentials = true;

const initialState: TestState = {
    id: 0,
    name: '',
    data: [],
    tests: [],
    error: null,
    message: '',
    loading: false,
    selected: null,
    deleted: null,
    new_one: null,
    new_ones: [],
};

const TestReducer = (state = initialState, action: TestActionTypes) => {
    switch (action.type) {
        
        case 'POST_TEST':
            return {...state, tests: action.payload.tests, error: null, message: action.payload.message};
        case 'POST_SUCCESS_TEST':
            return {...state, error: null, message: action.payload.message};
        case 'POST_FAIL_TEST':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'PUT_TEST':
            return {...state, data: []};
        case 'PUT_SUCCESS_TEST':
            return {...state, error: null, message: action.payload.message};
        case 'PUT_FAIL_TEST':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'UPDATE_TEST':
            return {...state, data: []};
        case 'UPDATE_SUCCESS_TEST':
            return {...state, error: null, message: action.payload.message};
        case 'UPDATE_FAIL_TEST':
            return {...state, error: action.payload.error, message: action.payload.message};
            
        case 'DELETE_TEST':
            return {...state, tests: action.payload.tests?.filter((x:TestRequest) => x.id !== action.payload.deleted?.id), error: null, message: action.payload.message};
        case 'DELETE_SUCCESS_TEST':
            return {...state, error: null, message: action.payload.message};
        case 'DELETE_FAIL_TEST':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'GET_TEST':
            return {...state, data: []};
        case 'GET_SUCCESS_TEST':
            return {...state, error: null, message: action.payload.message};
        case 'GET_FAIL_TEST':
            return {...state, error: action.payload.error, message: action.payload.message};
// [ANCHOR_1]

        case 'SELECT_TEST':
            return {...state, selected: action.payload};
        case 'SELECT_SUCCESS_TEST':
            return {...state, error: null, message: action.payload.message};
        case 'SELECT_FAIL_TEST':
            return {...state, error: action.payload.error, message: action.payload.message};

        case 'START_LOADING':
            return {...state, loading: true};
        case 'END_LOADING':
            return {...state, loading: false};
        default:
            return state;
    }
};

export default TestReducer;
    