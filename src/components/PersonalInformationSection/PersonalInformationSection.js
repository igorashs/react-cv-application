import React from 'react';
import { Box, Typography, Divider, TextField, Grid } from '@material-ui/core';

export default class PersonalInformationSection extends React.Component {
  render() {
    return (
      <Box component='section'>
        <Typography variant='h5' component='h3'>
          Personal Information
        </Typography>
        <Divider />
        <Box mt={2.5}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='filled'
                label='First Name'
                id='first-name'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='filled'
                label='Last Name'
                id='last-name'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='filled'
                label='Email'
                type='email'
                id='email'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='filled'
                label='Phone Number'
                id='phone-number'
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}
