import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function FormComp() {
  const validationSchema = yup.object({
    name: yup.string().required(" name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("email is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    comments: "",
  };

  return (
    <>
      <section className="form--overlay">
        <Formik
          onSubmit={({ setSubmitting }) => {
            setSubmitting(false);
          }}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          {({ isSubmitting }) => {
          return (
               <Form
              noValidate
              data-netlify-recaptcha="true"
              data-netlify="true"
              className="grow"
              method="POST"
            >
              <h3 className="sub">Contact us</h3>
              <p>
                <small className="text--small">*</small>
                Required fields
              </p>
              <article className="form--control">
                <label htmlFor="name" className="body">
                  Name <small className="text--small">*</small>
                </label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage name="name" component="small" />
              </article>
              <article className="form--control">
                <label htmlFor="email" className="body">
                  email <small className="text--small">*</small>
                </label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" component="small" />
              </article>
              <article className="form--control">
                <label htmlFor="comments" className="body">
                  Comments
                </label>
                <Field as="textarea" name="comments" id="comments"></Field>
              </article>
              <article className="file--upload">
                <input type="file" name="file" id="file" hidden />
                <button
                  id="fileUpload"
                  className="secondary-variant-2"
                  type="file"
                >
                  upload files here
                </button>
              </article>

              <article className="submit">
                <button
                  type="submit"
                  className="primary-variant-2"
                  id="submit"
                  disabled={isSubmitting}
                >
                  submit
                </button>
              </article>
            </Form>
          )
         
          }}
        </Formik>
      </section>
    </>
  );
}

export { FormComp };
