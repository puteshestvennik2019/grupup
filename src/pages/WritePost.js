import React, { useState, useEffect } from "react";
import Editor from "../Components/Post/Editor";
import { usePostContext } from "../context/postContext";
import { useUserContext } from "../context/userContext";
import { useGroupupContext } from "../context/groupupContext";

const MAX_LEN = 100;

function WritePost() {
  const { handleSubmit } = usePostContext();
  const { token } = useUserContext();
  const { groupups, fetchGroupups } = useGroupupContext();

  const [title, setTitle] = useState("");
  const [groupup, setGroupup] = useState("");

  useEffect(() => {
    if (token) fetchGroupups("/g/user");
  }, [token]);

  return (
    <div className="p-3 bg-white container mt-5 col-xs-12 col-md-10 col-lg-8 col-xl-6">
      <div className="d-flex justify-content-start align-items-center">
        <h6 className="border-bottom d-inline pt-2 h-100">Write a post to: </h6>
        <select
          className="ml-1 custom-select custom-select-sm col-md-6 col-lg-5"
          onChange={(e) => setGroupup(e.target.value)}
        >
          <option value="" disabled selected>
            Select a community...
          </option>
          {groupups.map((grpp) => {
            const { id, name } = grpp;
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
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
            title.length === MAX_LEN && "text-danger font-weight-bold"
          }`}
        >
          {title ? title.length : 0}/{MAX_LEN}
        </span>
      </div>

      <Editor />
      <div className="d-flex justify-content-end my-3">
        <button className="ml-2 btn btn-outline-dark font-weight-bold">
          Preview
        </button>
        <button
          className="ml-2 btn btn-outline-dark font-weight-bold"
          disabled={!title || !groupup}
          onClick={(e) => handleSubmit(e, { title: title, groupup: groupup })}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default WritePost;
