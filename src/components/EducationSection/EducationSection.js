import React from 'react';
import {
  Box,
  Typography,
  Divider,
  TextField,
  FormControlLabel,
  Switch,
  Button,
  Grid
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
        <Box mt={2.5}>
          <Grid container spacing={2} alignItems='flex-end'>
            <Grid item xs={12}>
              <TextField
                variant='filled'
                label='Title of qualification awarded'
                id='title-qualification'
                fullWidth
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
            <Grid item xs={12} md={2}>
              <Button
                variant='contained'
                color='primary'
                size='large'
                fullWidth
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}
