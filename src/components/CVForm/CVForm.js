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
          fromDate: new Date(),
          toDate: new Date(),
          isOngoing: false,
          id: uuidv4()
        }
      ],
      workExperiences: [
        {
          occupationTitle: '',
          employer: '',
          fromDate: new Date(),
          toDate: new Date(),
          isOngoing: false,
          responsibilities: '',
          id: uuidv4()
        }
      ],
      isEditableForm: true,
      isPreview: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.isPreview) {
      window.scrollTo(0, 0);
      this.setState({ isEditableForm: false, isPreview: true });
    } else {
      // TODO Converting to PDF

      const { personalInfo, educations, workExperiences } = this.state;
      this.props.onCVCreate({ personalInfo, educations, workExperiences });
    }
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

  handleAddEducation = () => {
    this.setState((prevState) => {
      let state = { educations: prevState.educations.map((e) => ({ ...e })) };

      state.educations.push({
        qualificationTitle: '',
        organization: '',
        fromDate: new Date(),
        toDate: new Date(),
        isOngoing: false,
        id: uuidv4()
      });

      return state;
    });
  };

  handleDeleteEducation = (id) => {
    this.setState((prevState) => {
      let state = {
        educations: prevState.educations.filter((e) => e.id !== id)
      };

      return state;
    });
  };

  handleEducationChange = (field, value, id) => {
    this.setState((prevState) => {
      let state = { educations: prevState.educations.map((e) => ({ ...e })) };
      const education = state.educations.find((edu) => edu.id === id);

      switch (field) {
        case 'qualificationTitle': {
          education.qualificationTitle = value;
          break;
        }
        case 'organization': {
          education.organization = value;
          break;
        }
        case 'fromDate': {
          education.fromDate = value;
          break;
        }
        case 'toDate': {
          education.toDate = value;
          break;
        }
        case 'isOngoing': {
          education.isOngoing = value;
          break;
        }
      }

      return state;
    });
  };

  handleAddWorkExperience = () => {
    this.setState((prevState) => {
      let state = {
        workExperiences: prevState.workExperiences.map((w) => ({ ...w }))
      };

      state.workExperiences.push({
        occupationTitle: '',
        employer: '',
        fromDate: new Date(),
        toDate: new Date(),
        isOngoing: false,
        responsibilities: '',
        id: uuidv4()
      });

      return state;
    });
  };

  handleDeleteWorkExperience = (id) => {
    this.setState((prevState) => {
      let state = {
        workExperiences: prevState.workExperiences.filter((w) => w.id !== id)
      };

      return state;
    });
  };

  handleWorkExperienceChange = (field, value, id) => {
    this.setState((prevState) => {
      let state = {
        workExperiences: prevState.workExperiences.map((w) => ({ ...w }))
      };
      const workExperience = state.workExperiences.find((w) => w.id === id);

      switch (field) {
        case 'occupationTitle': {
          workExperience.occupationTitle = value;
          break;
        }
        case 'employer': {
          workExperience.employer = value;
          break;
        }
        case 'fromDate': {
          workExperience.fromDate = value;
          break;
        }
        case 'toDate': {
          workExperience.toDate = value;
          break;
        }
        case 'isOngoing': {
          workExperience.isOngoing = value;
          break;
        }
        case 'responsibilities': {
          workExperience.responsibilities = value;
          break;
        }
      }

      return state;
    });
  };

  render() {
    const {
      personalInfo,
      educations,
      workExperiences,
      isEditableForm
    } = this.state;

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
            handleAdd={this.handleAddEducation}
            handleDelete={this.handleDeleteEducation}
            isEditableForm={isEditableForm}
          />
        </Grid>
        {/* Work Experience */}
        <Grid item xs={12}>
          <WorkExperienceSection
            workExperiences={workExperiences}
            handleChange={this.handleWorkExperienceChange}
            handleAdd={this.handleAddWorkExperience}
            handleDelete={this.handleDeleteWorkExperience}
            isEditableForm={isEditableForm}
          />
        </Grid>
        {/* Create the CV */}
        <Grid item xs={12}>
          <CreateCVSection isEditableForm={isEditableForm} />
        </Grid>
      </Grid>
    );
  }
}
