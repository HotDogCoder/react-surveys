import { combineReducers } from "redux";
import { RootState } from "../../../../store";
import UserAccountReducer from "../../../../pages/auth/redux/reducers/user_account_reducer";
import UserAccountOfficeGroupReducer from "../../../../pages/auth/redux/reducers/user_account_office_group_reducer";
import TestReducer from "../test_reducer";
import SurveyReducer from "../../../../pages/survey/redux/reducers/survey_reducer";

export default combineReducers<RootState>({
    user_account_state: UserAccountReducer,
    user_account_office_group_state: UserAccountOfficeGroupReducer,
    survey_state: SurveyReducer,
    test_state: TestReducer
})