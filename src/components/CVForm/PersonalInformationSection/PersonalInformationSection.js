import React from 'react';
import { Box, Typography, Divider, Grid } from '@material-ui/core';
import PersonalInformationInput from './PersonalInformationInput';
import PersonalInformationView from './PersonalInformationView';

export default class PersonalInformationSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditable: false
    };
  }

  handleEdit = () => {
    this.setState((curState) => ({
      isEditable: !curState.isEditable
    }));
  };

  shouldComponentUpdate(nextProp, nextState) {
    return (
      nextProp.personalInfo !== this.props.personalInfo ||
      nextProp.isEditableForm !== this.props.isEditableForm ||
      nextState.isEditable !== this.state.isEditable ||
      nextProp.errors !== this.props.errors
    );
  }

  render() {
    return (
      <Box component='section'>
        <Typography variant='h5' component='h3'>
          Personal Information
        </Typography>
        <Divider />
        <Box mt={2.5}>
          <Grid container spacing={2}>
            {this.props.isEditableForm || this.state.isEditable ? (
              <PersonalInformationInput
                info={this.props.personalInfo}
                errors={this.props.errors}
                handleChange={this.props.handleChange}
                handleClick={this.handleEdit}
                isEditable={this.state.isEditable}
              />
            ) : (
              <PersonalInformationView
                info={this.props.personalInfo}
                handleClick={this.handleEdit}
              />
            )}
          </Grid>
        </Box>
      </Box>
    );
  }
}
