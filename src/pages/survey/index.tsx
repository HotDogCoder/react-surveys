import FullWidthLayout from "../../layouts/full_width_layout";
import { useEffect, useState } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from "../../store";
import { getTest, postTest } from "../../core/redux/actions/test_action";
import { CustomButton } from "../../core/components/buttons/custom_button";
import { HiAnnotation, HiPlus } from "react-icons/hi";
import NewSurveyModal from "./components/new_survey_form";
import { SurveyDataTable } from "./components/survey_data_table";
import { SurveyRequest, SurveyResponse } from "./redux/types/survey_types";
import { get_ranking_survies, get_survies } from "./redux/selectors";
import { getRankingSurvey, getSurvey, postSurvey, putSurvey } from "./redux/actions/survey_action";
import { UserSurveyResponseRequest } from "./redux/types/user_survey_response_types";
import { postUserSurveyResponse } from "./redux/actions/user_survey_response_action";
import RankingComponent from "./components/ranking_component";

const Survey: React.FC<PropsFromRedux> = ({
  survies,
  ranking_survies,
  getSurvey,
  postSurvey,
  putSurvey,
  postUserSurveyResponse,
  getRankingSurvey
}: PropsFromRedux) => {

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const onInit = async () => {
      try {
        await getSurvey({
          id: 0,
          name: ""
        })
        await getRankingSurvey({
          id: 0
        })
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };
    
    onInit();
  }, []);

  const handle_update = async (data: SurveyRequest) => {
    console.log(data)
    await putSurvey(data)
    await getRankingSurvey({
      id: 0
    })
  }

  const handle_response = async (data: SurveyRequest) => {
    console.log(data)
    await postUserSurveyResponse(data)
    await getRankingSurvey({
      id: 0
    })
  }

  return (
    <FullWidthLayout>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-row items-center justify-center w-full h-full">
          <RankingComponent data={ranking_survies!}/>
        </div>
        <div className="flex flex-row items-center justify-center w-full h-full">
          <NewSurveyModal
            label="Nueva Encuesta" colors={[]} icon={<HiPlus />} handleFormSubmit={function (data: any): void {
              console.log(data);
            } } postSurvey={postSurvey}/>
        </div>
        <div className="flex flex-row items-center justify-center w-full h-full">
          <SurveyDataTable data={survies!} updateSurvey={handle_update} reponseSurvey={handle_response}/>
        </div>
      </div>
    </FullWidthLayout>
  )
}

const mapStateToProps = (state: RootState) => ({
  survies: get_survies(state),
  ranking_survies: get_ranking_survies(state)
});

const mapDispatchToProps = {
  getSurvey,
  postSurvey,
  putSurvey,
  postUserSurveyResponse,
  getRankingSurvey
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Survey);