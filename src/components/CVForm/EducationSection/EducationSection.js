import React from 'react';
import { Box, Typography, Divider, Button, Grid } from '@material-ui/core';

import EducationList from './EducationList';

export default class EducationSection extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.educations !== this.props.educations;
  }

  render() {
    const { educations, handleChange, isEditableForm } = this.props;

    // TODO add/delete new item

    return (
      <Box component='section'>
        <Typography variant='h5' component='h3'>
          Education and Training
        </Typography>
        <Divider />
        <Box mt={2.5}>
          <EducationList
            educations={educations}
            handleChange={handleChange}
            isEditableForm={isEditableForm}
          />
          <Grid item xs={12} md={2}>
            <Button variant='contained' color='primary' size='large' fullWidth>
              Add
            </Button>
          </Grid>
        </Box>
      </Box>
    );
  }
}
