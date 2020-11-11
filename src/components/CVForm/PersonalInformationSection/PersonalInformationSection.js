import React from 'react';
import { Box, Typography, Divider, TextField, Grid } from '@material-ui/core';

export default class PersonalInformationSection extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      handleChange
    } = this.props;

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
                value={firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='filled'
                label='Last Name'
                id='last-name'
                fullWidth
                value={lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='filled'
                label='Email'
                type='email'
                id='email'
                fullWidth
                value={email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='filled'
                label='Phone Number'
                id='phone-number'
                fullWidth
                value={phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}
