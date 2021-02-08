import React, { useRef } from 'react'


function FileUpload({value, file, setFile}) {

   
    const hiddenFileInput = useRef(null);
    const handleClick = (e) => {
        e.preventDefault();

        hiddenFileInput.current.click();
        
    }
     const handleChange = (event) => {
       const fileUploaded = event.target.files[0];
       setFile(fileUploaded)
     
   
     
     
     };
    
    

    return (
      <>
        <article className="file--upload">
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleChange}
            ref={hiddenFileInput}
           
          />
          <button
            id="fileUpload"
            className="secondary-variant-2"
            type="file"
            onClick={handleClick}
          >
            upload files here
          </button>
          {file && <small>{file.name}</small>}
        
        </article>
      </>
    );
}

export {FileUpload}
