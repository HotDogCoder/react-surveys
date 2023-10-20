import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiCheck, HiPlus, HiX } from 'react-icons/hi';
import { TextField, Button, Checkbox } from '@mui/material';
import { CustomButton } from '../../../core/components/buttons/custom_button';
import { SurveyRequest } from '../redux/types/survey_types';

type Props = {
  colors: string[],
  icon: React.ReactElement,
  label: string,
  handleFormSubmit: (data: SurveyRequest) => void,
  survey: SurveyRequest,
}

export default function NewUserSurveyResponseModal(props:Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const initialSurveyRequestData: SurveyRequest = {
    id: 0,
    name: '',
    questions: [{ id: 0, name: '', options: [{ id: 0, name: '' }] }],
  }

  const [formData, setFormData] = useState<SurveyRequest>(props.survey);

  const handleInputChange = (name: string, value: string | boolean, questionIndex?: number, optionIndex?: number) => {
    let newState: any = { ...formData };

    if (typeof questionIndex === 'number') {
      if (typeof optionIndex === 'number') {
        newState.questions[questionIndex].options[optionIndex][name] = value;
      } else {
        newState.questions[questionIndex][name] = value;
      }
    } else {
      newState[name] = value;
    }

    setFormData(newState);
  };

  const addQuestion = () => {
    setFormData(prev => ({ ...prev, questions: [...prev.questions || [], { id: 0, name: '', options: [] }] }));
  };

  const addOption = (questionIndex: number) => {
    let newState: any = { ...formData };
    newState.questions[questionIndex].options.push({ id: 0, name: '' });
    setFormData(newState);
  };

  const deleteQuestion = (questionIndex: number) => {
    const newQuestions = [...formData.questions || []];
    newQuestions.splice(questionIndex, 1);
    setFormData(prev => ({ ...prev, questions: newQuestions }));
  };

  const deleteOption = (questionIndex: number, optionIndex: number) => {
    const newQuestions = [...formData.questions || []];
    newQuestions[questionIndex].options?.splice(optionIndex, 1);
    setFormData(prev => ({ ...prev, questions: newQuestions }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleFormSubmit(formData);
    // ... [rest of the code]
  };

  return (
    <>
      <CustomButton 
      id='new-case-button'
      colors={props.colors} icon={props.icon} label={props.label} onClick={openModal}/>

      <Transition onClose={closeModal} appear show={isOpen} as={Dialog}>
        <Dialog
          onClose={closeModal}
          className="fixed inset-0 z-50 overflow-y-auto"
          aria-labelledby="modal-title"
          open={isOpen}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Dialog.Overlay}
              className="fixed inset-0 bg-black opacity-30"
            />
            <div className="rounded-lg shadow-lg p-4 w-full md:w-1/2 mx-auto z-10 bg-stone-200 dark:bg-slate-400">
              <Dialog.Title
                id="modal-title"
                className="w-full flex items-center justify-between text-lg md:text-xl p-1 font-medium leading-6 text-slate-700 dark:text-stone-50"
              >
                <strong>Encuesta : {formData.title}</strong> <CustomButton icon={<HiX />} colors={[]} label={''} onClick={closeModal}/>
              </Dialog.Title>
              <form onSubmit={handleSubmit} className="flex flex-wrap items-left bg-stone-200 dark:bg-slate-400">
                {
                  (!formData.questions || formData.questions.length == 0) && (
                    <div className='p-1 w-full'>
                      <TextField 
                        type="text"
                        name="textanswer"
                        label="Respuesta" 
                        variant="outlined"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)} 
                        value={formData.textanswer} 
                        className="w-full" 
                      />
                    </div>
                  )
                }

                {formData.questions?.map((question, qIndex) => (
                  <div key={qIndex} className="w-full p-1">
                    <p className='text-3xl'>{question.text}</p>
                    {(!question.options || question.options.length == 0) && (<TextField 
                      type="text"
                      name="textanswer"
                      label={`Respuesta para la Pregunta ${qIndex + 1}`} 
                      variant="outlined"
                      onChange={(e) => handleInputChange(e.target.name, e.target.value, qIndex)} 
                      value={question.textanswer}
                      className="w-full mb-2"
                    />)}
                    
                    {question.options?.map((option, oIndex) => (
                      <div key={oIndex} className="p-1 flex items-center">
                        <Checkbox 
                          name="selected"
                          
                          onChange={(e) => handleInputChange(e.target.name, e.target.checked ? true : false, qIndex, oIndex)} 
                          value={option.selected} 
                          className="mr-1"
                        />
                        <p className=''>
                          {option.text}
                        </p>
                      </div>
                    ))}
                    </div>
                ))}

                <div className="w-full p-1">
                  <Button startIcon={<HiCheck />} type="submit">
                    Submit
                  </Button>
                </div>

              </form>

            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
