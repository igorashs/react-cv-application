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

const hasErrors = (errors) => {
  if (errors.find((e) => e !== '')) {
    return true;
  }

  return false;
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
    isValid: hasErrors(Object.values(errors)),
    ...errors
  };
};

const validateEducations = (educations) => {};

const validateWorkExperiences = (workExperiences) => {};

export default {
  validateName,
  validateEmail,
  validatePhone,
  hasErrors,
  validatePersonalInformation,
  validateEducations,
  validateWorkExperiences
};
