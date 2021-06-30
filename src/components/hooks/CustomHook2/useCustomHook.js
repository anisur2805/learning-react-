import { useState } from "react";

const useCustomHook = submitCallback => {
  const [state, setState] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    submitCallback();
	setState({})
    e.target.reset()
  };

  const handleChange = e => {
    e.persist();
    setState( state => ({ ...state, [e.target.name]: e.target.value }));
  };
  return [state, handleChange, handleSubmit];
};

export default useCustomHook;
