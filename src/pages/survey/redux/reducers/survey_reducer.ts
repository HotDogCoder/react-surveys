
import { SurveyActionTypes, SurveyState, SurveyRequest } from '../types/survey_types';
import axios from 'axios'
axios.defaults.withCredentials = true;

const initialState: SurveyState = {
    id: 0,
    name: '',
    data: [],
    surveies: [],
    error: null,
    message: '',
    loading: false,
    selected: null,
    deleted: null,
    new_one: null,
    new_ones: [],
    ranking: [],
};

const SurveyReducer = (state = initialState, action: SurveyActionTypes) => {
    switch (action.type) {
        
        case 'POST_SURVEY':
            return {...state, surveies: [...state.surveies || [], action.payload!], error: null, message: ''};
        case 'POST_SUCCESS_SURVEY':
            return {...state, error: null, message: ''};
        case 'POST_FAIL_SURVEY':
            return {...state, error: '', message: ''};
        
        case 'PUT_SURVEY':
            return {...state, data: []};
        case 'PUT_SUCCESS_SURVEY':

            let old_data = [...state.surveies || []];
            
            const index = old_data?.findIndex((x:SurveyRequest) => x.id === action.payload?.id);
            if (index !== undefined && index !== null && index !== -1) {
                old_data?.splice(index, 1, action.payload!);
            }

            return {...state, error: null, message: '' , surveies: old_data};
        case 'PUT_FAIL_SURVEY':
            return {...state, error: '', message: ''};
        
        case 'UPDATE_SURVEY':
            return {...state, data: []};
        case 'UPDATE_SUCCESS_SURVEY':
            return {...state, error: null, message: ''};
        case 'UPDATE_FAIL_SURVEY':
            return {...state, error: '', message: ''};
            
        case 'DELETE_SURVEY':
            return {...state, surveies: action.payload.surveies?.filter((x:SurveyRequest) => x.id !== action.payload.deleted?.id), error: null, message: ''};
        case 'DELETE_SUCCESS_SURVEY':
            return {...state, error: null, message: ''};
        case 'DELETE_FAIL_SURVEY':
            return {...state, error: '', message: ''};
        
        case 'GET_SURVEY':
            return {...state, surveies: action.payload!};
        case 'GET_SUCCESS_SURVEY':
            return {...state, error: null, message: ''};
        case 'GET_FAIL_SURVEY':
            return {...state, error: '', message: ''};

        case 'ADD_QUESTION_SURVEY':
            return {...state, data: []};
        case 'ADD_QUESTION_SUCCESS_SURVEY':
            return {...state, data: []};
        case 'ADD_QUESTION_FAIL_SURVEY':
            return {...state, error: '', data: []};

        case 'ADD_OPTION_SURVEY':
            return {...state, data: []};
        case 'ADD_OPTION_SUCCESS_SURVEY':
            return {...state, data: []};
        case 'ADD_OPTION_FAIL_SURVEY':
            return {...state, error: '', data: []};

        case 'GET_QUESTION_SURVEY':
            return {...state, data: []};
        case 'GET_QUESTION_SUCCESS_SURVEY':
            return {...state, data: []};
        case 'GET_QUESTION_FAIL_SURVEY':
            return {...state, error: '', data: []};

        case 'GET_OPTION_SURVEY':
            return {...state, data: []};
        case 'GET_OPTION_SUCCESS_SURVEY':
            return {...state, data: []};
        case 'GET_OPTION_FAIL_SURVEY':
            return {...state, error: '', data: []};

        case 'ADD_USER_RESPONSE_SURVEY':
            return {...state, data: []};
        case 'ADD_USER_RESPONSE_SUCCESS_SURVEY':
            return {...state, data: []};
        case 'ADD_USER_RESPONSE_FAIL_SURVEY':
            return {...state, error: '', data: []};

        case 'GET_RANKING_SURVEY':
            return {...state};
        case 'GET_RANKING_SUCCESS_SURVEY':
            return {...state, ranking: action.payload!};
        case 'GET_RANKING_FAIL_SURVEY':
            return {...state, error: action.payload.error, data: []};
// [ANCHOR_1]
        
        
        
        
        
        

        case 'SELECT_SURVEY':
            return {...state, selected: action.payload};
        case 'SELECT_SUCCESS_SURVEY':
            return {...state, error: null, message: ''};
        case 'SELECT_FAIL_SURVEY':
            return {...state, error: '', message: ''};

        case 'START_LOADING':
            return {...state, loading: true};
        case 'END_LOADING':
            return {...state, loading: false};
        default:
            return state;
    }
};

export default SurveyReducer;
    