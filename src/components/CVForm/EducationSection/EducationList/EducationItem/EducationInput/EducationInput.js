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

export default class EducationInput extends React.Component {
  render() {
    const {
      qualificationTitle,
      organization,
      fromDate,
      toDate,
      isOngoing,
      id
    } = this.props.education;
    const {
      handleChange,
      isAlone,
      handleClick,
      isEditableForm,
      handleDeleteClick
    } = this.props;

    return (
      <Grid container spacing={2} alignItems='flex-end'>
        <Grid item xs={12}>
          <TextField
            variant='filled'
            label='Title of qualification awarded'
            id='title-qualification'
            fullWidth
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
            value={organization}
            onChange={(e) => handleChange('organization', e.target.value, id)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <KeyboardDatePicker
            inputVariant='filled'
            format='MM/dd/yyyy'
            label='From'
            id='edu-from-date'
            fullWidth
            placeholder='1/1/1970'
            disableFuture
            value={fromDate}
            onChange={(date) => handleChange('fromDate', date, id)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <KeyboardDatePicker
            inputVariant='filled'
            format='MM/dd/yyyy'
            label='To'
            id='edu-to-date'
            fullWidth
            placeholder='1/1/1970'
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
        {!isEditableForm && (
          <Grid item xs={12} sm={6}>
            <Box display='grid' gridTemplateColumns='90px'>
              <Button variant='contained' color='primary' onClick={handleClick}>
                Save
              </Button>
            </Box>
          </Grid>
        )}
        {isEditableForm && !isAlone && (
          <Grid item xs={12} sm={6}>
            <Box display='grid' gridTemplateColumns='90px'>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => handleDeleteClick(id)}
              >
                Delete
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    );
  }
}
