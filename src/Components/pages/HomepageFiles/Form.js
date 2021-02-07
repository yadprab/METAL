import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function FormComp({state}) {
  const validationSchema = yup.object().shape({
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
    files:'',
  };

  return (
    <>
      <section className="form--overlay">
        <Formik
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            actions.resetForm();
            setTimeout(()=>{  state(false)},1000)
          }}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          {(formik) => {
          return (
            <Form
              noValidate
              data-netlify-recaptcha="true"
              name="contact"
              className="grow"
              method="POST"
              data-netlify='true'
              action="/contact"
              onSubmit={formik.handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
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
                    formik.touched.email && formik.errors.email ? "error" : ""
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
              <article className="file--upload">
                <Field type="file" name="file" id="file" hidden />
                <button
                  id="fileUpload"
                  className="secondary-variant-2"
                  type="file"
                >
                  upload files here
                </button>
              </article>

              <article className="submit">
                <button type="submit" className="primary-variant-2" id="submit">
                  submit
                </button>
              </article>
            </Form>
          );
         
          }}
        </Formik>
      </section>
    </>
  );
}

export { FormComp };
