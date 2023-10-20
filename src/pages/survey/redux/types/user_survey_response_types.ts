import { OptionRequest, Question, QuestionRequest, SurveyRequest } from "./survey_types";

export interface UserSurveyResponse {
    id: number;
    name: string;
}

export interface UserSurveyResponseRequest {
    id: number;
    name: string;
    error?: any;
    message?: string;
    textanswer?: string;
    question: QuestionRequest;
    option: OptionRequest;
    selectedoptions?: OptionRequest[];
    questions?: QuestionRequest[];
    limit?: number;
    questionId?: number;
}

export interface UserSurveyResponseResponse {
    id: number;
    name: string;
    data: UserSurveyResponseRequest[];
    error?: any;
    message?: string;
    loading?: boolean;
    selected?: UserSurveyResponseRequest | null;
    deleted?: UserSurveyResponseRequest | null;
    new_one?: UserSurveyResponseRequest | null;
    new_ones?: UserSurveyResponseRequest[];
    user_survey_responses?: UserSurveyResponseRequest[];
}

export type UserSurveyResponseState = UserSurveyResponseResponse;

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const SELECT_USER_SURVEY_RESPONSE = 'SELECT_USER_SURVEY_RESPONSE'
export const SELECT_SUCCESS_USER_SURVEY_RESPONSE = 'SELECT_SUCCESS_USER_SURVEY_RESPONSE'
export const SELECT_FAIL_USER_SURVEY_RESPONSE = 'SELECT_FAIL_USER_SURVEY_RESPONSE'
export const POST_USER_SURVEY_RESPONSE = 'POST_USER_SURVEY_RESPONSE';
export const POST_SUCCESS_USER_SURVEY_RESPONSE = 'POST_SUCCESS_USER_SURVEY_RESPONSE';
export const POST_FAIL_USER_SURVEY_RESPONSE = 'POST_FAIL_USER_SURVEY_RESPONSE';
export const PUT_USER_SURVEY_RESPONSE = 'PUT_USER_SURVEY_RESPONSE';
export const PUT_SUCCESS_USER_SURVEY_RESPONSE = 'PUT_SUCCESS_USER_SURVEY_RESPONSE';
export const PUT_FAIL_USER_SURVEY_RESPONSE = 'PUT_FAIL_USER_SURVEY_RESPONSE';
export const UPDATE_USER_SURVEY_RESPONSE = 'UPDATE_USER_SURVEY_RESPONSE';
export const UPDATE_SUCCESS_USER_SURVEY_RESPONSE = 'UPDATE_SUCCESS_USER_SURVEY_RESPONSE';
export const UPDATE_FAIL_USER_SURVEY_RESPONSE = 'UPDATE_FAIL_USER_SURVEY_RESPONSE';
export const DELETE_USER_SURVEY_RESPONSE = 'DELETE_USER_SURVEY_RESPONSE';
export const DELETE_SUCCESS_USER_SURVEY_RESPONSE = 'DELETE_SUCCESS_USER_SURVEY_RESPONSE';
export const DELETE_FAIL_USER_SURVEY_RESPONSE = 'DELETE_FAIL_USER_SURVEY_RESPONSE';
export const GET_USER_SURVEY_RESPONSE = 'GET_USER_SURVEY_RESPONSE';
export const GET_SUCCESS_USER_SURVEY_RESPONSE = 'GET_SUCCESS_USER_SURVEY_RESPONSE';
export const GET_FAIL_USER_SURVEY_RESPONSE = 'GET_FAIL_USER_SURVEY_RESPONSE';
// [ANCHOR_1]

interface PostUserSurveyResponseAction {
type: typeof POST_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseState;
}

interface PostSuccessUserSurveyResponseAction {
type: typeof POST_SUCCESS_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseState;
}

interface PostErrorUserSurveyResponseAction {
type: typeof POST_FAIL_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseRequest  | SurveyRequest;
}

interface PutUserSurveyResponseAction {
type: typeof PUT_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseState;
}

interface PutSuccessUserSurveyResponseAction {
type: typeof PUT_SUCCESS_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseState;
}

interface PutErrorUserSurveyResponseAction {
type: typeof PUT_FAIL_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseRequest;
}

interface UpdateUserSurveyResponseAction {
type: typeof UPDATE_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseState;
}

interface UpdateSuccessUserSurveyResponseAction {
type: typeof UPDATE_SUCCESS_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseState;
}

interface UpdateErrorUserSurveyResponseAction {
type: typeof UPDATE_FAIL_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseRequest;
}

interface DeleteUserSurveyResponseAction {
type: typeof DELETE_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseState;
}

interface DeleteSuccessUserSurveyResponseAction {
type: typeof DELETE_SUCCESS_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseState;
}

interface DeleteErrorUserSurveyResponseAction {
type: typeof DELETE_FAIL_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseRequest;
}

interface GetUserSurveyResponseAction {
type: typeof GET_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseState;
}

interface GetSuccessUserSurveyResponseAction {
type: typeof GET_SUCCESS_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseState;
}

interface GetErrorUserSurveyResponseAction {
type: typeof GET_FAIL_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseRequest;
}
// [ANCHOR_2]

interface StartLoadingAction {
type: typeof START_LOADING;
payload: UserSurveyResponseRequest | SurveyRequest;
}

interface EndLoadingAction {
type: typeof END_LOADING;
payload: UserSurveyResponseRequest | SurveyRequest;
}

interface SelectUserSurveyResponseAction {
type: typeof SELECT_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseRequest;
}

interface SelectSuccessUserSurveyResponseAction {
type: typeof SELECT_SUCCESS_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseRequest;
}

interface SelectErrorUserSurveyResponseAction {
type: typeof SELECT_FAIL_USER_SURVEY_RESPONSE;
payload: UserSurveyResponseRequest;
}

export type UserSurveyResponseActionTypes = 
StartLoadingAction
| EndLoadingAction
| SelectUserSurveyResponseAction 
| SelectSuccessUserSurveyResponseAction 
| SelectErrorUserSurveyResponseAction 
| PostUserSurveyResponseAction 
| PostSuccessUserSurveyResponseAction 
| PostErrorUserSurveyResponseAction 
| PutUserSurveyResponseAction 
| PutSuccessUserSurveyResponseAction 
| PutErrorUserSurveyResponseAction 
| UpdateUserSurveyResponseAction 
| UpdateSuccessUserSurveyResponseAction 
| UpdateErrorUserSurveyResponseAction 
| DeleteUserSurveyResponseAction 
| DeleteSuccessUserSurveyResponseAction 
| DeleteErrorUserSurveyResponseAction 
| GetUserSurveyResponseAction 
| GetSuccessUserSurveyResponseAction 
| GetErrorUserSurveyResponseAction 
// [ANCHOR_3]
    