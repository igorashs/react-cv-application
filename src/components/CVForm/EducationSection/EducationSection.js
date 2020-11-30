import React from 'react';
import { Box, Typography, Divider, Button, Grid } from '@material-ui/core';

import EducationList from './EducationList';

export default class EducationSection extends React.Component {
  shouldComponentUpdate(nextProp) {
    return (
      nextProp.educations !== this.props.educations ||
      nextProp.isEditableForm !== this.props.isEditableForm ||
      nextProp.errorsList !== this.props.errorList
    );
  }

  render() {
    const {
      educations,
      handleChange,
      isEditableForm,
      handleAdd,
      handleDelete,
      errorsList
    } = this.props;

    return (
      <Box component='section'>
        <Typography variant='h5' component='h3'>
          Education and Training
        </Typography>
        <Divider />
        <Box mt={2.5}>
          <EducationList
            educations={educations}
            errorsList={errorsList}
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
