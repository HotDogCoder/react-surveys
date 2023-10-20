import { SurveyRequest } from "./survey_types";
import { UserSurveyResponseRequest } from "./user_survey_response_types";

export interface SurveyResponse {
    id?: number;
    name?: string;
}

export interface SurveyResponseRequest {
    id?: number;
    name?: string;
    error?: any;
    message?: string;
    userid?: number;
    surveyid?: number;
    surveyTitle?: string;
    dateCreated?: string;
    intent?: number;
    userSurveyResponses?: UserSurveyResponseRequest[];
}

export interface SurveyResponseResponse {
    id?: number;
    name?: string;
    data?: SurveyResponseRequest[];
    error?: any;
    message?: string;
    loading?: boolean;
    selected?: SurveyResponseRequest | null;
    deleted?: SurveyResponseRequest | null;
    new_one?: SurveyResponseRequest | null;
    new_ones?: SurveyResponseRequest[];
    survey_responses?: SurveyResponseRequest[];
}

export type SurveyResponseState = SurveyResponseResponse;

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const SELECT_SURVEY_RESPONSE = 'SELECT_SURVEY_RESPONSE'
export const SELECT_SUCCESS_SURVEY_RESPONSE = 'SELECT_SUCCESS_SURVEY_RESPONSE'
export const SELECT_FAIL_SURVEY_RESPONSE = 'SELECT_FAIL_SURVEY_RESPONSE'
export const POST_SURVEY_RESPONSE = 'POST_SURVEY_RESPONSE';
export const POST_SUCCESS_SURVEY_RESPONSE = 'POST_SUCCESS_SURVEY_RESPONSE';
export const POST_FAIL_SURVEY_RESPONSE = 'POST_FAIL_SURVEY_RESPONSE';
export const PUT_SURVEY_RESPONSE = 'PUT_SURVEY_RESPONSE';
export const PUT_SUCCESS_SURVEY_RESPONSE = 'PUT_SUCCESS_SURVEY_RESPONSE';
export const PUT_FAIL_SURVEY_RESPONSE = 'PUT_FAIL_SURVEY_RESPONSE';
export const UPDATE_SURVEY_RESPONSE = 'UPDATE_SURVEY_RESPONSE';
export const UPDATE_SUCCESS_SURVEY_RESPONSE = 'UPDATE_SUCCESS_SURVEY_RESPONSE';
export const UPDATE_FAIL_SURVEY_RESPONSE = 'UPDATE_FAIL_SURVEY_RESPONSE';
export const DELETE_SURVEY_RESPONSE = 'DELETE_SURVEY_RESPONSE';
export const DELETE_SUCCESS_SURVEY_RESPONSE = 'DELETE_SUCCESS_SURVEY_RESPONSE';
export const DELETE_FAIL_SURVEY_RESPONSE = 'DELETE_FAIL_SURVEY_RESPONSE';
export const GET_SURVEY_RESPONSE = 'GET_SURVEY_RESPONSE';
export const GET_SUCCESS_SURVEY_RESPONSE = 'GET_SUCCESS_SURVEY_RESPONSE';
export const GET_FAIL_SURVEY_RESPONSE = 'GET_FAIL_SURVEY_RESPONSE';
// [ANCHOR_1]

interface PostSurveyResponseAction {
type: typeof POST_SURVEY_RESPONSE;
payload: SurveyResponseState;
}

interface PostSuccessSurveyResponseAction {
type: typeof POST_SUCCESS_SURVEY_RESPONSE;
payload: SurveyResponseState;
}

interface PostErrorSurveyResponseAction {
type: typeof POST_FAIL_SURVEY_RESPONSE;
payload: SurveyResponseRequest;
}

interface PutSurveyResponseAction {
type: typeof PUT_SURVEY_RESPONSE;
payload: SurveyResponseState;
}

interface PutSuccessSurveyResponseAction {
type: typeof PUT_SUCCESS_SURVEY_RESPONSE;
payload: SurveyResponseState;
}

interface PutErrorSurveyResponseAction {
type: typeof PUT_FAIL_SURVEY_RESPONSE;
payload: SurveyResponseRequest;
}

interface UpdateSurveyResponseAction {
type: typeof UPDATE_SURVEY_RESPONSE;
payload: SurveyResponseState;
}

interface UpdateSuccessSurveyResponseAction {
type: typeof UPDATE_SUCCESS_SURVEY_RESPONSE;
payload: SurveyResponseState;
}

interface UpdateErrorSurveyResponseAction {
type: typeof UPDATE_FAIL_SURVEY_RESPONSE;
payload: SurveyResponseRequest;
}

interface DeleteSurveyResponseAction {
type: typeof DELETE_SURVEY_RESPONSE;
payload: SurveyResponseState;
}

interface DeleteSuccessSurveyResponseAction {
type: typeof DELETE_SUCCESS_SURVEY_RESPONSE;
payload: SurveyResponseState;
}

interface DeleteErrorSurveyResponseAction {
type: typeof DELETE_FAIL_SURVEY_RESPONSE;
payload: SurveyResponseRequest;
}

interface GetSurveyResponseAction {
type: typeof GET_SURVEY_RESPONSE;
payload: SurveyResponseRequest;
}

interface GetSuccessSurveyResponseAction {
type: typeof GET_SUCCESS_SURVEY_RESPONSE;
payload: SurveyResponseRequest[];
}

interface GetErrorSurveyResponseAction {
type: typeof GET_FAIL_SURVEY_RESPONSE;
payload: SurveyResponseRequest;
}
// [ANCHOR_2]

interface StartLoadingAction {
type: typeof START_LOADING;
payload: SurveyResponseRequest;
}

interface EndLoadingAction {
type: typeof END_LOADING;
payload: SurveyResponseRequest;
}

interface SelectSurveyResponseAction {
type: typeof SELECT_SURVEY_RESPONSE;
payload: SurveyResponseRequest;
}

interface SelectSuccessSurveyResponseAction {
type: typeof SELECT_SUCCESS_SURVEY_RESPONSE;
payload: SurveyResponseRequest;
}

interface SelectErrorSurveyResponseAction {
type: typeof SELECT_FAIL_SURVEY_RESPONSE;
payload: SurveyResponseRequest;
}

export type SurveyResponseActionTypes = 
StartLoadingAction
| EndLoadingAction
| SelectSurveyResponseAction 
| SelectSuccessSurveyResponseAction 
| SelectErrorSurveyResponseAction 
| PostSurveyResponseAction 
| PostSuccessSurveyResponseAction 
| PostErrorSurveyResponseAction 
| PutSurveyResponseAction 
| PutSuccessSurveyResponseAction 
| PutErrorSurveyResponseAction 
| UpdateSurveyResponseAction 
| UpdateSuccessSurveyResponseAction 
| UpdateErrorSurveyResponseAction 
| DeleteSurveyResponseAction 
| DeleteSuccessSurveyResponseAction 
| DeleteErrorSurveyResponseAction 
| GetSurveyResponseAction 
| GetSuccessSurveyResponseAction 
| GetErrorSurveyResponseAction 
// [ANCHOR_3]
    