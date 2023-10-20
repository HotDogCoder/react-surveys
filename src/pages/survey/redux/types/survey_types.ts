import { SurveyResponseRequest } from "./survey_response_types";

export interface Survey {
    id: number;
    name?: string;
    questions: QuestionRequest[];
    textanswer?: string;
}

export interface SurveyRequest {
    id: number;
    title?: string;
    name?: string;
    error?: any;
    message?: string;
    questions?: QuestionRequest[];
    textanswer?: string;
    limit?: number;
}

export interface SurveyResponse {
    id: number;
    title?: string;
    name?: string;
    data: SurveyRequest[];
    error?: any;
    message?: string;
    loading?: boolean;
    selected?: SurveyRequest | null;
    deleted?: SurveyRequest | null;
    new_one?: SurveyRequest | null;
    new_ones?: SurveyRequest[];
    surveies?: SurveyRequest[];
    questions?: QuestionRequest[];
    ranking?: RankingModel[];
    responses?: SurveyResponseRequest[];
}

export interface Question {
    id: number;
    name?: string;
    text?: string;
    options: OptionRequest[];
}

export interface QuestionRequest {
    id: number;
    name?: string;
    text?: string;
    error?: any;
    message?: string;
    options?: OptionRequest[];
    textanswer?: string;
}

export interface QuestionResponse {
    id: number;
    name?: string;
    text?: string;
    data: SurveyRequest[];
    error?: any;
    message?: string;
    loading?: boolean;
    selected?: SurveyRequest | null;
    deleted?: SurveyRequest | null;
    new_one?: SurveyRequest | null;
    new_ones?: SurveyRequest[];
    questions?: SurveyRequest[];
    options?: OptionRequest[];
}

export interface Option {
    id: number;
    name?: string;
    text?: string;
}

export interface OptionRequest {
    id: number;
    name?: string;
    text?: string;
    error?: any;
    message?: string;
    selected?: boolean;
}

export interface OptionResponse {
    id: number;
    name?: string;
    text?: string;
    data: SurveyRequest[];
    error?: any;
    message?: string;
    loading?: boolean;
    selected?: SurveyRequest | null;
    deleted?: SurveyRequest | null;
    new_one?: SurveyRequest | null;
    new_ones?: SurveyRequest[];
    options?: SurveyRequest[];
}

export enum RankingType {
    top_ranking,
    user_ranking,
    iteration_ranking,
    killmeplease_ranking
}

export interface RankingModel {
    value: number;
    title: string;
    type: RankingType;
    survey: SurveyRequest;  // Make sure to have a Survey interface in your TypeScript as well
}

export type SurveyState = SurveyResponse;

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const SELECT_SURVEY = 'SELECT_SURVEY'
export const SELECT_SUCCESS_SURVEY = 'SELECT_SUCCESS_SURVEY'
export const SELECT_FAIL_SURVEY = 'SELECT_FAIL_SURVEY'
export const POST_SURVEY = 'POST_SURVEY';
export const POST_SUCCESS_SURVEY = 'POST_SUCCESS_SURVEY';
export const POST_FAIL_SURVEY = 'POST_FAIL_SURVEY';
export const PUT_SURVEY = 'PUT_SURVEY';
export const PUT_SUCCESS_SURVEY = 'PUT_SUCCESS_SURVEY';
export const PUT_FAIL_SURVEY = 'PUT_FAIL_SURVEY';
export const UPDATE_SURVEY = 'UPDATE_SURVEY';
export const UPDATE_SUCCESS_SURVEY = 'UPDATE_SUCCESS_SURVEY';
export const UPDATE_FAIL_SURVEY = 'UPDATE_FAIL_SURVEY';
export const DELETE_SURVEY = 'DELETE_SURVEY';
export const DELETE_SUCCESS_SURVEY = 'DELETE_SUCCESS_SURVEY';
export const DELETE_FAIL_SURVEY = 'DELETE_FAIL_SURVEY';
export const GET_SURVEY = 'GET_SURVEY';
export const GET_SUCCESS_SURVEY = 'GET_SUCCESS_SURVEY';
export const GET_FAIL_SURVEY = 'GET_FAIL_SURVEY';

