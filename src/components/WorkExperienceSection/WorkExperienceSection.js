import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Divider,
  Switch,
  Button,
  FormControlLabel,
  Grid
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
        <Box mt={2.5}>
          <Grid container spacing={2} alignItems='flex-end'>
            <Grid item xs={12}>
              <TextField
                variant='filled'
                label='Title of the occupation'
                id='title-occupation'
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='filled'
                label='Employer'
                id='employer'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <KeyboardDatePicker
                inputVariant='filled'
                format='MM/dd/yyy'
                value={null}
                label='From'
                id='work-from-date'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <KeyboardDatePicker
                inputVariant='filled'
                format='MM/dd/yyy'
                value={null}
                label='To'
                id='work-to-date'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControlLabel
                control={<Switch color='primary' id='work-to-ongoing-date' />}
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
