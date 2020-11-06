import React from 'react';
import { Box, Typography, Divider, TextField } from '@material-ui/core';

export default class PersonalInformationSection extends React.Component {
  render() {
    return (
      <Box component='section'>
        <Typography variant='h5' component='h3'>
          Personal Information
        </Typography>
        <Divider />
        <Box display='grid' gridRowGap={20} mt={2.5}>
          <TextField variant='filled' label='First Name' id='first-name' />
          <TextField variant='filled' label='Last Name' id='last-name' />
          <TextField variant='filled' label='Email' type='email' id='email' />
          <TextField variant='filled' label='Phone Number' id='phone-number' />
        </Box>
      </Box>
    );
  }
}
