import React from 'react';
import { Box, Typography, Divider, Button } from '@material-ui/core';

export default class CreateCVSection extends React.Component {
  render() {
    return (
      <Box component='section'>
        <Typography variant='h5' component='h3'>
          Create the CV
        </Typography>
        <Divider />
        <Box display='grid' gridRowGap={20} mt={2.5}>
          <Button variant='contained' size='large'>
            Create
          </Button>
        </Box>
      </Box>
    );
  }
}
