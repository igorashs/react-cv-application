import React from 'react';
import {
  Box,
  Typography,
  Divider,
  TextField,
  FormControlLabel,
  Switch,
  Button
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

export default class EduactionSection extends React.Component {
  render() {
    return (
      <Box component='section'>
        <Typography variant='h5' component='h3'>
          Education and Training
        </Typography>
        <Divider />
        <Box display='grid' gridRowGap={20} mt={2.5}>
          <TextField
            variant='filled'
            label='Title of qualification awarded'
            id='title-qualification'
          />
          <TextField
            variant='filled'
            label='Organization providing education and training'
            id='education-organization'
          />
          <KeyboardDatePicker
            inputVariant='filled'
            format='MM/dd/yyy'
            value={null}
            label='From'
            id='edu-from-date'
          />
          <KeyboardDatePicker
            inputVariant='filled'
            format='MM/dd/yyy'
            value={null}
            label='To'
            id='edu-to-date'
          />
          <FormControlLabel
            control={<Switch color='primary' id='edu-to-ongoing-date' />}
            label='Ongoing'
          />
          <Button variant='contained' color='primary' size='large'>
            Add
          </Button>
        </Box>
      </Box>
    );
  }
}
