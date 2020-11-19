import React from 'react';
import { Divider, Grid, Typography, Button, Box } from '@material-ui/core';

export default class PersonalInformationView extends React.Component {
  render() {
    const { firstName, lastName, email, phoneNumber } = this.props.info;
    const { handleClick } = this.props;

    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='h6'>{firstName + ' ' + lastName}</Typography>
            <Button variant='contained' color='primary' onClick={handleClick}>
              Edit
            </Button>
          </Box>
          <Typography variant='subtitle1'>{email}</Typography>
          <Typography variant='subtitle1'>{phoneNumber}</Typography>
          <Box mt={2.5} width='50%'>
            <Divider />
          </Box>
        </Grid>
      </React.Fragment>
    );
  }
}
