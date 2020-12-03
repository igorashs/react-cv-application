import React, { useState } from 'react';
import { Box, Typography, Divider, Grid } from '@material-ui/core';
import PersonalInformationInput from './PersonalInformationInput';
import PersonalInformationView from './PersonalInformationView';

export default function PersonalInformationSection(props) {
  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = () => {
    setIsEditable((state) => !state);
  };

  const { isEditableForm, errors, personalInfo, handleChange } = props;

  return (
    <Box component='section'>
      <Typography variant='h5' component='h3'>
        Personal Information
      </Typography>
      <Divider />
      <Box mt={2.5}>
        <Grid container spacing={2}>
          {isEditableForm || isEditable || !errors.isValid ? (
            <PersonalInformationInput
              info={personalInfo}
              errors={errors}
              handleChange={handleChange}
              handleClick={handleEdit}
              isEditable={isEditable}
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
