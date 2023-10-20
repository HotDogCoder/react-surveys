
import { SurveyResponseActionTypes, SurveyResponseState, SurveyResponseRequest } from '../types/survey_response_types';
import axios from 'axios'
axios.defaults.withCredentials = true;

const initialState: SurveyResponseState = {
    id: 0,
    name: '',
    data: [],
    survey_responses: [],
    error: null,
    message: '',
    loading: false,
    selected: null,
    deleted: null,
    new_one: null,
    new_ones: [],
};

const SurveyResponseReducer = (state = initialState, action: SurveyResponseActionTypes) => {
    switch (action.type) {
        
        case 'POST_SURVEY_RESPONSE':
            return {...state, error: null, message: action.payload.message};
        case 'POST_SUCCESS_SURVEY_RESPONSE':
            return {...state, error: null, message: action.payload.message};
        case 'POST_FAIL_SURVEY_RESPONSE':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'PUT_SURVEY_RESPONSE':
            return {...state, data: []};
        case 'PUT_SUCCESS_SURVEY_RESPONSE':
            return {...state, error: null, message: "PUT_SUCCESS_SURVEY_RESPONSE"};
        case 'PUT_FAIL_SURVEY_RESPONSE':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'UPDATE_SURVEY_RESPONSE':
            return {...state, data: []};
        case 'UPDATE_SUCCESS_SURVEY_RESPONSE':
            return {...state, error: null, message: action.payload.message};
        case 'UPDATE_FAIL_SURVEY_RESPONSE':
            return {...state, error: action.payload.error, message: action.payload.message};
            
        case 'DELETE_SURVEY_RESPONSE':
            return {...state, survey_responses: [], error: null, message: action.payload.message};
        case 'DELETE_SUCCESS_SURVEY_RESPONSE':
            return {...state, error: null, message: action.payload.message};
        case 'DELETE_FAIL_SURVEY_RESPONSE':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'GET_SURVEY_RESPONSE':
            return {...state, data: []};
        case 'GET_SUCCESS_SURVEY_RESPONSE':
            return {...state, error: null, survey_responses: action.payload!};
        case 'GET_FAIL_SURVEY_RESPONSE':
            return {...state, error: action.payload.error, message: action.payload.message};
// [ANCHOR_1]

        case 'SELECT_SURVEY_RESPONSE':
            return {...state, selected: action.payload};
        case 'SELECT_SUCCESS_SURVEY_RESPONSE':
            return {...state, error: null, message: action.payload.message};
        case 'SELECT_FAIL_SURVEY_RESPONSE':
            return {...state, error: action.payload.error, message: action.payload.message};

        case 'START_LOADING':
            return {...state, loading: true};
        case 'END_LOADING':
            return {...state, loading: false};
        default:
            return state;
    }
};

export default SurveyResponseReducer;
    