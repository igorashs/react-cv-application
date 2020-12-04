import React from 'react';

import { Divider, Box, List, ListItem } from '@material-ui/core';
import EducationItem from './EducationItem';

export default function EducationList(props) {
  const {
    educations,
    handleChange,
    isEditableForm,
    handleDelete,
    errorsList
  } = props;

  return (
    <List disablePadding>
      {educations.map((education) => (
        <ListItem
          key={education.id}
          disableGutters
          style={{ padding: 0, flexDirection: 'column' }}
        >
          <Box minWidth='100%'>
            <EducationItem
              education={education}
              errors={errorsList.find((e) => e.id === education.id)}
              handleChange={handleChange}
              isEditableForm={isEditableForm}
              handleDelete={handleDelete}
              isAlone={educations.length <= 1}
            />
            <Box my={2.5} width='50%'>
              <Divider />
            </Box>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
