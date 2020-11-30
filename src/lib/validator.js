const validateName = (value) => {
  if (!value) return 'This field is required';

  return '';
};

const validateEmail = (value) => {
  if (!value) return 'This field is required';
  if (!value.match(/\S+@\S+\.\S+/)) return 'Wrong email format';

  return '';
};

const validatePhone = (value) => {
  if (value.match(/^\+?$/)) return 'This field is required';

  return '';
};

const validateStartDate = (start, end) => {
  if (!start) return 'This field is required';
  if (isNaN(start)) return 'Fill the correct date';
  if (start > new Date()) return 'Is a future date';
  if (!end || isNaN(end)) return '';
  if (start.getTime() > end.getTime())
    return 'Start date cannot be smaller than end date';

  return '';
};

const validateEndDate = (end, start) => {
  if (!end) return 'This field is required';
  if (isNaN(end)) return 'Fill the correct date';
  if (end > new Date()) return 'Is a future date';
  if (!start || isNaN(start)) return '';
  if (start.getTime() > end.getTime())
    return 'Start date cannot be smaller than end date';

  return '';
};

const hasErrors = (errors) => {
  if (errors.find((e) => e !== '')) {
    return true;
  }

  return false;
};

const isPersonalInformationValid = (errors) => {
  const { firstName, lastName, email, phoneNumber } = errors;

  return !hasErrors(Object.values({ firstName, lastName, email, phoneNumber }));
};

const isEducationValid = (errors) => {
  const { qualificationTitle, organization, fromDate, toDate } = errors;

  return !hasErrors(
    Object.values({ qualificationTitle, organization, fromDate, toDate })
  );
};

const isWorkExperienceValid = (errors) => {
  const { occupationTitle, employer, fromDate, toDate } = errors;

  return !hasErrors(
    Object.values({ occupationTitle, employer, fromDate, toDate })
  );
};

const validatePersonalInformation = (personalInformation) => {
  const { firstName, lastName, email, phoneNumber } = personalInformation;

  const errors = {
    firstName: validateName(firstName),
    lastName: validateName(lastName),
    email: validateEmail(email),
    phoneNumber: validatePhone(phoneNumber)
  };

  return {
    isValid: !hasErrors(Object.values(errors)),
    ...errors
  };
};

const validateEducations = (educations) => {
  const errorsList = educations.map((education) => {
    const {
      qualificationTitle,
      organization,
      fromDate,
      toDate,
      isOngoing,
      id
    } = education;
    const errors = {
      qualificationTitle: validateName(qualificationTitle),
      organization: validateName(organization),
      fromDate: validateStartDate(fromDate, !isOngoing && toDate),
      toDate: isOngoing ? '' : validateEndDate(toDate, fromDate)
    };

    return {
      id,
      isValid: !hasErrors(Object.values(errors)),
      ...errors
    };
  });

  return errorsList;
};

const validateWorkExperiences = (workExperiences) => {
  const errorsList = workExperiences.map((workExperience) => {
    const {
      occupationTitle,
      employer,
      fromDate,
      toDate,
      isOngoing,
      id
    } = workExperience;

    const errors = {
      occupationTitle: validateName(occupationTitle),
      employer: validateName(employer),
      fromDate: validateStartDate(fromDate, !isOngoing && toDate),
      toDate: isOngoing ? '' : validateEndDate(toDate, fromDate)
    };

    return {
      id,
      isValid: !hasErrors(Object.values(errors)),
      ...errors
    };
  });

  return errorsList;
};

const areEducationCompleted = (education) => {
  const {
    qualificationTitle,
    organization,
    fromDate,
    toDate,
    isOngoing
  } = education;

  return (
    !!qualificationTitle &&
    !!organization &&
    !!fromDate &&
    (isOngoing || !!toDate)
  );
};

const areWorkExperienceCompleted = (workExperience) => {
  const {
    occupationTitle,
    employer,
    fromDate,
    toDate,
    isOngoing
  } = workExperience;

  return (
    !!occupationTitle && !!employer && !!fromDate && (isOngoing || !!toDate)
  );
};

const validateForm = (personalInfo, educations, workExperiences) => {
  const sectionsErrors = {
    personalInfo: validatePersonalInformation(personalInfo),
    educations: validateEducations(educations),
    workExperiences: validateWorkExperiences(workExperiences)
  };

  const foundInvalidEducation = sectionsErrors.educations.find(
    (ed) => !ed.isValid
  );
  const areEducationsValid = foundInvalidEducation ? false : true;

  const foundInvalidWorkExperience = sectionsErrors.workExperiences.find(
    (w) => !w.isValid
  );

  const areWorkExperiencesValid = foundInvalidWorkExperience ? false : true;

  return [
    sectionsErrors.personalInfo.isValid &&
      areEducationsValid &&
      areWorkExperiencesValid,
    sectionsErrors
  ];
};

export default {
  validateName,
  validateEmail,
  validatePhone,
  validateStartDate,
  validateEndDate,
  hasErrors,
  validatePersonalInformation,
  validateEducations,
  validateWorkExperiences,
  isPersonalInformationValid,
  isEducationValid,
  isWorkExperienceValid,
  areEducationCompleted,
  areWorkExperienceCompleted,
  validateForm
};
