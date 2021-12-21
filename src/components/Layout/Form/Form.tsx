import React, { FC } from 'react';
import { FormInterface } from './Form.interface';
import { FormWrapper } from './Form.styles';

const Form: FC<FormInterface> = (props: FormInterface) => (
  <FormWrapper onSubmit={props.handleSubmit}>
    <input
      type="text"
      placeholder={props.firstPlaceholder}
      onChange={props.firstOnChange}
      required
    />
    <textarea
      placeholder={props.secondPlaceholder}
      onChange={props.secondOnChange}
      required
    />
    <button>{props.btnText}</button>
  </FormWrapper>
);

export default Form;
