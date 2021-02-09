import React, { useState } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {CloseButton} from './CloseButton';
import {Success}from './Sucess'
function FormComp({ state }) {
  const validationSchema = yup.object().shape({
    name: yup.string().required(" name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("email is required"),
  });

  const [formState, setFormState] = useState({
    success:false,
    error:false,
    buttonVal:'submit',
  })


  const initialValues = {
    name: "",
    email: "",
    comments: "",
    "bot-field": "",
    "form-name": "contact",
  };

  const encode = (data) => {
   
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (values, { setSubmitting }) => {

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
   
        ...values,
        
      }),
    };
    fetch("/", options)
      .then(() => {
        
        
        setSubmitting(false);
          setFormState({ buttonVal: 'submitting...' });
       setTimeout(() => {
         setFormState({ success: true });
       }, 1500);
      })
      .catch(() => {
     
        setSubmitting(false);
      });
  };

  return (
    <>
      <section className="form--overlay">
        {!formState.success && (
          <Formik
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            initialValues={initialValues}
          >
            {(formik) => {
              return (
                <Form
                  noValidate
                  name="contact"
                  className="grow"
                  method="post"
                  action="/contact"
                  onSubmit={formik.handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <Field type="hidden" name="bot-field" />
                  <Field type="hidden" name="form-name" />
                  <h3 className="sub">Contact us</h3>
                  <p>
                    <small className="text--small">*</small>
                    Required fields
                  </p>
                  <article className="form--control">
                    <label htmlFor="name" className="body">
                      Name <small className="text--small">*</small>
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className={
                        formik.touched.name && formik.errors.name ? "error" : ""
                      }
                    />
                    <ErrorMessage name="name" component="small" />
                  </article>
                  <article className="form--control">
                    <label htmlFor="email" className="body">
                      email <small className="text--small">*</small>
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={
                        formik.touched.email && formik.errors.email
                          ? "error"
                          : ""
                      }
                    />
                    <ErrorMessage name="email" component="small" />
                  </article>
                  <article className="form--control">
                    <label htmlFor="comments" className="body">
                      Comments
                    </label>
                    <Field as="textarea" name="comments" id="comments"></Field>
                  </article>

                  <article className="submit">
                    <button
                      type="submit"
                      disabled={ formState.buttonVal !== 'submit'?true:''}
                      className={`primary-variant-2 ${
                        formState.buttonVal !== 'submit'? "submitting" : ""
                      }`}
                      id="submit"
                    >
                      {formState.buttonVal}
                    </button>
                  </article>
                  <CloseButton state={state} />
                </Form>
              );
            }}
          </Formik>
        )}
        {formState.success&&<Success state={state}/>}
      </section>
    </>
  );
}

export { FormComp };
