import React, { useState } from 'react'
import { HiArrowDown, HiArrowUp, HiDocumentReport, HiPencil, HiPlus } from 'react-icons/hi';
import { SurveyRequest, SurveyResponse, SurveyState } from '../redux/types/survey_types';
import { useNavigate } from 'react-router-dom';
import UpdateSurveyForm from './update_survey_form';
import NewSurveyModal from './new_survey_form';
import { CustomButton } from '../../../core/components/buttons/custom_button';
import { UserSurveyResponseRequest } from '../redux/types/user_survey_response_types';
import NewUserSurveyResponseModal from './new_user_survey_response_form';

type Props = {
  data: SurveyRequest[],
  updateSurvey: (data: SurveyRequest) => void,
  reponseSurvey: (data: SurveyRequest) => void,
}

export const SurveyDataTable = (props: Props) => {

  const [isOpen, setIsOpen] = useState(false);
  
  const handleOptionClick = (row: SurveyRequest) => {
    setIsOpen(false)
  };

  function handleNavigation(arg0: { id: number; search: string; case: { id: number; new_one: null; }; }) {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      {props.data ? (
        <div className='pt-5 w-full'>

          <div className="overflow-x-scroll">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Encuesta</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.data?.map((survey) => (
                <tr
                  key={survey.id}
                  onClick={() => handleOptionClick(survey)}
                > 
                  <td className="gap-2 px-0 py-0 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className='p-1 w-1/3'>
                      <UpdateSurveyForm 
                        colors={[]} 
                        icon={<HiPencil/>} 
                        label={'Editar'} 
                        handleFormSubmit={props.updateSurvey} 
                        survey={survey}                        
                      />
                    </div>
                    <div className='p-1 w-1/3'>
                      <NewUserSurveyResponseModal 
                        colors={[]} 
                        icon={<HiPlus/>} 
                        label={'Responder'} 
                        handleFormSubmit={props.reponseSurvey} 
                        survey={survey}                        
                      />
                    </div>
                  </td>
                  <td className="px-0 py-0 whitespace-nowrap text-sm font-medium text-gray-900">{survey.title}</td>
                
                  
                </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      ) : (
        <p>No tienes caseos aun</p>
      )}
    </>
  )
}
