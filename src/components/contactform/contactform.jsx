import { Formik, Form, Field } from 'formik';
import css from './contactform.module.css';
import { useId } from 'react';

export const ContactForm = ({ onAdd }) => {
  const nameFiealdId = useId();
  const phoneFiealdId = useId();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          onAdd({ id: Date.now(), ...values });
          actions.resetForm();
        }}
      >
        <Form className={css.contactForm}>
          <div className={css.formBox}>
            <label htmlFor={nameFiealdId}>Name</label>
            <Field
              className={css.fieldBox}
              type="text"
              name="name"
              id={nameFiealdId}
            ></Field>
          </div>
          <div className={css.formBox}>
            <label htmlFor={phoneFiealdId}>Phone</label>
            <Field
              className={css.fieldBox}
              type="text"
              name="number"
              id={phoneFiealdId}
            ></Field>
          </div>
          <button className={css.submitBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
