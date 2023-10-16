import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiArrowLeft, HiCheck, HiPlus, HiX } from 'react-icons/hi';
import { TextField, Button } from '@mui/material';
import { CustomButton } from '../../../core/components/buttons/custom_button';
import { SurveyRequest } from '../redux/types/survey_types';

type Props = {
  colors: string[],
  icon: React.ReactElement,
  label: string,
  handleFormSubmit: (data:any) => void,
  postSurvey: (data: SurveyRequest) => void,
}

export default function NewSurveyForm(props:Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const initialSurveyRequestData: SurveyRequest = {
    id: 0,
    title: '',
    questions: [{ id: 0, text: '', options: [{ id: 0, text: '' }] }],
  }

  const [formData, setFormData] = useState<SurveyRequest>(initialSurveyRequestData);

  const handleInputChange = (name: string, value: string, questionIndex?: number, optionIndex?: number) => {
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await props.postSurvey(formData)
  };

  return (
    <>
      <CustomButton 
      id='new-case-button'
      colors={props.colors} icon={props.icon} label={props.label} onClick={openModal}/>

      <Transition onClose={closeModal} appear show={isOpen} as={Dialog}>
        <Dialog
          onClose={closeModal}
          className="fixed inset-0 z-50 overflow-y-auto "
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
                className="text-lg md:text-xl p-1 font-medium leading-6 text-slate-700 dark:text-stone-50"
              >
                <strong>Nueva encuesta</strong>
              </Dialog.Title>
              <form onSubmit={handleSubmit} className="flex flex-wrap items-left">
                
                <div className='p-1 w-full'>
                  <TextField 
                    type="text"
                    name="title"
                    label="Survey Name" 
                    variant="outlined"
                    onChange={(e) => handleInputChange(e.target.name, e.target.value)} 
                    value={formData.title} 
                    className="w-full" 
                  />
                </div>

                {formData.questions?.map((question, qIndex) => (
                  <div key={qIndex} className="w-full p-1">
                    <TextField 
                      type="text"
                      name="text"
                      label={`Question ${qIndex + 1}`} 
                      variant="outlined"
                      onChange={(e) => handleInputChange(e.target.name, e.target.value, qIndex)} 
                      value={question.text}
                      className="w-full mb-2"
                    />

                    {question.options?.map((option, oIndex) => (
                      <div key={oIndex} className="p-1 flex">
                        <TextField 
                          type="text"
                          name="text"
                          label={`Option ${oIndex + 1}`} 
                          variant="outlined"
                          onChange={(e) => handleInputChange(e.target.name, e.target.value, qIndex, oIndex)} 
                          value={option.text} 
                          className="w-full mb-2"
                        />
                        <span className='p-1'></span>
                        <Button startIcon={<HiX />} onClick={() => deleteOption(qIndex, oIndex)}>
                          Delete Option
                        </Button>
                      </div>
                    ))}

                    <div className="w-full flex">
                      <div className='p-1'>
                        <Button startIcon={<HiPlus />} onClick={() => addOption(qIndex)}>
                          Add Option
                        </Button>
                      </div>
                      <div className='p-1'>
                        <Button startIcon={<HiX />} onClick={() => deleteQuestion(qIndex)}>
                          Delete Question
                        </Button>
                      </div>
                    </div>
                    </div>
                ))}

                <div className="w-full p-1">
                  <Button startIcon={<HiPlus />} onClick={addQuestion}>
                    Add Question
                  </Button>
                </div>

                <div className="w-full p-1">
                  <CustomButton icon={<HiCheck />} type="submit" colors={[]} label={'ENVIAR'} onClick={()=>{}}/>
                </div>

              </form>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
