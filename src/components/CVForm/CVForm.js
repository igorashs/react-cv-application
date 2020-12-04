import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import PersonalInformationSection from './PersonalInformationSection';
import EducationSection from './EducationSection';
import WorkExperienceSection from './WorkExperienceSection';
import CreateCVSection from './CreateCVSection';

import validator from '../../lib/validator';

const initEducationID = uuidv4();
const initWorkExperienceID = uuidv4();

export default function CVForm(props) {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });
  const [educations, setEducations] = useState([
    {
      id: initEducationID,
      qualificationTitle: '',
      organization: '',
      fromDate: null,
      toDate: null,
      isOngoing: false
    }
  ]);
  const [workExperiences, setWorkExperiences] = useState([
    {
      id: initWorkExperienceID,
      occupationTitle: '',
      employer: '',
      fromDate: null,
      toDate: null,
      isOngoing: false,
      responsibilities: ''
    }
  ]);
  const [sectionsErrors, setSectionsErrors] = useState({
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
  });
  const [isEditableForm, setIsEditableForm] = useState(true);
  const [isPreview, setIsPreview] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isPreview) {
      const [isValid, sectionsErrors] = validator.validateForm(
        personalInfo,
        educations,
        workExperiences
      );

      if (isValid) {
        window.scrollTo(0, 0);

        setIsEditableForm(false);
        setIsPreview(true);
      } else {
        setSectionsErrors(sectionsErrors);
      }
    } else {
      const [isValid, sectionsErrors] = validator.validateForm(
        personalInfo,
        educations,
        workExperiences
      );

      if (isValid) {
        props.onCVCreate({ personalInfo, educations, workExperiences });
      } else {
        setSectionsErrors(sectionsErrors);
      }
    }
  };

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo((prevState) => {
      const personalInfo = { ...prevState };
      const { personalInfo: errors } = { ...sectionsErrors };

      switch (field) {
        case 'firstName': {
          personalInfo.firstName = value;
          errors.firstName = validator.validateName(value);
          break;
        }
        case 'lastName': {
          personalInfo.lastName = value;
          errors.lastName = validator.validateName(value);
          break;
        }
        case 'email': {
          personalInfo.email = value;
          errors.email = validator.validateEmail(value);
          break;
        }
        case 'phoneNumber': {
          personalInfo.phoneNumber = value;
          errors.phoneNumber = validator.validatePhone(value);
          break;
        }
      }

      errors.isValid = validator.isPersonalInformationValid(errors);
      setSectionsErrors((prevState) => ({
        ...prevState,
        personalInfo: errors
      }));

      return personalInfo;
    });
  };

  const handleAddEducation = () => {
    const id = uuidv4();

    setEducations((prevState) => {
      const educations = prevState.map((e) => ({ ...e }));

      educations.push({
        qualificationTitle: '',
        organization: '',
        fromDate: null,
        toDate: null,
        isOngoing: false,
        id
      });

      return educations;
    });

    setSectionsErrors((prevState) => {
      const sectionsErrors = {
        ...prevState,
        educations: prevState.educations.map((e) => ({ ...e }))
      };

      sectionsErrors.educations.push({
        isValid: false,
        id,
        qualificationTitle: '',
        organization: '',
        fromDate: '',
        toDate: '',
        areFieldsCompleted: false
      });

      return sectionsErrors;
    });
  };

  const handleDeleteEducation = (id) => {
    setEducations((prevState) => prevState.filter((e) => e.id !== id));

    setSectionsErrors((prevState) => ({
      ...prevState,
      educations: prevState.educations.filter((e) => e.id !== id)
    }));
  };

  const handleEducationChange = (field, value, id) => {
    setEducations((prevState) => {
      const educations = prevState.map((e) => ({ ...e }));
      const education = educations.find((edu) => edu.id === id);
      const educationsErrors = sectionsErrors.educations.map((e) => ({ ...e }));
      const errors = educationsErrors.find((edu) => edu.id === id);

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

      setSectionsErrors((prevState) => {
        return { ...prevState, educations: educationsErrors };
      });

      return educations;
    });
  };

  const handleAddWorkExperience = () => {
    const id = uuidv4();

    setWorkExperiences((prevState) => {
      const workExperiences = prevState.map((w) => ({ ...w }));

      workExperiences.push({
        occupationTitle: '',
        employer: '',
        fromDate: null,
        toDate: null,
        isOngoing: false,
        responsibilities: '',
        id
      });

      return workExperiences;
    });

    setSectionsErrors((prevState) => {
      const sectionsErrors = {
        ...prevState,
        workExperiences: prevState.workExperiences.map((w) => ({ ...w }))
      };

      sectionsErrors.workExperiences.push({
        isValid: false,
        id,
        occupationTitle: '',
        employer: '',
        fromDate: '',
        toDate: '',
        responsibilities: '',
        areFieldsCompleted: false
      });

      return sectionsErrors;
    });
  };

  const handleDeleteWorkExperience = (id) => {
    setWorkExperiences((prevState) => prevState.filter((w) => w.id !== id));

    setSectionsErrors((prevState) => ({
      ...prevState,
      workExperiences: prevState.workExperiences.filter((w) => w.id !== id)
    }));
  };

  const handleWorkExperienceChange = (field, value, id) => {
    setWorkExperiences((prevState) => {
      const workExperiences = prevState.map((w) => ({ ...w }));
      const workExperience = workExperiences.find((w) => w.id === id);
      const workExperiencesErrors = sectionsErrors.workExperiences.map((w) => ({
        ...w
      }));
      const errors = workExperiencesErrors.find((w) => w.id === id);

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

      setSectionsErrors((prevState) => {
        return { ...prevState, workExperiences: workExperiencesErrors };
      });

      return workExperiences;
    });
  };

  return (
    <Grid container component='form' spacing={3} onSubmit={handleSubmit}>
      {/* Personal Information */}
      <Grid item xs={12}>
        <PersonalInformationSection
          personalInfo={personalInfo}
          errors={sectionsErrors.personalInfo}
          handleChange={handlePersonalInfoChange}
          isEditableForm={isEditableForm}
        />
      </Grid>
      {/* Education and Training*/}
      <Grid item xs={12}>
        <EducationSection
          educations={educations}
          errorsList={sectionsErrors.educations}
          handleChange={handleEducationChange}
          handleAdd={handleAddEducation}
          handleDelete={handleDeleteEducation}
          isEditableForm={isEditableForm}
        />
      </Grid>
      {/* Work Experience */}
      <Grid item xs={12}>
        <WorkExperienceSection
          workExperiences={workExperiences}
          errorsList={sectionsErrors.workExperiences}
          handleChange={handleWorkExperienceChange}
          handleAdd={handleAddWorkExperience}
          handleDelete={handleDeleteWorkExperience}
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
