import React from 'react';
import { AppBar, Box, Typography } from '@material-ui/core';

export default function AppHeader() {
  return (
    <AppBar>
      <Box p={1.25}>
        <Typography variant='h4' component='h1'>
          CV-Application
        </Typography>
        <Typography variant='subtitle1' component='h2'>
          Make your CV!
        </Typography>
      </Box>
    </AppBar>
  );
}
