import React from 'react';
import { Box, CssBaseline, Container } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import CVFactory from './lib/cvPDF';

import AppHeader from './components/AppHeader';
import CVForm from './components/CVForm';

export default class App extends React.Component {
  onCVCreate = ({ personalInfo, educations, workExperiences }) => {
    const cv = CVFactory();
    cv.addPersonalInfo(personalInfo);
    cv.addEducations(educations);
    cv.addWorkExperiences(workExperiences);

    cv.saveFile('my-cv.pdf');
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
