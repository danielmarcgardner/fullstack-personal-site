import React from 'react';

export const renderField = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

export const renderTextAreaField = ({ input, placeholder, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={placeholder} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

export const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        {children}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export const renderMultiSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input} multiple>
        {children}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
