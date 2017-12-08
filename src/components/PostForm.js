import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import classNames from 'classnames';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={classNames('ui field', { error })}>
    <label>{label}</label>
    <input className="ui input" {...input} type={type} />
    {touched && error && (
      <div className="ui red label">{error}</div>
    )}
    {touched && warning && (
      <div className="ui yellow label">{warning}</div>
    )}
  </div>
);

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

const PostForm = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <h1>Edit post</h1>

    <form onSubmit={handleSubmit} className="ui form" >
      <Field component={renderField} label="Text" name="text" type="text" />
      <Field component={renderField} label="Created at" name="createdAt" type="text" />
      <Field component={renderField} label="Author" name="author" type="text" />

      {!(pristine || submitting) && <button className="ui button" onClick={reset}>Clear</button>}
      <input type="submit" className="ui button primary" value="Save" />
    </form>
  </div>
);

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
};

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const submit = (values) => (
  sleep(1000).then(() => {
    if (values.text.length < 5) {
      throw new SubmissionError({ text: 'Длина заголовка должна быть больше 5' });
    } else {
      alert(JSON.stringify(values));
    }
  })
);

export default reduxForm({
  form: 'postForm',
  onSubmit: submit,
})(PostForm);
