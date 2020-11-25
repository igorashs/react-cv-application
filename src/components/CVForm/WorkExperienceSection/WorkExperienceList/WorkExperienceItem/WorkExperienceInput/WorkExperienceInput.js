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

export default class WorkExperienceInput extends React.Component {
  render() {
    const {
      occupationTitle,
      employer,
      fromDate,
      toDate,
      isOngoing,
      responsibilities,
      id
    } = this.props.workExperience;
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
            label='Title of the occupation'
            id='title-occupation'
            fullWidth
            value={occupationTitle}
            onChange={(e) =>
              handleChange('occupationTitle', e.target.value, id)
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='filled'
            label='Employer'
            id='employer'
            fullWidth
            value={employer}
            onChange={(e) => handleChange('employer', e.target.value, id)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <KeyboardDatePicker
            inputVariant='filled'
            format='MM/dd/yyyy'
            label='From'
            id='work-from-date'
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
            id='work-to-date'
            fullWidth
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
                id='work-to-ongoing-date'
                checked={isOngoing}
                onChange={() => handleChange('isOngoing', !isOngoing, id)}
              />
            }
            label='Ongoing'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='filled'
            label='Main activities and responsibilities'
            id='activities'
            rows='4'
            multiline
            fullWidth
            value={responsibilities}
            onChange={(e) =>
              handleChange('responsibilities', e.target.value, id)
            }
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
