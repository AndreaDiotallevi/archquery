import React from "react";
import { Field, reduxForm, reset } from "redux-form";

class PostForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return error;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <p className="error-message">{this.renderError(meta)}</p>
      </div>
    );
  };

  renderTextArea = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <textarea {...input} autoComplete="off" />
        <p className="error-message">{this.renderError(meta)}</p>
      </div>
    );
  };

  onSubmit = (formValues, dispatch) => {
    this.props.onSubmit(formValues);
    dispatch(reset("postForm"));
  };

  renderForm = () => {
    if (this.props.postTypeId === 1) {
      return (
        <React.Fragment>
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="body"
            component={this.renderTextArea}
            label="Enter Question"
          />
          <button>Post Your Question</button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Field
            name="body"
            component={this.renderTextArea}
            label="Your Answer"
          />
          <button>Post Your Answer</button>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        {this.renderForm()}
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.body) {
    errors.body = "You must enter a body";
  }

  return errors;
};

export default reduxForm({
  form: "postForm",
  destroyOnUnmount: false,
  enableReinitialize: true,
  validate,
})(PostForm);
