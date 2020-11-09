import React from 'react';
import { Box, Typography, Divider, Button, Grid } from '@material-ui/core';

export default class CreateCVSection extends React.Component {
  render() {
    return (
      <Box component='section'>
        <Typography variant='h5' component='h3'>
          Create the CV
        </Typography>
        <Divider />
        <Box mt={2.5}>
          <Grid container>
            <Grid item xs={12} md={2}>
              <Button variant='contained' size='large' fullWidth>
                Create
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}
