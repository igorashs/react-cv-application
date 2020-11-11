import React from 'react';
import { Box, CssBaseline, Container } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import AppHeader from './components/AppHeader';
import CVForm from './components/CVForm';

export default class App extends React.Component {
  onCVCreate = (data) => {
    console.log(data);
  };

  render() {
    const darkTheme = createMuiTheme({
      palette: {
        type: 'dark'
      }
    });

    return (
      <ThemeProvider theme={darkTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CssBaseline />
          <AppHeader />
          <Container>
            <Box my={14} component='main'>
              <CVForm onCVCreate={this.onCVCreate} />
            </Box>
          </Container>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
  }
}
