import React, { useState } from 'react';
import useConfirmLeave from '../hooks/useConfirmLeave';

const UnsavedForm = () => {
  const [formData, setFormData] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  useConfirmLeave(isDirty); // ⚠️ Warn only if form is dirty

  const handleChange = (e) => {
    setFormData(e.target.value);
    setIsDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    setIsDirty(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>📝 Unsaved Changes Protection</h2>
      <textarea value={formData} onChange={handleChange} rows={4} cols={40} />
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default UnsavedForm;
