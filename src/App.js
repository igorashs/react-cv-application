import React from 'react';
import {
  TextField,
  Box,
  CssBaseline,
  AppBar,
  Divider,
  Typography,
  Container,
  Button,
  Switch,
  FormControlLabel
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
          <Container>
            <Box my={14} component='main' display='grid' gridRowGap={20}>
              {/* Personal Information */}
              <Box>
                <Typography variant='h5' component='h3'>
                  Personal Information
                </Typography>
                <Divider />
                <Box display='grid' gridRowGap={20} mt={2.5}>
                  <TextField
                    variant='filled'
                    label='First Name'
                    id='first-name'
                  />
                  <TextField
                    variant='filled'
                    label='Last Name'
                    id='last-name'
                  />
                  <TextField
                    variant='filled'
                    label='Email'
                    type='email'
                    id='email'
                  />
                  <TextField
                    variant='filled'
                    label='Phone Number'
                    id='phone-number'
                  />
                </Box>
              </Box>
              {/* Education and Training*/}
              <Box>
                <Typography variant='h5' component='h3'>
                  Education and Training
                </Typography>
                <Divider />
                <Box display='grid' gridRowGap={20} mt={2.5}>
                  <TextField
                    variant='filled'
                    label='Title of qualification awarded'
                    id='title-qualification'
                  />
                  <TextField
                    variant='filled'
                    label='Organization providing education and training'
                    id='education-organization'
                  />
                  <KeyboardDatePicker
                    inputVariant='filled'
                    format='MM/dd/yyy'
                    value={null}
                    label='From'
                    id='edu-from-date'
                  />
                  <KeyboardDatePicker
                    inputVariant='filled'
                    format='MM/dd/yyy'
                    value={null}
                    label='To'
                    id='edu-to-date'
                  />
                  <FormControlLabel
                    control={
                      <Switch color='primary' id='edu-to-ongoing-date' />
                    }
                    label='Ongoing'
                  />
                  <Button variant='contained' color='primary' size='large'>
                    Add
                  </Button>
                </Box>
              </Box>
              {/* Work Experience */}
              <Box>
                <Typography variant='h5' component='h3'>
                  Work Experience
                </Typography>
                <Divider />
                <Box display='grid' gridRowGap={20} mt={2.5}>
                  <TextField
                    variant='filled'
                    label='Title of the occupation'
                    id='title-occupation'
                  />
                  <TextField variant='filled' label='Employer' id='employer' />
                  <KeyboardDatePicker
                    inputVariant='filled'
                    format='MM/dd/yyy'
                    value={null}
                    label='From'
                    id='work-from-date'
                  />
                  <KeyboardDatePicker
                    inputVariant='filled'
                    format='MM/dd/yyy'
                    value={null}
                    label='To'
                    id='work-to-date'
                  />
                  <FormControlLabel
                    control={
                      <Switch color='primary' id='work-to-ongoing-date' />
                    }
                    label='Ongoing'
                  />
                  <TextField
                    variant='filled'
                    label='Main activities and responsibilities'
                    id='activities'
                    rows='3'
                    multiline
                  />
                  <Button variant='contained' color='primary' size='large'>
                    Add
                  </Button>
                </Box>
              </Box>
              {/* Create the CV */}
              <Box>
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
            </Box>
          </Container>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
  }
}
