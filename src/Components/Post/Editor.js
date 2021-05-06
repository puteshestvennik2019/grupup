import React, { useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { usePostContext } from "../../context/postContext";

function WysiwygEditor({ initialValue }) {
  const { handleEditorChange } = usePostContext();
  const { REACT_APP_TINY_CLOUD } = process.env;
  return (
    <Editor
      initialValue={initialValue}
      api={REACT_APP_TINY_CLOUD}
      init={{
        placeholder: "Start typing",
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
  );
}

export default WysiwygEditor;
