import React from 'react';
import {
  TextField,
  FormControlLabel,
  Switch,
  Grid,
  Button,
  Box
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

export default function EducationInput(props) {
  const {
    qualificationTitle,
    organization,
    fromDate,
    toDate,
    isOngoing,
    id
  } = props.education;

  const {
    handleChange,
    isAlone,
    handleSaveClick,
    isEditableForm,
    handleDeleteClick,
    errors
  } = props;

  return (
    <Grid container spacing={2} alignItems='flex-start'>
      <Grid item xs={12}>
        <TextField
          variant='filled'
          label='Title of qualification awarded'
          id='title-qualification'
          fullWidth
          error={!!errors.qualificationTitle}
          helperText={errors.qualificationTitle}
          value={qualificationTitle}
          onChange={(e) =>
            handleChange('qualificationTitle', e.target.value, id)
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant='filled'
          label='Organization providing education and training'
          id='education-organization'
          fullWidth
          error={!!errors.organization}
          helperText={errors.organization}
          value={organization}
          onChange={(e) => handleChange('organization', e.target.value, id)}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={5}>
        <KeyboardDatePicker
          inputVariant='filled'
          format='dd/MM/yyyy'
          label='From'
          id='edu-from-date'
          fullWidth
          placeholder='14/01/1970'
          disableFuture
          error={!!errors.fromDate}
          helperText={errors.fromDate}
          value={fromDate}
          onChange={(date) => handleChange('fromDate', date, id)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={5}>
        <KeyboardDatePicker
          inputVariant='filled'
          format='dd/MM/yyyy'
          label='To'
          id='edu-to-date'
          fullWidth
          placeholder='14/01/1971'
          disableFuture
          error={!!errors.toDate}
          helperText={errors.toDate}
          value={toDate}
          onChange={(date) => handleChange('toDate', date, id)}
          disabled={isOngoing}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <FormControlLabel
          control={
            <Switch
              color='primary'
              id='edu-to-ongoing-date'
              checked={isOngoing}
              onChange={() => handleChange('isOngoing', !isOngoing, id)}
            />
          }
          label='Ongoing'
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          display='grid'
          gridTemplateColumns='90px 90px'
          gridColumnGap='16px'
        >
          {!isEditableForm && (
            <Button
              variant='contained'
              color='primary'
              onClick={handleSaveClick}
              disabled={!errors.isValid || !errors.areFieldsCompleted}
            >
              Save
            </Button>
          )}
          {!isAlone && (
            <Button
              variant='contained'
              color='secondary'
              onClick={() => handleDeleteClick(id)}
            >
              Delete
            </Button>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
