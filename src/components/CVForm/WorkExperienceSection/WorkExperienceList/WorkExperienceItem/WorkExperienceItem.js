import React, { useState, useEffect } from 'react';

import WorkExperienceInput from './WorkExperienceInput';
import WorkExperienceView from './WorkExperienceView';

export default function WorkExperienceItem(props) {
  const [isEditable, setIsEditable] = useState(true);
  const [isNew, setIsNew] = useState(true);

  const handleSave = () => {
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const {
    workExperience,
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
        <WorkExperienceInput
          workExperience={workExperience}
          errors={errors}
          handleChange={handleChange}
          handleSaveClick={handleSave}
          handleDeleteClick={handleDelete}
          isEditableForm={isEditableForm}
          isAlone={isAlone}
        />
      ) : (
        <WorkExperienceView
          workExperience={workExperience}
          handleEditClick={handleEdit}
          handleDeleteClick={handleDelete}
          isAlone={isAlone}
        />
      )}
    </React.Fragment>
  );
}
