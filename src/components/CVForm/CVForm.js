import React from 'react';
import { Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

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
          toDate: null,
          id: uuidv4()
        }
      ],
      workExperiences: [
        {
          occupationTitle: '',
          employer: '',
          fromDate: null,
          toDate: null,
          responsibilities: '',
          id: uuidv4()
        }
      ],
      isEditableForm: true
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    this.setState({ isEditableForm: false });
    // this.props.onCVCreate({ ...this.state });
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

  handleEducationChange = (field, value, index = 0) => {
    this.setState((prevState) => {
      let state = { educations: prevState.educations.map((e) => ({ ...e })) };

      switch (field) {
        case 'qualificationTitle': {
          state.educations[index].qualificationTitle = value;
          break;
        }
      }

      return state;
    });
  };

  render() {
    const { personalInfo, educations, isEditableForm } = this.state;

    return (
      <Grid container component='form' spacing={3} onSubmit={this.handleSubmit}>
        {/* Personal Information */}
        <Grid item xs={12}>
          <PersonalInformationSection
            personalInfo={personalInfo}
            handleChange={this.handlePersonalInfoChange}
            isEditableForm={isEditableForm}
          />
        </Grid>
        {/* Education and Training*/}
        <Grid item xs={12}>
          <EducationSection
            educations={educations}
            handleChange={this.handleEducationChange}
            isEditableForm={isEditableForm}
          />
        </Grid>
        {/* Work Experience */}
        <Grid item xs={12}>
          {/* <WorkExperienceSection /> */}
        </Grid>
        {/* Create the CV */}
        <Grid item xs={12}>
          <CreateCVSection isEditableForm={isEditableForm} />
        </Grid>
      </Grid>
    );
  }
}
