import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
function Form() {


    const validationSchema = yup.object({
      name: yup.string().required(" name is required"),
      email: yup.string().email("Invalid email format").required("email is required"),
    });

   

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comments: "",
    },
    onSubmit: (values, actions) => {
  
    },
 
    
    validationSchema,
  });

  return (
    <>
      <section className="form--overlay">
        <form
          action=""
          noValidate
          data-netlify-recaptcha="true"
          data-netlify="true"
          className="grow"
          method='POST'
          onSubmit={formik.handleSubmit}
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
            <input
              type="text"
              name="name"
              id="name"
              {...formik.getFieldProps("name")}
              className={
                formik.touched.name && formik.errors.name ? "error" : ""
              }
            />
            {formik.touched.name && formik.errors.name ? (
              <small>{formik.errors.name}</small>
            ) : null}
          </article>
          <article className="form--control">
            <label htmlFor="email" className="body">
              email <small className="text--small">*</small>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...formik.getFieldProps("email")}
              className={
                formik.touched.email && formik.errors.email ? "error" : ""
              }
            />
            {formik.touched.email && formik.errors.email ? (
              <small>{formik.errors.email}</small>
            ) : null}
          </article>
          <article className="form--control">
            <label htmlFor="comments" className="body">
              Comments
            </label>
            <textarea
              name="comments"
              id="comments"
              value={formik.values.comments}
              onChange={formik.handleChange}
            ></textarea>
          </article>
          <article className="file--upload">
            <input type="file" name="file" id="file" hidden />
            <button id="fileUpload" className="secondary-variant-2" type="file">
              upload files here
            </button>
          </article>

          <article className="submit">
            <button type="submit" className="primary-variant-2" id="submit">
              submit
            </button>
          </article>
        </form>
      </section>
    </>
  );
}

export { Form };
