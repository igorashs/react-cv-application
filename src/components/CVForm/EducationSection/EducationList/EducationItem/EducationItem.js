import React from 'react';

import EducationInput from './EducationInput';

export default class EducationItem extends React.Component {
  render() {
    const { education, handleChange, isEditableForm } = this.props;
    // TODO conditional

    return (
      <React.Fragment>
        <EducationInput education={education} handleChange={handleChange} />
      </React.Fragment>
    );
  }
}
