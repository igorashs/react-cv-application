import React from 'react';
import { Divider, Grid, Typography, Button, Box } from '@material-ui/core';

export default class PersonalInformationView extends React.Component {
  render() {
    const { firstName, lastName, email, phoneNumber } = this.props.info;
    const { handleClick } = this.props;

    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Box
            display='grid'
            justifyContent='space-between'
            gridTemplateColumns='1fr 90px'
            alignItems='start'
          >
            <Box>
              <Typography variant='h6'>{firstName + ' ' + lastName}</Typography>

              <Typography variant='subtitle1'>{email}</Typography>
              <Typography variant='subtitle1'>{phoneNumber}</Typography>
            </Box>
            <Box display='grid'>
              <Button variant='contained' color='primary' onClick={handleClick}>
                Edit
              </Button>
            </Box>
          </Box>
          <Box mt={2.5} width='50%'>
            <Divider />
          </Box>
        </Grid>
      </React.Fragment>
    );
  }
}
