import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Divider,
  Switch,
  Button,
  FormControlLabel
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

export default class WorkExperienceSection extends React.Component {
  render() {
    return (
      <Box component='section'>
        <Typography variant='h5' component='h3'>
          Work Experience
        </Typography>
        <Divider />
        <Box display='grid' gridRowGap={20} mt={2.5}>
          <TextField
            variant='filled'
            label='Title of the occupation'
            id='title-occupation'
          />
          <TextField variant='filled' label='Employer' id='employer' />
          <KeyboardDatePicker
            inputVariant='filled'
            format='MM/dd/yyy'
            value={null}
            label='From'
            id='work-from-date'
          />
          <KeyboardDatePicker
            inputVariant='filled'
            format='MM/dd/yyy'
            value={null}
            label='To'
            id='work-to-date'
          />
          <FormControlLabel
            control={<Switch color='primary' id='work-to-ongoing-date' />}
            label='Ongoing'
          />
          <TextField
            variant='filled'
            label='Main activities and responsibilities'
            id='activities'
            rows='3'
            multiline
          />
          <Button variant='contained' color='primary' size='large'>
            Add
          </Button>
        </Box>
      </Box>
    );
  }
}
