
export interface Test {
    id: number;
    name: string;
}

export interface TestRequest {
    id: number;
    name: string;
    error?: any;
    message?: string;
}

export interface TestResponse {
    id: number;
    name: string;
    data: TestRequest[];
    error?: any;
    message?: string;
    loading?: boolean;
    selected?: TestRequest | null;
    deleted?: TestRequest | null;
    new_one?: TestRequest | null;
    new_ones?: TestRequest[];
    tests?: TestRequest[];
}

export type TestState = TestResponse;

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const SELECT_TEST = 'SELECT_TEST'
export const SELECT_SUCCESS_TEST = 'SELECT_SUCCESS_TEST'
export const SELECT_FAIL_TEST = 'SELECT_FAIL_TEST'
export const POST_TEST = 'POST_TEST';
export const POST_SUCCESS_TEST = 'POST_SUCCESS_TEST';
export const POST_FAIL_TEST = 'POST_FAIL_TEST';
export const PUT_TEST = 'PUT_TEST';
export const PUT_SUCCESS_TEST = 'PUT_SUCCESS_TEST';
export const PUT_FAIL_TEST = 'PUT_FAIL_TEST';
export const UPDATE_TEST = 'UPDATE_TEST';
export const UPDATE_SUCCESS_TEST = 'UPDATE_SUCCESS_TEST';
export const UPDATE_FAIL_TEST = 'UPDATE_FAIL_TEST';
export const DELETE_TEST = 'DELETE_TEST';
export const DELETE_SUCCESS_TEST = 'DELETE_SUCCESS_TEST';
export const DELETE_FAIL_TEST = 'DELETE_FAIL_TEST';
export const GET_TEST = 'GET_TEST';
export const GET_SUCCESS_TEST = 'GET_SUCCESS_TEST';
export const GET_FAIL_TEST = 'GET_FAIL_TEST';
// [ANCHOR_1]

interface PostTestAction {
type: typeof POST_TEST;
payload: TestState;
}

interface PostSuccessTestAction {
type: typeof POST_SUCCESS_TEST;
payload: TestState;
}

interface PostErrorTestAction {
type: typeof POST_FAIL_TEST;
payload: TestRequest;
}

interface PutTestAction {
type: typeof PUT_TEST;
payload: TestState;
}

interface PutSuccessTestAction {
type: typeof PUT_SUCCESS_TEST;
payload: TestState;
}

interface PutErrorTestAction {
type: typeof PUT_FAIL_TEST;
payload: TestRequest;
}

interface UpdateTestAction {
type: typeof UPDATE_TEST;
payload: TestState;
}

interface UpdateSuccessTestAction {
type: typeof UPDATE_SUCCESS_TEST;
payload: TestState;
}

interface UpdateErrorTestAction {
type: typeof UPDATE_FAIL_TEST;
payload: TestRequest;
}

interface DeleteTestAction {
type: typeof DELETE_TEST;
payload: TestState;
}

interface DeleteSuccessTestAction {
type: typeof DELETE_SUCCESS_TEST;
payload: TestState;
}

interface DeleteErrorTestAction {
type: typeof DELETE_FAIL_TEST;
payload: TestRequest;
}

interface GetTestAction {
type: typeof GET_TEST;
payload: TestState;
}

interface GetSuccessTestAction {
type: typeof GET_SUCCESS_TEST;
payload: TestState;
}

interface GetErrorTestAction {
type: typeof GET_FAIL_TEST;
payload: TestRequest;
}
// [ANCHOR_2]

interface StartLoadingAction {
type: typeof START_LOADING;
payload: TestRequest;
}

interface EndLoadingAction {
type: typeof END_LOADING;
payload: TestRequest;
}

interface SelectTestAction {
type: typeof SELECT_TEST;
payload: TestRequest;
}

interface SelectSuccessTestAction {
type: typeof SELECT_SUCCESS_TEST;
payload: TestRequest;
}

interface SelectErrorTestAction {
type: typeof SELECT_FAIL_TEST;
payload: TestRequest;
}

export type TestActionTypes = 
StartLoadingAction
| EndLoadingAction
| SelectTestAction 
| SelectSuccessTestAction 
| SelectErrorTestAction 
| PostTestAction 
| PostSuccessTestAction 
| PostErrorTestAction 
| PutTestAction 
| PutSuccessTestAction 
| PutErrorTestAction 
| UpdateTestAction 
| UpdateSuccessTestAction 
| UpdateErrorTestAction 
| DeleteTestAction 
| DeleteSuccessTestAction 
| DeleteErrorTestAction 
| GetTestAction 
| GetSuccessTestAction 
| GetErrorTestAction 
// [ANCHOR_3]
    