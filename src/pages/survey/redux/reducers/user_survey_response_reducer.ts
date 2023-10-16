
import { UserSurveyResponseActionTypes, UserSurveyResponseState, UserSurveyResponseRequest } from '../types/user_survey_response_types';
import axios from 'axios'
axios.defaults.withCredentials = true;

const initialState: UserSurveyResponseState = {
    id: 0,
    name: '',
    data: [],
    user_survey_responses: [],
    error: null,
    message: '',
    loading: false,
    selected: null,
    deleted: null,
    new_one: null,
    new_ones: [],
};

const UserSurveyResponseReducer = (state = initialState, action: UserSurveyResponseActionTypes) => {
    switch (action.type) {
        
        case 'POST_USER_SURVEY_RESPONSE':
            return {...state, user_survey_responses: action.payload.user_survey_responses, error: null, message: action.payload.message};
        case 'POST_SUCCESS_USER_SURVEY_RESPONSE':
            return {...state, error: null, message: action.payload.message};
        case 'POST_FAIL_USER_SURVEY_RESPONSE':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'PUT_USER_SURVEY_RESPONSE':
            return {...state, data: []};
        case 'PUT_SUCCESS_USER_SURVEY_RESPONSE':
            return {...state, error: null, message: action.payload.message};
        case 'PUT_FAIL_USER_SURVEY_RESPONSE':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'UPDATE_USER_SURVEY_RESPONSE':
            return {...state, data: []};
        case 'UPDATE_SUCCESS_USER_SURVEY_RESPONSE':
            return {...state, error: null, message: action.payload.message};
        case 'UPDATE_FAIL_USER_SURVEY_RESPONSE':
            return {...state, error: action.payload.error, message: action.payload.message};
            
        case 'DELETE_USER_SURVEY_RESPONSE':
            return {...state, user_survey_responses: action.payload.user_survey_responses?.filter((x:UserSurveyResponseRequest) => x.id !== action.payload.deleted?.id), error: null, message: action.payload.message};
        case 'DELETE_SUCCESS_USER_SURVEY_RESPONSE':
            return {...state, error: null, message: action.payload.message};
        case 'DELETE_FAIL_USER_SURVEY_RESPONSE':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'GET_USER_SURVEY_RESPONSE':
            return {...state, data: []};
        case 'GET_SUCCESS_USER_SURVEY_RESPONSE':
            return {...state, error: null, message: action.payload.message};
        case 'GET_FAIL_USER_SURVEY_RESPONSE':
            return {...state, error: action.payload.error, message: action.payload.message};
// [ANCHOR_1]

        case 'SELECT_USER_SURVEY_RESPONSE':
            return {...state, selected: action.payload};
        case 'SELECT_SUCCESS_USER_SURVEY_RESPONSE':
            return {...state, error: null, message: action.payload.message};
        case 'SELECT_FAIL_USER_SURVEY_RESPONSE':
            return {...state, error: action.payload.error, message: action.payload.message};

        case 'START_LOADING':
            return {...state, loading: true};
        case 'END_LOADING':
            return {...state, loading: false};
        default:
            return state;
    }
};

export default UserSurveyResponseReducer;
    