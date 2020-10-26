import React, {useCallback} from 'react';
import FormGenerator from '../../components/FormGenerator';

const form = [
  {
    label: 'What is the name of the officer in question?',
    type: 'text',
    validation: {required: true, disabled: true, readOnly: true, pattern: ""}
  },
  {
    label: 'When was the date of the incident?',
    type: 'date',
    validation: {required: true, disabled: false, readOnly: false, pattern: ""}
  },
  {
    label: 'How much is the bribe that was paid? (optional)',
    type: 'number',
    validation: {required: true, disabled: false, readOnly: false, pattern: ""}
  },
  {
    label: 'Whats your favorite Fruit',
    type: 'select',
    options: ["Orange", "Apple", "Mango"],
    validation: {required: true, disabled: false, readOnly: true, pattern: ""}
  },
];

// We have omitted the header and buttons from the data structure. You may choose how this bit fit into the datastructure

const FormPage = () => {
  const handleSubmission = useCallback((formFields) => {
    // Logic to handle submission of form fields
  }, []);

  return <FormGenerator form={form} submit={handleSubmission} />;
};

export default FormPage;