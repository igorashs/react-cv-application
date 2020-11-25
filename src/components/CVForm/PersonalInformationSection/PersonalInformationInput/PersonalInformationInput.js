import React from 'react';
import { TextField, Grid, Button, Box } from '@material-ui/core';

export default class PersonalInformationInput extends React.Component {
  render() {
    const { firstName, lastName, email, phoneNumber } = this.props.info;
    const { handleChange, handleClick, isEditable } = this.props;

    return (
      <React.Fragment>
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
        {isEditable && (
          <Grid item xs={12} sm={6}>
            <Box display='grid' gridTemplateColumns='90px'>
              <Button variant='contained' color='primary' onClick={handleClick}>
                Save
              </Button>
            </Box>
          </Grid>
        )}
      </React.Fragment>
    );
  }
}
