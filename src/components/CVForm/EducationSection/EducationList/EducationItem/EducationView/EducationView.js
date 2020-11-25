import React from 'react';
import { Divider, Grid, Typography, Button, Box } from '@material-ui/core';
import { format } from 'date-fns';

export default class EducationView extends React.Component {
  render() {
    const {
      qualificationTitle,
      organization,
      fromDate,
      toDate,
      isOngoing,
      id
    } = this.props.education;
    const { handleEditClick, handleDeleteClick, isAlone } = this.props;

    return (
      <Grid container spacing={2} alignItems='flex-end'>
        <Grid item xs={12}>
          <Box
            display='grid'
            justifyContent='space-between'
            gridTemplateColumns='1fr 90px'
            alignItems='start'
          >
            <Box>
              <Typography variant='h6'>{qualificationTitle}</Typography>
              <Typography variant='subtitle1'>{organization}</Typography>
              <Typography variant='subtitle1'>
                {format(fromDate, 'MM/dd/yyyy') +
                  (isOngoing
                    ? ' - ongoing'
                    : ` - ${format(toDate, 'MM/dd/yyyy')}`)}
              </Typography>
            </Box>
            <Box display='grid' gridRowGap='16px'>
              <Button
                variant='contained'
                color='primary'
                onClick={handleEditClick}
              >
                Edit
              </Button>
              {!isAlone && (
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => handleDeleteClick(id)}
                >
                  Delete
                </Button>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
