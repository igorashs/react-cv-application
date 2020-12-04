import React, { useState, useEffect } from 'react';

import EducationInput from './EducationInput';
import EducationView from './EducationView';

export default function EducationItem(props) {
  const [isEditable, setIsEditable] = useState(true);
  const [isNew, setIsNew] = useState(true);

  const handleSave = () => {
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const {
    education,
    handleChange,
    isEditableForm,
    handleDelete,
    isAlone,
    errors
  } = props;

  useEffect(() => {
    if (isNew) {
      setIsNew(false);
      return;
    }

    if (!isEditableForm) {
      setIsEditable(false);
      return;
    }
  }, [isEditableForm]);

  return (
    <React.Fragment>
      {isEditable ? (
        <EducationInput
          education={education}
          errors={errors}
          handleChange={handleChange}
          handleSaveClick={handleSave}
          handleDeleteClick={handleDelete}
          isEditableForm={isEditableForm}
          isAlone={isAlone}
        />
      ) : (
        <EducationView
          education={education}
          handleEditClick={handleEdit}
          handleDeleteClick={handleDelete}
          isAlone={isAlone}
        />
      )}
    </React.Fragment>
  );
}
