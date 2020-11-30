import React from 'react';

import EducationInput from './EducationInput';
import EducationView from './EducationView';

export default class EducationItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditable: true
    };
  }

  handleEdit = () => {
    this.setState((curState) => ({
      isEditable: !curState.isEditable
    }));
  };

  shouldComponentUpdate(nextProp, nextState) {
    if (nextProp.isEditableForm !== this.props.isEditableForm) {
      this.setState((prevState) => {
        if (prevState.isEditable && !nextProp.isEditableForm) {
          return { isEditable: false };
        }
      });
    }

    return (
      nextProp.education !== this.props.education ||
      nextProp.isEditableForm !== this.props.isEditableForm ||
      nextProp.isAlone !== this.props.isAlone ||
      nextState.isEditable !== this.state.isEditable ||
      nextProp.errors !== this.props.errors
    );
  }

  render() {
    const {
      education,
      handleChange,
      isEditableForm,
      handleDelete,
      isAlone,
      errors
    } = this.props;

    return (
      <React.Fragment>
        {this.state.isEditable || !errors.isValid ? (
          <EducationInput
            education={education}
            errors={errors}
            handleChange={handleChange}
            handleClick={this.handleEdit}
            handleDeleteClick={handleDelete}
            isEditableForm={isEditableForm}
            isAlone={isAlone}
          />
        ) : (
          <EducationView
            education={education}
            handleEditClick={this.handleEdit}
            handleDeleteClick={handleDelete}
            isAlone={isAlone}
          />
        )}
      </React.Fragment>
    );
  }
}