export const ADD_QUESTION_SURVEY = 'ADD_QUESTION_SURVEY'
export const ADD_QUESTION_SUCCESS_SURVEY = 'ADD_QUESTION_SUCCESS_SURVEY'
export const ADD_QUESTION_FAIL_SURVEY = 'ADD_QUESTION_FAIL_SURVEY'

export const ADD_OPTION_SURVEY = 'ADD_OPTION_SURVEY'
export const ADD_OPTION_SUCCESS_SURVEY = 'ADD_OPTION_SUCCESS_SURVEY'
export const ADD_OPTION_FAIL_SURVEY = 'ADD_OPTION_FAIL_SURVEY'

export const GET_QUESTION_SURVEY = 'GET_QUESTION_SURVEY'
export const GET_QUESTION_SUCCESS_SURVEY = 'GET_QUESTION_SUCCESS_SURVEY'
export const GET_QUESTION_FAIL_SURVEY = 'GET_QUESTION_FAIL_SURVEY'

export const GET_OPTION_SURVEY = 'GET_OPTION_SURVEY'
export const GET_OPTION_SUCCESS_SURVEY = 'GET_OPTION_SUCCESS_SURVEY'
export const GET_OPTION_FAIL_SURVEY = 'GET_OPTION_FAIL_SURVEY'

export const ADD_USER_RESPONSE_SURVEY = 'ADD_USER_RESPONSE_SURVEY'
export const ADD_USER_RESPONSE_SUCCESS_SURVEY = 'ADD_USER_RESPONSE_SUCCESS_SURVEY'
export const ADD_USER_RESPONSE_FAIL_SURVEY = 'ADD_USER_RESPONSE_FAIL_SURVEY'

export const GET_RANKING_SURVEY = 'GET_RANKING_SURVEY'
export const GET_RANKING_SUCCESS_SURVEY = 'GET_RANKING_SUCCESS_SURVEY'
export const GET_RANKING_FAIL_SURVEY = 'GET_RANKING_FAIL_SURVEY'
// [ANCHOR_1]
        
        
        
        
        
        

interface PostSurveyAction {
type: typeof POST_SURVEY;
payload: SurveyState;
}

interface PostSuccessSurveyAction {
type: typeof POST_SUCCESS_SURVEY;
payload: SurveyState;
}

interface PostErrorSurveyAction {
type: typeof POST_FAIL_SURVEY;
payload: SurveyRequest;
}

interface PutSurveyAction {
type: typeof PUT_SURVEY;
payload: SurveyState;
}

interface PutSuccessSurveyAction {
type: typeof PUT_SUCCESS_SURVEY;
payload: SurveyState;
}

interface PutErrorSurveyAction {
type: typeof PUT_FAIL_SURVEY;
payload: SurveyRequest;
}

interface UpdateSurveyAction {
type: typeof UPDATE_SURVEY;
payload: SurveyState;
}

interface UpdateSuccessSurveyAction {
type: typeof UPDATE_SUCCESS_SURVEY;
payload: SurveyState;
}

interface UpdateErrorSurveyAction {
type: typeof UPDATE_FAIL_SURVEY;
payload: SurveyRequest;
}

interface DeleteSurveyAction {
type: typeof DELETE_SURVEY;
payload: SurveyState;
}

interface DeleteSuccessSurveyAction {
type: typeof DELETE_SUCCESS_SURVEY;
payload: SurveyState;
}

interface DeleteErrorSurveyAction {
type: typeof DELETE_FAIL_SURVEY;
payload: SurveyRequest;
}

interface GetSurveyAction {
type: typeof GET_SURVEY;
payload: SurveyRequest[];
}

interface GetSuccessSurveyAction {
type: typeof GET_SUCCESS_SURVEY;
payload: SurveyRequest[];
}

interface GetErrorSurveyAction {
type: typeof GET_FAIL_SURVEY;
payload: SurveyRequest;
}


interface Add_questionSurveyAction {
    type: typeof ADD_QUESTION_SURVEY;
    payload: SurveyState;
}

interface Add_questionSuccessSurveyAction {
type: typeof ADD_QUESTION_SUCCESS_SURVEY;
payload: SurveyState;
}

interface Add_questionErrorSurveyAction {
type: typeof ADD_QUESTION_FAIL_SURVEY;
payload: SurveyState;
}


