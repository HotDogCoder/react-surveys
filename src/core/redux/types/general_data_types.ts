export interface GeneralData {
    id: number;
    name: string;
}

export interface GeneralDataRequest {
    id: number;
    name: string;
    error?: any;
    message?: string;
}

export interface GeneralDataResponse {
    id: number;
    name: string;
    data: GeneralDataRequest[];
    error?: any;
    message?: string;
    loading?: boolean;
    selected?: GeneralDataRequest | null;
    deleted?: GeneralDataRequest | null;
    new_one?: GeneralDataRequest | null;
    new_ones?: GeneralDataRequest[];
}

export type GeneralDataState = GeneralDataResponse;

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const SELECT_GENERAL_DATA = 'SELECT_GENERAL_DATA'
export const SELECT_SUCCESS_GENERAL_DATA = 'SELECT_SUCCESS_GENERAL_DATA'
export const SELECT_FAIL_GENERAL_DATA = 'SELECT_FAIL_GENERAL_DATA'
export const POST_GENERAL_DATA = 'POST_GENERAL_DATA';
export const POST_SUCCESS_GENERAL_DATA = 'POST_SUCCESS_GENERAL_DATA';
export const POST_FAIL_GENERAL_DATA = 'POST_FAIL_GENERAL_DATA';
export const PUT_GENERAL_DATA = 'PUT_GENERAL_DATA';
export const PUT_SUCCESS_GENERAL_DATA = 'PUT_SUCCESS_GENERAL_DATA';
export const PUT_FAIL_GENERAL_DATA = 'PUT_FAIL_GENERAL_DATA';
export const UPDATE_GENERAL_DATA = 'UPDATE_GENERAL_DATA';
export const UPDATE_SUCCESS_GENERAL_DATA = 'UPDATE_SUCCESS_GENERAL_DATA';
export const UPDATE_FAIL_GENERAL_DATA = 'UPDATE_FAIL_GENERAL_DATA';
export const DELETE_GENERAL_DATA = 'DELETE_GENERAL_DATA';
export const DELETE_SUCCESS_GENERAL_DATA = 'DELETE_SUCCESS_GENERAL_DATA';
export const DELETE_FAIL_GENERAL_DATA = 'DELETE_FAIL_GENERAL_DATA';
export const GET_GENERAL_DATA = 'GET_GENERAL_DATA';
export const GET_SUCCESS_GENERAL_DATA = 'GET_SUCCESS_GENERAL_DATA';
export const GET_FAIL_GENERAL_DATA = 'GET_FAIL_GENERAL_DATA';
// [ANCHOR_1]

interface PostGeneralDataAction {
type: typeof POST_GENERAL_DATA;
payload: GeneralDataState;
}

interface PostSuccessGeneralDataAction {
type: typeof POST_SUCCESS_GENERAL_DATA;
payload: GeneralDataState;
}

interface PostErrorGeneralDataAction {
type: typeof POST_FAIL_GENERAL_DATA;
payload: GeneralDataRequest;
}

interface PutGeneralDataAction {
type: typeof PUT_GENERAL_DATA;
payload: GeneralDataState;
}

interface PutSuccessGeneralDataAction {
type: typeof PUT_SUCCESS_GENERAL_DATA;
payload: GeneralDataState;
}

interface PutErrorGeneralDataAction {
type: typeof PUT_FAIL_GENERAL_DATA;
payload: GeneralDataRequest;
}

interface UpdateGeneralDataAction {
type: typeof UPDATE_GENERAL_DATA;
payload: GeneralDataState;
}

interface UpdateSuccessGeneralDataAction {
type: typeof UPDATE_SUCCESS_GENERAL_DATA;
payload: GeneralDataState;
}

interface UpdateErrorGeneralDataAction {
type: typeof UPDATE_FAIL_GENERAL_DATA;
payload: GeneralDataRequest;
}

interface DeleteGeneralDataAction {
type: typeof DELETE_GENERAL_DATA;
payload: GeneralDataState;
}

interface DeleteSuccessGeneralDataAction {
type: typeof DELETE_SUCCESS_GENERAL_DATA;
payload: GeneralDataState;
}

interface DeleteErrorGeneralDataAction {
type: typeof DELETE_FAIL_GENERAL_DATA;
payload: GeneralDataRequest;
}

interface GetGeneralDataAction {
type: typeof GET_GENERAL_DATA;
payload: GeneralDataState;
}

interface GetSuccessGeneralDataAction {
type: typeof GET_SUCCESS_GENERAL_DATA;
payload: GeneralDataState;
}

interface GetErrorGeneralDataAction {
type: typeof GET_FAIL_GENERAL_DATA;
payload: GeneralDataRequest;
}
// [ANCHOR_2]

interface StartLoadingAction {
type: typeof START_LOADING;
payload: GeneralDataRequest;
}

interface EndLoadingAction {
type: typeof END_LOADING;
payload: GeneralDataRequest;
}

interface SelectGeneralDataAction {
type: typeof SELECT_GENERAL_DATA;
payload: GeneralDataRequest;
}

interface SelectSuccessGeneralDataAction {
type: typeof SELECT_SUCCESS_GENERAL_DATA;
payload: GeneralDataRequest;
}

interface SelectErrorGeneralDataAction {
type: typeof SELECT_FAIL_GENERAL_DATA;
payload: GeneralDataRequest;
}

export type GeneralDataActionTypes = 
StartLoadingAction
| EndLoadingAction
| SelectGeneralDataAction 
| SelectSuccessGeneralDataAction 
| SelectErrorGeneralDataAction 
| PostGeneralDataAction 
| PostSuccessGeneralDataAction 
| PostErrorGeneralDataAction 
| PutGeneralDataAction 
| PutSuccessGeneralDataAction 
| PutErrorGeneralDataAction 
| UpdateGeneralDataAction 
| UpdateSuccessGeneralDataAction 
| UpdateErrorGeneralDataAction 
| DeleteGeneralDataAction 
| DeleteSuccessGeneralDataAction 
| DeleteErrorGeneralDataAction 
| GetGeneralDataAction 
| GetSuccessGeneralDataAction 
| GetErrorGeneralDataAction 
// [ANCHOR_3]
    