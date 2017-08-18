import React from 'react';
import { Icon } from 'semantic-ui-react';
import '../App.css';

export const required = value => value ? undefined : <p className="error"><Icon name="warning sign" />Required</p>;
export const number = value => value && isNaN(Number(value)) ? <p className="error"><Icon name="warning sign" />Must be a number</p> : undefined;
export const minValue = min => value => value && value.length < min ? <p className="error"><Icon name="warning sign" />{`Must be at least ${min} characters or more`} </p> : undefined;
export const minValue8 = minValue(8);
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    <p className="error"><Icon name="warning sign" />Invalid email address</p> : undefined;
