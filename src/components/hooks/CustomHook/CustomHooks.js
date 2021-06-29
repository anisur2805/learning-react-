import { useState } from "react";

const useSignUpForm = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs({});

    console.log(e);
    e.target.reset(); 
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };
  return { handleSubmit, handleInputChange, inputs };
};

export default useSignUpForm;