interface Add_optionSurveyAction {
    type: typeof ADD_OPTION_SURVEY;
    payload: SurveyState;
}

interface Add_optionSuccessSurveyAction {
type: typeof ADD_OPTION_SUCCESS_SURVEY;
payload: SurveyState;
}

interface Add_optionErrorSurveyAction {
type: typeof ADD_OPTION_FAIL_SURVEY;
payload: SurveyState;
}


interface Get_questionSurveyAction {
    type: typeof GET_QUESTION_SURVEY;
    payload: SurveyState;
}

interface Get_questionSuccessSurveyAction {
type: typeof GET_QUESTION_SUCCESS_SURVEY;
payload: SurveyState;
}

interface Get_questionErrorSurveyAction {
type: typeof GET_QUESTION_FAIL_SURVEY;
payload: SurveyState;
}


interface Get_optionSurveyAction {
    type: typeof GET_OPTION_SURVEY;
    payload: SurveyState;
}

interface Get_optionSuccessSurveyAction {
type: typeof GET_OPTION_SUCCESS_SURVEY;
payload: SurveyState;
}

interface Get_optionErrorSurveyAction {
type: typeof GET_OPTION_FAIL_SURVEY;
payload: SurveyState;
}


interface Add_user_responseSurveyAction {
    type: typeof ADD_USER_RESPONSE_SURVEY;
    payload: SurveyState;
}

interface Add_user_responseSuccessSurveyAction {
type: typeof ADD_USER_RESPONSE_SUCCESS_SURVEY;
payload: SurveyState;
}

interface Add_user_responseErrorSurveyAction {
type: typeof ADD_USER_RESPONSE_FAIL_SURVEY;
payload: SurveyState;
}


interface Get_rankingSurveyAction {
    type: typeof GET_RANKING_SURVEY;
    payload: SurveyRequest;
}

interface Get_rankingSuccessSurveyAction {
    type: typeof GET_RANKING_SUCCESS_SURVEY;
    payload: RankingModel[];
}

interface Get_rankingErrorSurveyAction {
type: typeof GET_RANKING_FAIL_SURVEY;
payload: SurveyRequest;
}
// [ANCHOR_2]
        
        
        
        
        
        

interface StartLoadingAction {
type: typeof START_LOADING;
payload: SurveyRequest;
}

interface EndLoadingAction {
type: typeof END_LOADING;
payload: SurveyRequest;
}

interface SelectSurveyAction {
type: typeof SELECT_SURVEY;
payload: SurveyRequest;
}

interface SelectSuccessSurveyAction {
type: typeof SELECT_SUCCESS_SURVEY;
payload: SurveyRequest;
}

interface SelectErrorSurveyAction {
type: typeof SELECT_FAIL_SURVEY;
payload: SurveyRequest;
}

export type SurveyActionTypes = 
StartLoadingAction
| EndLoadingAction
| SelectSurveyAction 
| SelectSuccessSurveyAction 
| SelectErrorSurveyAction 
| PostSurveyAction 
| PostSuccessSurveyAction 
| PostErrorSurveyAction 
| PutSurveyAction 
| PutSuccessSurveyAction 
| PutErrorSurveyAction 
| UpdateSurveyAction 
| UpdateSuccessSurveyAction 
| UpdateErrorSurveyAction 
| DeleteSurveyAction 
| DeleteSuccessSurveyAction 
| DeleteErrorSurveyAction 
| GetSurveyAction 
| GetSuccessSurveyAction 
| GetErrorSurveyAction 

| Add_questionSurveyAction 
| Add_questionSuccessSurveyAction 
| Add_questionErrorSurveyAction 

| Add_optionSurveyAction 
| Add_optionSuccessSurveyAction 
| Add_optionErrorSurveyAction 

| Get_questionSurveyAction 
| Get_questionSuccessSurveyAction 
| Get_questionErrorSurveyAction 

| Get_optionSurveyAction 
| Get_optionSuccessSurveyAction 
| Get_optionErrorSurveyAction 

| Add_user_responseSurveyAction 
| Add_user_responseSuccessSurveyAction 
| Add_user_responseErrorSurveyAction 

| Get_rankingSurveyAction 
| Get_rankingSuccessSurveyAction 
| Get_rankingErrorSurveyAction 
// [ANCHOR_3]
        
        
        
        
        
        
    