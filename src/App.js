import React from 'react';
import { Box, CssBaseline, Container, Grid } from '@material-ui/core';
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
            <Box my={14} component='main'>
              <Grid container spacing={3}>
                {/* Personal Information */}
                <Grid item xs={12}>
                  <PersonalInformationSection />
                </Grid>
                {/* Education and Training*/}
                <Grid item xs={12}>
                  <EducationSection />
                </Grid>
                {/* Work Experience */}
                <Grid item xs={12}>
                  <WorkExperienceSection />
                </Grid>
                {/* Create the CV */}
                <Grid item xs={12}>
                  <CreateCVSection />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
  }
}
