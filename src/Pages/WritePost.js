import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const MAX_LEN = 100;

function WritePost() {
  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };
  const [title, setTitle] = useState("");

  return (
    <div className="p-3 bg-white container mt-5 col-xs-12 col-md-10 col-lg-8 col-xl-6">
      <h5 className="pl-2 border-bottom border-light my-2 pb-2">
        Write a post
      </h5>
      <div className="position-relative d-flex justify-content-between my-3">
        <input
          type="text"
          className="form-control pr-5"
          placeholder="Title"
          name="title"
          maxLength={MAX_LEN}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span
          className={`input-counter ${
            title.length == MAX_LEN && "text-danger font-weight-bold"
          }`}
        >
          {title ? title.length : 0}/{MAX_LEN}
        </span>
      </div>

      <Editor
        initialValue="<p>Initial content</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help",
        }}
        onChange={handleEditorChange}
      />
      <div className="d-flex justify-content-end my-3">
        <button className="ml-2 btn btn-outline-dark font-weight-bold">
          Preview
        </button>
        <button className="ml-2 btn btn-outline-dark font-weight-bold">
          Submit
        </button>
      </div>
    </div>
  );
}

export default WritePost;
