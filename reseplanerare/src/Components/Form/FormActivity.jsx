import React from 'react';

const FormActivity = ({ title, handleSubmit }) => {
  return (
    <form className="h" onSubmit={handleSubmit}>
      <h4>{title}</h4>
      <input type="text" name="aktivitet" placeholder="ange aktivitet" required />
     
    </form>
  );
};

export default FormActivity;