import { RootState } from "../../../../store";

// we have redux selector for document and folder
export const user_account_office_group_selected = (state: RootState) => state.user_account_office_group_state?.selected; 

export const user_account_office_groups = (state: RootState) => state.user_account_office_group_state?.user_account_office_groups;