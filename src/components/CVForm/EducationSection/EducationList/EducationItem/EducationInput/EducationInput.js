import React from 'react';
import { TextField, FormControlLabel, Switch, Grid } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

export default class EducationInput extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.education !== this.props.education;
  }

  render() {
    const { qualificationTitle, handleChange } = this.props;
    // TODO handle Inputs

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
              handleChange('qualificationTitle', e.target.value, 0)
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='filled'
            label='Organization providing education and training'
            id='education-organization'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <KeyboardDatePicker
            inputVariant='filled'
            format='MM/dd/yyy'
            value={null}
            label='From'
            id='edu-from-date'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <KeyboardDatePicker
            inputVariant='filled'
            format='MM/dd/yyy'
            value={null}
            label='To'
            id='edu-to-date'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControlLabel
            control={<Switch color='primary' id='edu-to-ongoing-date' />}
            label='Ongoing'
          />
        </Grid>
      </Grid>
    );
  }
}
