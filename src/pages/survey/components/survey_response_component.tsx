import React from 'react';
import { SurveyResponseRequest } from '../redux/types/survey_response_types';

interface SurveyResultsProps {
  results: SurveyResponseRequest[];
}

const SurveyResponseComponent: React.FC<SurveyResultsProps> = ({ results }) => {
  return (
    <div className="p-4">
      {results?.map(result => (
        <div key={result.id} className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h2 className="text-2xl font-semibold mb-4">{result.surveyTitle} Intento: {result.intent}</h2>
          <ul>
            {result.userSurveyResponses?.map((response, index) => (
              <li key={index} className="mb-2 flex flex-col">
                <strong className="mr-2">{response.question?.text}:</strong>
                {((!response.selectedoptions || response.selectedoptions.length == 0) && (response.textanswer != "")) && (
                  <span className="mr-2">
                    {response.textanswer}
                  </span>
                )}
                {response.selectedoptions?.map((option, index) => (
                  <span key={index} className="mr-2">
                    {option.text}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SurveyResponseComponent;
