import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import rootReducer from "./core/redux/reducers/combinations/root_index"
import { composeWithDevTools } from "redux-devtools-extension"
import { UserAccountState } from "./pages/auth/redux/types/user_account_types";
import { UserAccountOfficeGroupState } from "./pages/auth/redux/types/user_account_office_group_types";
import { TestState } from "./core/redux/types/test_types";
import { GeneralDataState } from "./core/redux/types/general_data_types";
import { SurveyState } from "./pages/survey/redux/types/survey_types";

export interface RootState {
    // [ANCHOR_1]
    alert?: any;
    
    user_account_state?: UserAccountState;
    user_account_office_group_state?: UserAccountOfficeGroupState;
    general_data_state?: GeneralDataState;
    survey_state?: SurveyState;

    test_state?: TestState;
}

const initialState: RootState = {}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store