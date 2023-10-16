import { RootState } from "../../../../store";

// we have redux selector for document and folder
export const get_survies = (state: RootState) => state.survey_state?.surveies; 
export const selected_survies = (state: RootState) => state.survey_state?.selected;
export const get_ranking_survies = (state: RootState) => state.survey_state?.ranking;