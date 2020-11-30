import React from 'react';

import { Divider, Box, List, ListItem } from '@material-ui/core';
import WorkExperienceItem from './WorkExperienceItem';

export default class WorkExperienceList extends React.Component {
  shouldComponentUpdate(nextProp) {
    return (
      nextProp.workExperiences !== this.props.workExperiences ||
      nextProp.isEditableForm !== this.props.isEditableForm ||
      nextProp.errorsList !== this.props.errorList
    );
  }

  render() {
    const {
      workExperiences,
      handleChange,
      isEditableForm,
      handleDelete,
      errorsList
    } = this.props;

    return (
      <List disablePadding>
        {workExperiences.map((workExperience) => (
          <ListItem
            key={workExperience.id}
            disableGutters
            style={{ padding: 0, flexDirection: 'column' }}
          >
            <Box minWidth='100%'>
              <WorkExperienceItem
                workExperience={workExperience}
                errors={errorsList.find((e) => e.id === workExperience.id)}
                handleChange={handleChange}
                isEditableForm={isEditableForm}
                handleDelete={handleDelete}
                isAlone={workExperiences.length <= 1}
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
}
