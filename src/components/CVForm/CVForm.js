import React from 'react';
import { Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import PersonalInformationSection from './PersonalInformationSection';
import EducationSection from './EducationSection';
import WorkExperienceSection from './WorkExperienceSection';
import CreateCVSection from './CreateCVSection';

import validator from '../../lib/validator';

export default class CVForm extends React.Component {
  constructor(props) {
    super(props);

    const initEducationID = uuidv4();
    const initWorkExperienceID = uuidv4();

    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      },
      educations: [
        {
          id: initEducationID,
          qualificationTitle: '',
          organization: '',
          fromDate: null,
          toDate: null,
          isOngoing: false
        }
      ],
      workExperiences: [
        {
          id: initWorkExperienceID,
          occupationTitle: '',
          employer: '',
          fromDate: null,
          toDate: null,
          isOngoing: false,
          responsibilities: ''
        }
      ],
      sectionsErrors: {
        personalInfo: {
          isValid: false,
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: ''
        },
        educations: [
          {
            isValid: false,
            id: initEducationID,
            qualificationTitle: '',
            organization: '',
            fromDate: '',
            toDate: '',
            areFieldsCompleted: false
          }
        ],
        workExperiences: [
          {
            isValid: false,
            id: initWorkExperienceID,
            occupationTitle: '',
            employer: '',
            fromDate: '',
            toDate: '',
            responsibilities: '',
            areFieldsCompleted: false
          }
        ]
      },
      isEditableForm: true,
      isPreview: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { personalInfo, educations, workExperiences } = this.state;

    if (!this.state.isPreview) {
      window.scrollTo(0, 0);

      const [isValid, sectionsErrors] = validator.validateForm(
        personalInfo,
        educations,
        workExperiences
      );

      if (isValid) {
        this.setState({ isEditableForm: false, isPreview: true });
      } else {
        this.setState({ sectionsErrors });
      }
    } else {
      const [isValid, sectionsErrors] = validator.validateForm(
        personalInfo,
        educations,
        workExperiences
      );

      if (isValid) {
        this.props.onCVCreate({ personalInfo, educations, workExperiences });
      } else {
        this.setState({ sectionsErrors });
      }
    }
  };

  handlePersonalInfoChange = (field, value) => {
    this.setState((prevState) => {
      let state = {
        personalInfo: { ...prevState.personalInfo },
        sectionsErrors: {
          ...prevState.sectionsErrors,
          personalInfo: { ...prevState.sectionsErrors.personalInfo }
        }
      };
      const { personalInfo: errors } = state.sectionsErrors;

      switch (field) {
        case 'firstName': {
          state.personalInfo.firstName = value;
          errors.firstName = validator.validateName(value);
          break;
        }
        case 'lastName': {
          state.personalInfo.lastName = value;
          errors.lastName = validator.validateName(value);
          break;
        }
        case 'email': {
          state.personalInfo.email = value;
          errors.email = validator.validateEmail(value);
          break;
        }
        case 'phoneNumber': {
          state.personalInfo.phoneNumber = value;
          errors.phoneNumber = validator.validatePhone(value);
          break;
        }
      }

      errors.isValid = validator.isPersonalInformationValid(errors);

      return state;
    });
  };

  handleAddEducation = () => {
    this.setState((prevState) => {
      let state = {
        educations: prevState.educations.map((e) => ({ ...e })),
        sectionsErrors: {
          ...prevState.sectionsErrors,
          educations: prevState.sectionsErrors.educations.map((e) => ({ ...e }))
        }
      };

      const id = uuidv4();

      state.educations.push({
        qualificationTitle: '',
        organization: '',
        fromDate: null,
        toDate: null,
        isOngoing: false,
        id
      });

      state.sectionsErrors.educations.push({
        isValid: false,
        id,
        qualificationTitle: '',
        organization: '',
        fromDate: '',
        toDate: '',
        areFieldsCompleted: false
      });

      return state;
    });
  };

  handleDeleteEducation = (id) => {
    this.setState((prevState) => {
      let state = {
        educations: prevState.educations.filter((e) => e.id !== id),
        sectionsErrors: {
          ...prevState.sectionsErrors,
          educations: prevState.sectionsErrors.educations.filter(
            (e) => e.id !== id
          )
        }
      };

      return state;
    });
  };

  handleEducationChange = (field, value, id) => {
    this.setState((prevState) => {
      let state = {
        educations: prevState.educations.map((e) => ({ ...e })),
        sectionsErrors: {
          ...prevState.sectionsErrors,
          educations: prevState.sectionsErrors.educations.map((e) => ({ ...e }))
        }
      };

      const education = state.educations.find((edu) => edu.id === id);
      const errors = state.sectionsErrors.educations.find(
        (edu) => edu.id === id
      );

      switch (field) {
        case 'qualificationTitle': {
          education.qualificationTitle = value;
          errors.qualificationTitle = validator.validateName(value);
          break;
        }
        case 'organization': {
          education.organization = value;
          errors.organization = validator.validateName(value);
          break;
        }
        case 'fromDate': {
          education.fromDate = value;
          errors.fromDate = validator.validateStartDate(
            value,
            !education.isOngoing && education.toDate
          );

          if (!errors.fromDate && errors.toDate)
            errors.toDate = validator.validateEndDate(education.toDate, value);
          break;
        }
        case 'toDate': {
          education.toDate = value;
          errors.toDate = education.isOngoing
            ? ''
            : validator.validateEndDate(value, education.fromDate);

          if (!errors.toDate && errors.fromDate)
            errors.fromDate = validator.validateStartDate(
              education.fromDate,
              value
            );
          break;
        }
        case 'isOngoing': {
          education.isOngoing = value;
          if (value) {
            errors.fromDate = validator.validateStartDate(
              education.fromDate,
              null
            );
            errors.toDate = '';
          } else {
            errors.toDate = validator.validateEndDate(
              education.toDate,
              education.fromDate
            );
          }
          break;
        }
      }

      errors.isValid = validator.isEducationValid(errors);
      errors.areFieldsCompleted = validator.areEducationCompleted(education);

      return state;
    });
  };

  handleAddWorkExperience = () => {
    this.setState((prevState) => {
      let state = {
        workExperiences: prevState.workExperiences.map((w) => ({ ...w })),
        sectionsErrors: {
          ...prevState.sectionsErrors,
          workExperiences: prevState.sectionsErrors.workExperiences.map(
            (w) => ({ ...w })
          )
        }
      };

      const id = uuidv4();

      state.workExperiences.push({
        occupationTitle: '',
        employer: '',
        fromDate: null,
        toDate: null,
        isOngoing: false,
        responsibilities: '',
        id
      });

      state.sectionsErrors.workExperiences.push({
        isValid: false,
        id,
        occupationTitle: '',
        employer: '',
        fromDate: '',
        toDate: '',
        responsibilities: '',
        areFieldsCompleted: false
      });

      return state;
    });
  };

  handleDeleteWorkExperience = (id) => {
    this.setState((prevState) => {
      let state = {
        workExperiences: prevState.workExperiences.filter((w) => w.id !== id),
        sectionsErrors: {
          ...prevState.sectionsErrors,
          workExperiences: prevState.sectionsErrors.workExperiences.filter(
            (w) => w.id !== id
          )
        }
      };

      return state;
    });
  };

  handleWorkExperienceChange = (field, value, id) => {
    this.setState((prevState) => {
      let state = {
        workExperiences: prevState.workExperiences.map((w) => ({ ...w })),
        sectionsErrors: {
          ...prevState.sectionsErrors,
          workExperiences: prevState.sectionsErrors.workExperiences.map(
            (w) => ({ ...w })
          )
        }
      };
      const workExperience = state.workExperiences.find((w) => w.id === id);
      const errors = state.sectionsErrors.workExperiences.find(
        (w) => w.id === id
      );

      switch (field) {
        case 'occupationTitle': {
          workExperience.occupationTitle = value;
          errors.occupationTitle = validator.validateName(value);
          break;
        }
        case 'employer': {
          workExperience.employer = value;
          errors.employer = validator.validateName(value);
          break;
        }
        case 'fromDate': {
          workExperience.fromDate = value;
          errors.fromDate = validator.validateStartDate(
            value,
            !workExperience.isOngoing && workExperience.toDate
          );

          if (!errors.fromDate && errors.toDate)
            errors.toDate = validator.validateEndDate(
              workExperience.toDate,
              value
            );
          break;
        }
        case 'toDate': {
          workExperience.toDate = value;
          errors.toDate = workExperience.isOngoing
            ? ''
            : validator.validateEndDate(value, workExperience.fromDate);

          if (!errors.toDate && errors.fromDate)
            errors.fromDate = validator.validateStartDate(
              workExperience.fromDate,
              value
            );
          break;
        }
        case 'isOngoing': {
          workExperience.isOngoing = value;
          if (value) {
            errors.fromDate = validator.validateStartDate(
              workExperience.fromDate,
              null
            );
            errors.toDate = '';
          } else {
            errors.toDate = validator.validateEndDate(
              workExperience.toDate,
              workExperience.fromDate
            );
          }
          break;
        }
        case 'responsibilities': {
          workExperience.responsibilities = value;
          break;
        }
      }

      errors.isValid = validator.isWorkExperienceValid(errors);
      errors.areFieldsCompleted = validator.areWorkExperienceCompleted(
        workExperience
      );

      return state;
    });
  };

  render() {
    const {
      personalInfo,
      educations,
      workExperiences,
      isEditableForm,
      sectionsErrors
    } = this.state;

    return (
      <Grid container component='form' spacing={3} onSubmit={this.handleSubmit}>
        {/* Personal Information */}
        <Grid item xs={12}>
          <PersonalInformationSection
            personalInfo={personalInfo}
            errors={sectionsErrors.personalInfo}
            handleChange={this.handlePersonalInfoChange}
            isEditableForm={isEditableForm}
          />
        </Grid>
        {/* Education and Training*/}
        <Grid item xs={12}>
          <EducationSection
            educations={educations}
            errorsList={sectionsErrors.educations}
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
            errorsList={sectionsErrors.workExperiences}
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
