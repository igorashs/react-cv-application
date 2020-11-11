import React from 'react';
import { Grid } from '@material-ui/core';

import PersonalInformationSection from './PersonalInformationSection';
import EducationSection from './EducationSection';
import WorkExperienceSection from './WorkExperienceSection';
import CreateCVSection from './CreateCVSection';

export default class CVForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      },
      educations: [
        {
          qualificationTitle: '',
          organization: '',
          fromDate: null,
          toDate: null
        }
      ],
      workExperiences: [
        {
          occupationTitle: '',
          employer: '',
          fromDate: null,
          toDate: null,
          responsibilities: ''
        }
      ]
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onCVCreate({ ...this.state });
  };

  handlePersonalInfoChange = (field, value) => {
    this.setState((prevState) => {
      let state = { personalInfo: { ...prevState.personalInfo } };

      switch (field) {
        case 'firstName': {
          state.personalInfo.firstName = value;
          break;
        }
        case 'lastName': {
          state.personalInfo.lastName = value;
          break;
        }
        case 'email': {
          state.personalInfo.email = value;
          break;
        }
        case 'phoneNumber': {
          state.personalInfo.phoneNumber = value;
          break;
        }
      }

      return state;
    });
  };

  // got long night with this one
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { personalInfo, educations } = this.state;
    return (
      <Grid container component='form' spacing={3} onSubmit={this.handleSubmit}>
        {/* Personal Information */}
        <Grid item xs={12}>
          <PersonalInformationSection
            personalInfo={personalInfo}
            handleChange={this.handlePersonalInfoChange}
          />
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
    );
  }
}
