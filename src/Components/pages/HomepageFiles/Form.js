import React from 'react'

function Form() {
    return (
      <>
        <section className="form--overlay">
          <form
            action=""
            noValidate
            data-netlify-recaptcha="true"
            data-netlify="true"
            className='grow'
          >
            <article className="form--control">
              <label htmlFor="name" className="body">
                Name
              </label>
              <input type="text" name="name" id="name" />
              <small className="error"></small>
            </article>
            <article className="form--control">
              <label htmlFor="email" className="body">
                email
              </label>
              <input type="email" name="email" id="email" />
              <small className="error"></small>
            </article>
            <article className="form--control">
              <label htmlFor="comments" className="body">
                Comments
              </label>
              <textarea name="comments" id="comments"></textarea>
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
              <button type="submit" className="primary-variant-2" id="submit">
                submit
              </button>
            </article>
          </form>
        </section>
      </>
    );
}

export  {Form}
