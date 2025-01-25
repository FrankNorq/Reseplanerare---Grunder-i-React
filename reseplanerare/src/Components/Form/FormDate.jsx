import React from 'react';

const FormDate = ({ title, handleSubmit }) => {
  return (
    <form className="h" onSubmit={handleSubmit}>
      <h4>{title}</h4>
      <input type="date" name="datum" placeholder="ange datum" required />
      
    </form>
  );
};

export default FormDate;