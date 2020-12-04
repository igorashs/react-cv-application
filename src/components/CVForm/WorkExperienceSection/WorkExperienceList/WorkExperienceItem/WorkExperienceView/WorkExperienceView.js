import React from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { formatDate } from '../../../../../../lib/utils';

export default function EducationView(props) {
  const {
    occupationTitle,
    employer,
    fromDate,
    toDate,
    isOngoing,
    responsibilities,
    id
  } = props.workExperience;

  const { handleEditClick, handleDeleteClick, isAlone } = props;

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
            <Typography variant='h6'>{occupationTitle}</Typography>
            <Typography variant='subtitle1'>{employer}</Typography>
            <Typography variant='subtitle1'>{responsibilities}</Typography>
            <Typography variant='subtitle1'>
              {formatDate(fromDate) +
                (isOngoing ? ' - ongoing' : ` - ${formatDate(toDate)}`)}
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
