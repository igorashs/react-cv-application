import React from 'react';
import { Box, CssBaseline, Container } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppHeader from './components/AppHeader';
import PersonalInformationSection from './components/PersonalInformationSection';
import EducationSection from './components/EducationSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import CreateCVSection from './components/CreateCVSection';

export default class App extends React.Component {
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
            <Box my={14} component='main' display='grid' gridRowGap={20}>
              {/* Personal Information */}
              <PersonalInformationSection />
              {/* Education and Training*/}
              <EducationSection />
              {/* Work Experience */}
              <WorkExperienceSection />
              {/* Create the CV */}
              <CreateCVSection />
            </Box>
          </Container>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
  }
}
