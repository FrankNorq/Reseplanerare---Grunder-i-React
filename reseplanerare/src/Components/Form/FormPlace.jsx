import React from 'react';

const FormPlace = ({ title, handleSubmit }) => {
  return (
    <form className="h" onSubmit={handleSubmit}>
      <h4>{title}</h4>
      <input type="text" name="plats" placeholder="ange plats" required />
      
    </form>
  );
};

export default FormPlace;