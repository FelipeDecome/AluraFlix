import { useState } from 'react';

function useForm(valorInicial) {
  const [formValues, setFormValues] = useState(valorInicial);
  function setValue(key, value) {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  }

  function handleChangeInputs(e) {
    const { name, value } = e.target;

    setValue(name, value);
  }

  function clearForm(value) {
    setFormValues(value);
  }

  return {
    handleChangeInputs,
    formValues,
    clearForm,
  };
}

export default useForm;
