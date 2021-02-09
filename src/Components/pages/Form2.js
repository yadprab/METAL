import React from "react";
import * as yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import emailjs from "emailjs-com";
function Form2() {
  const validationSchema = yup.object().shape({
    subject: yup.string().required(" subject is required"),
    bodyText: yup.string().required(" body text is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("email is required"),
  });

  const initialValues = {
    subject: "",
    email: "",
    bodyText: "",
  };


  const onSubmit = (values, { SetSubmitting, resetForm }) => {
    console.log(values);
     
   emailjs
       .sendForm(
         "gmail",
         "service_spjjnnm",
         {
           subject:values.subject,
           eamil:values.email,
           bodyText:values.bodyText,
         },
         "user_VaRpIdfoXBJNPYKpSjX0O"
       )
       .then((result) => {
         console.log(result.text);
         SetSubmitting(false);
         resetForm();
       },(error) => {
          console.log(error.text + 'no funciona');
      })
      
  };

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {(formik) => {
          return (
            <Form
              noValidate
              className="contact--page"
              method="post"
              onSubmit={formik.handleSubmit}
            >
              <h3 className="sub">we're glad this is happening</h3>
              <p>
                <small className="text--small">*Required </small>
              </p>
              <article className="form--control">
                <label htmlFor="email" className="body">
                  From <small className="text--small">*</small>
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={
                    formik.touched.email && formik.errors.email ? "error" : ""
                  }
                />
                <ErrorMessage name="email" component="small" />
              </article>
              <article className="form--control">
                <label htmlFor="email" className="body">
                  subject <small className="text--small">*</small>
                </label>
                <Field
                  type="text"
                  name="subject"
                  id="subject"
                  className={
                    formik.touched.subject && formik.errors.subject
                      ? "error"
                      : ""
                  }
                />
                <ErrorMessage name="subject" component="small" />
              </article>
              <article className="form--control">
                <label htmlFor="bodyText" className="body">
                  BodyText<small className="text--small">*</small>
                </label>
                <Field
                  as="textarea"
                  name="bodyText"
                  id="bodyText"
                  className={
                    formik.touched.bodyText && formik.errors.bodyText
                      ? "error"
                      : ""
                  }
                ></Field>
                <ErrorMessage name="bodyText" component="small" />
              </article>

              <article className="submit">
                <button type="submit" className="primary-variant-2" id="submit">
                  send
                </button>
              </article>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export { Form2 };
