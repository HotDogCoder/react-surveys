import { RootState } from "../../../../store";
import { SurveyResponseRequest } from "../types/survey_response_types";
import { QuestionRequest } from "../types/survey_types";
import { UserSurveyResponseRequest } from "../types/user_survey_response_types";

// we have redux selector for document and folder
export const get_survies = (state: RootState) => state.survey_state?.surveies; 
export const selected_survies = (state: RootState) => state.survey_state?.selected;
export const get_ranking_survies = (state: RootState) => state.survey_state?.ranking;
export const get_survey_responses = (state: RootState) => {
    // for each unique id, get the latest survey response
    var result: SurveyResponseRequest[] = [];

    if(state.survey_response_state?.survey_responses){
        let survey_responses = state.survey_response_state?.survey_responses;
        
        if(survey_responses != undefined){
            var result_user_survey_reponses: UserSurveyResponseRequest[] = []
            for (let index = 0; index < survey_responses.length; index++) {
                const survey_response = survey_responses[index];
                let ids = survey_responses[index].userSurveyResponses?.map(userSurveyResponse => userSurveyResponse.questionId) || [];
                let unique_ids = [...new Set(ids)];

                
                // for each unique id, get the latest survey response
                for (let index_1 = 0; index_1 < unique_ids.length; index_1++) {
                    const question_id = unique_ids[index];
                    if(survey_response.userSurveyResponses){
                        for (let index_2 = 0; index_2 < survey_response.userSurveyResponses.length; index_2++) {
                            const element = survey_response.userSurveyResponses[index_2];
                            if (element.questionId == question_id) {
                                var target_result_user_survey_reponse = result_user_survey_reponses.find(userSurveyResponse => userSurveyResponse.questionId == question_id)
                                if(target_result_user_survey_reponse){
                                    // update the question
                                    var target_question_index = result_user_survey_reponses.findIndex((userSurveyResponse: UserSurveyResponseRequest) => userSurveyResponse.question.id == question_id)
                                    console.log('pushing option')
                                    let option_flag = result_user_survey_reponses[target_question_index].selectedoptions?.find(option => option.id == element.option.id)
                                    if(option_flag){
                                        console.log('option already exist')
                                    } else {
                                        console.log('option not exist')
                                        result_user_survey_reponses[target_question_index].selectedoptions?.push(element.option)
                                    }
                                } else {
                                    result_user_survey_reponses.push({...element, question: element.question, option: element.option, selectedoptions: [element.option]})
                                }
                            }
                            
                        }
                    }
                }

                var target_on_result = result.find(survey_response_ => survey_response_.id == survey_response.id)
                if(target_on_result){
                    // update the question
                    var target_question_index = result.findIndex((survey_response_: SurveyResponseRequest) => survey_response_.id == survey_response.id)
                    result[target_question_index].userSurveyResponses = result_user_survey_reponses
                } else {
                    var dummie_reponse = {...survey_response, userSurveyResponses: result_user_survey_reponses}
                    result.push(dummie_reponse)
                }
            }
        }
        
    }

    console.log('result',result)
    return result;
};