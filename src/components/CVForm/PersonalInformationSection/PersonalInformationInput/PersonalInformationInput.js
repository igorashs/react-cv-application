import React from 'react';
import { TextField, Grid, Button, Box } from '@material-ui/core';
import PhoneField from 'material-ui-phone-number';

export default class PersonalInformationInput extends React.Component {
  render() {
    const { firstName, lastName, email, phoneNumber } = this.props.info;
    const { handleChange, handleClick, isEditable, errors } = this.props;

    return (
      <React.Fragment>
        <Grid item xs={12} sm={6}>
          <TextField
            variant='filled'
            label='First Name'
            id='first-name'
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName}
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
            error={!!errors.lastName}
            helperText={errors.lastName}
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
            error={!!errors.email}
            helperText={errors.email}
            value={email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PhoneField
            variant='filled'
            label='Phone Number'
            id='phone-number'
            fullWidth
            defaultCountry={'us'}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
            value={phoneNumber}
            onChange={(value) => handleChange('phoneNumber', value)}
          />
        </Grid>
        {isEditable && (
          <Grid item xs={12} sm={6}>
            <Box display='grid' gridTemplateColumns='90px'>
              <Button
                variant='contained'
                color='primary'
                onClick={handleClick}
                disabled={!errors.isValid}
              >
                Save
              </Button>
            </Box>
          </Grid>
        )}
      </React.Fragment>
    );
  }
}
