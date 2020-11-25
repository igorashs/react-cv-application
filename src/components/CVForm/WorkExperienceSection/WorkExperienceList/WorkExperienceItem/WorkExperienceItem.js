import React from 'react';

import WorkExperienceInput from './WorkExperienceInput';
import WorkExperienceView from './WorkExperienceView';

export default class WorkExperienceItem extends React.Component {
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
      nextProp.workExperience !== this.props.workExperience ||
      nextProp.isEditableForm !== this.props.isEditableForm ||
      nextProp.isAlone !== this.props.isAlone ||
      nextState.isEditable !== this.state.isEditable
    );
  }

  render() {
    const {
      workExperience,
      handleChange,
      isEditableForm,
      handleDelete,
      isAlone
    } = this.props;

    return (
      <React.Fragment>
        {this.state.isEditable ? (
          <WorkExperienceInput
            workExperience={workExperience}
            handleChange={handleChange}
            handleClick={this.handleEdit}
            handleDeleteClick={handleDelete}
            isEditableForm={isEditableForm}
            isAlone={isAlone}
          />
        ) : (
          <WorkExperienceView
            workExperience={workExperience}
            handleEditClick={this.handleEdit}
            handleDeleteClick={handleDelete}
            isAlone={isAlone}
          />
        )}
      </React.Fragment>
    );
  }
}
