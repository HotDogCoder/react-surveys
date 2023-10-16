
export interface UserAccountOfficeGroup {
    id: number;
    name: string;
}

export interface UserAccountOfficeGroupRequest {
    id: number;
    name: string;
    error?: any;
    message?: string;
}

export interface UserAccountOfficeGroupResponse {
    id: number;
    name: string;
    data: UserAccountOfficeGroupRequest[];
    error?: any;
    message?: string;
    loading?: boolean;
    selected?: UserAccountOfficeGroupRequest | null;
    deleted?: UserAccountOfficeGroupRequest | null;
    new_one?: UserAccountOfficeGroupRequest | null;
    new_ones?: UserAccountOfficeGroupRequest[];
    user_account_office_groups?: UserAccountOfficeGroupRequest[];
}

export type UserAccountOfficeGroupState = UserAccountOfficeGroupResponse;

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const SELECT_USER_ACCOUNT_OFFICE_GROUP = 'SELECT_USER_ACCOUNT_OFFICE_GROUP'
export const SELECT_SUCCESS_USER_ACCOUNT_OFFICE_GROUP = 'SELECT_SUCCESS_USER_ACCOUNT_OFFICE_GROUP'
export const SELECT_FAIL_USER_ACCOUNT_OFFICE_GROUP = 'SELECT_FAIL_USER_ACCOUNT_OFFICE_GROUP'
export const POST_USER_ACCOUNT_OFFICE_GROUP = 'POST_USER_ACCOUNT_OFFICE_GROUP';
export const POST_SUCCESS_USER_ACCOUNT_OFFICE_GROUP = 'POST_SUCCESS_USER_ACCOUNT_OFFICE_GROUP';
export const POST_FAIL_USER_ACCOUNT_OFFICE_GROUP = 'POST_FAIL_USER_ACCOUNT_OFFICE_GROUP';
export const PUT_USER_ACCOUNT_OFFICE_GROUP = 'PUT_USER_ACCOUNT_OFFICE_GROUP';
export const PUT_SUCCESS_USER_ACCOUNT_OFFICE_GROUP = 'PUT_SUCCESS_USER_ACCOUNT_OFFICE_GROUP';
export const PUT_FAIL_USER_ACCOUNT_OFFICE_GROUP = 'PUT_FAIL_USER_ACCOUNT_OFFICE_GROUP';
export const UPDATE_USER_ACCOUNT_OFFICE_GROUP = 'UPDATE_USER_ACCOUNT_OFFICE_GROUP';
export const UPDATE_SUCCESS_USER_ACCOUNT_OFFICE_GROUP = 'UPDATE_SUCCESS_USER_ACCOUNT_OFFICE_GROUP';
export const UPDATE_FAIL_USER_ACCOUNT_OFFICE_GROUP = 'UPDATE_FAIL_USER_ACCOUNT_OFFICE_GROUP';
export const DELETE_USER_ACCOUNT_OFFICE_GROUP = 'DELETE_USER_ACCOUNT_OFFICE_GROUP';
export const DELETE_SUCCESS_USER_ACCOUNT_OFFICE_GROUP = 'DELETE_SUCCESS_USER_ACCOUNT_OFFICE_GROUP';
export const DELETE_FAIL_USER_ACCOUNT_OFFICE_GROUP = 'DELETE_FAIL_USER_ACCOUNT_OFFICE_GROUP';
export const GET_USER_ACCOUNT_OFFICE_GROUP = 'GET_USER_ACCOUNT_OFFICE_GROUP';
export const GET_SUCCESS_USER_ACCOUNT_OFFICE_GROUP = 'GET_SUCCESS_USER_ACCOUNT_OFFICE_GROUP';
export const GET_FAIL_USER_ACCOUNT_OFFICE_GROUP = 'GET_FAIL_USER_ACCOUNT_OFFICE_GROUP';
// [ANCHOR_1]

interface PostUserAccountOfficeGroupAction {
type: typeof POST_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupState;
}

interface PostSuccessUserAccountOfficeGroupAction {
type: typeof POST_SUCCESS_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupState;
}

interface PostErrorUserAccountOfficeGroupAction {
type: typeof POST_FAIL_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupRequest;
}

interface PutUserAccountOfficeGroupAction {
type: typeof PUT_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupState;
}

interface PutSuccessUserAccountOfficeGroupAction {
type: typeof PUT_SUCCESS_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupState;
}

interface PutErrorUserAccountOfficeGroupAction {
type: typeof PUT_FAIL_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupRequest;
}

interface UpdateUserAccountOfficeGroupAction {
type: typeof UPDATE_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupState;
}

interface UpdateSuccessUserAccountOfficeGroupAction {
type: typeof UPDATE_SUCCESS_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupState;
}

interface UpdateErrorUserAccountOfficeGroupAction {
type: typeof UPDATE_FAIL_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupRequest;
}

interface DeleteUserAccountOfficeGroupAction {
type: typeof DELETE_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupState;
}

interface DeleteSuccessUserAccountOfficeGroupAction {
type: typeof DELETE_SUCCESS_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupState;
}

interface DeleteErrorUserAccountOfficeGroupAction {
type: typeof DELETE_FAIL_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupRequest;
}

interface GetUserAccountOfficeGroupAction {
type: typeof GET_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupState;
}

interface GetSuccessUserAccountOfficeGroupAction {
type: typeof GET_SUCCESS_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupState;
}

interface GetErrorUserAccountOfficeGroupAction {
type: typeof GET_FAIL_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupRequest;
}
// [ANCHOR_2]

interface StartLoadingAction {
type: typeof START_LOADING;
payload: UserAccountOfficeGroupRequest;
}

interface EndLoadingAction {
type: typeof END_LOADING;
payload: UserAccountOfficeGroupRequest;
}

interface SelectUserAccountOfficeGroupAction {
type: typeof SELECT_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupRequest;
}

interface SelectSuccessUserAccountOfficeGroupAction {
type: typeof SELECT_SUCCESS_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupRequest;
}

interface SelectErrorUserAccountOfficeGroupAction {
type: typeof SELECT_FAIL_USER_ACCOUNT_OFFICE_GROUP;
payload: UserAccountOfficeGroupRequest;
}

export type UserAccountOfficeGroupActionTypes = 
StartLoadingAction
| EndLoadingAction
| SelectUserAccountOfficeGroupAction 
| SelectSuccessUserAccountOfficeGroupAction 
| SelectErrorUserAccountOfficeGroupAction 
| PostUserAccountOfficeGroupAction 
| PostSuccessUserAccountOfficeGroupAction 
| PostErrorUserAccountOfficeGroupAction 
| PutUserAccountOfficeGroupAction 
| PutSuccessUserAccountOfficeGroupAction 
| PutErrorUserAccountOfficeGroupAction 
| UpdateUserAccountOfficeGroupAction 
| UpdateSuccessUserAccountOfficeGroupAction 
| UpdateErrorUserAccountOfficeGroupAction 
| DeleteUserAccountOfficeGroupAction 
| DeleteSuccessUserAccountOfficeGroupAction 
| DeleteErrorUserAccountOfficeGroupAction 
| GetUserAccountOfficeGroupAction 
| GetSuccessUserAccountOfficeGroupAction 
| GetErrorUserAccountOfficeGroupAction 
// [ANCHOR_3]
    