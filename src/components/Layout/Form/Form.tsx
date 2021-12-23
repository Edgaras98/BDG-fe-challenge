import { form } from './Form.interface';
import '../Form/Form.css';

function Form(form: form) {
  return (
    <form className="formWrapper">
      <input
        type="text"
        placeholder={form.titlePlaceholder}
        onChange={form.titleOnChange}
        required
      />
      <textarea
        placeholder={form.bodyPlaceholder}
        onChange={form.bodyOnChange}
        required
      />
      <button type="button" onClick={form.handleClick}>
        {form.text}
      </button>
    </form>
  );
}

export default Form;
