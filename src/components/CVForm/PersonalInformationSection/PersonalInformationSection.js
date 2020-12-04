import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider, Grid } from '@material-ui/core';
import PersonalInformationInput from './PersonalInformationInput';
import PersonalInformationView from './PersonalInformationView';

export default function PersonalInformationSection(props) {
  const [isEditable, setIsEditable] = useState(true);

  const handleEdit = () => {
    setIsEditable((state) => !state);
  };

  const { isEditableForm, errors, personalInfo, handleChange } = props;

  useEffect(() => {
    if (!isEditableForm) {
      setIsEditable(false);
    }
  }, [isEditableForm]);

  return (
    <Box component='section'>
      <Typography variant='h5' component='h3'>
        Personal Information
      </Typography>
      <Divider />
      <Box mt={2.5}>
        <Grid container spacing={2}>
          {isEditable ? (
            <PersonalInformationInput
              info={personalInfo}
              errors={errors}
              handleChange={handleChange}
              handleClick={handleEdit}
              isEditableForm={isEditableForm}
            />
          ) : (
            <PersonalInformationView
              info={personalInfo}
              handleClick={handleEdit}
            />
          )}
        </Grid>
      </Box>
    </Box>
  );
}
