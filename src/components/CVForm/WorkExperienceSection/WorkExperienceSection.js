import React from 'react';
import { Box, Typography, Divider, Grid, Button } from '@material-ui/core';

import WorkExperienceList from './WorkExperienceList';

export default class WorkExperienceSection extends React.Component {
  shouldComponentUpdate(nextProp) {
    return (
      nextProp.workExperiences !== this.props.workExperiences ||
      nextProp.isEditableForm !== this.props.isEditableForm
    );
  }

  render() {
    const {
      workExperiences,
      handleChange,
      isEditableForm,
      handleAdd,
      handleDelete
    } = this.props;

    return (
      <Box component='section'>
        <Typography variant='h5' component='h3'>
          Work Experience
        </Typography>
        <Divider />
        <Box mt={2.5}>
          <WorkExperienceList
            workExperiences={workExperiences}
            handleChange={handleChange}
            isEditableForm={isEditableForm}
            handleDelete={handleDelete}
          />
          <Grid item xs={12} md={2}>
            <Button
              variant='contained'
              color='primary'
              size='large'
              fullWidth
              onClick={handleAdd}
            >
              Add
            </Button>
          </Grid>
        </Box>
      </Box>
    );
  }
}
