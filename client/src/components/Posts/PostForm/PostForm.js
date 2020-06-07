import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MyUploadAdapter from "../../MyUploadAdapter/MyUploadAdapter";

class PostForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return error;
    }
  }

  renderInput = ({ input, label, meta, placeholder }) => {
    const className = `${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div>
        <label id="form-body-label">{label[0]}</label>
        <p>{label[1]}</p>
        <input
          {...input}
          autoComplete="off"
          placeholder={placeholder}
          className={className}
        />
        <p className="error-message">{this.renderError(meta)}</p>
      </div>
    );
  };

  renderEditor = ({ input, label, meta }) => {
    return (
      <React.Fragment>
        <label>{label[0]}</label>
        <p id="editor-description">{label[1]}</p>
        <CKEditor
          id="editor"
          editor={ClassicEditor}
          data={input.value}
          onChange={(event, editor) => {
            return input.onChange(editor.getData());
          }}
          onInit={(editor) => {
            editor.plugins.get(
              "FileRepository"
            ).createUploadAdapter = function (loader) {
              return new MyUploadAdapter(loader);
            };
          }}
        />
        <p className="error-message">{this.renderError(meta)}</p>
      </React.Fragment>
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
            label={[
              "Title",
              "Be specific and imagine you’re asking a question to another person",
            ]}
            placeholder="e.g. How do you build a flemish bond brick wall?"
          />
          <Field
            name="body"
            component={this.renderEditor}
            label={[
              "Body",
              "Include all the information someone would need to answer your question",
            ]}
          />
          <Field
            name="tags"
            component={this.renderInput}
            label={[
              "Tags",
              "Add up to 5 tags to describe what your question is about",
            ]}
            placeholder="e.g. brick-patterns masonry"
          />
          <button>Post Your Question</button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Field
            name="body"
            component={this.renderEditor}
            label={["Your Answer"]}
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

  if (formValues.title && formValues.title.length > 200) {
    errors.title = `The title is too long (${formValues.title.length}/200)`;
  }

  if (!formValues.body) {
    errors.body = "You must enter a body";
  }

  const { tags } = formValues;

  if (tags) {
    const tagList = tags.trim().split(" ");
    if (tagList.length !== [...new Set(tagList)].length) {
      errors.tags = "You cannot enter the same tag more than once";
    }
    if (tagList.length > 5) {
      errors.tags = "You cannot add more than 5 tags";
    }
  }

  return errors;
};

export default reduxForm({
  form: "postForm",
  destroyOnUnmount: false,
  enableReinitialize: true,
  validate,
})(PostForm);
