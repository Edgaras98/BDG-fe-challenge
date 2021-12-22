import React, { FC } from 'react';
import { FormInterface } from './Form.interface';
import '../Form/Form.css';

const Form: FC<FormInterface> = (form: FormInterface) => (
  <form className="formWrapper" onSubmit={form.handleSubmit}>
    <input
      type="text"
      placeholder={form.firstPlaceholder}
      onChange={form.firstOnChange}
      required
    />
    <textarea
      placeholder={form.secondPlaceholder}
      onChange={form.secondOnChange}
      required
    />
    <button>{form.btnText}</button>
  </form>
);

export default Form;
