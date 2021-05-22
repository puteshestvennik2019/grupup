import React from "react";

const MAX_LEN = 50;

const NewCommunityForm = ({ createComunity, setNewGroupup, newGroupup }) => {
  const handleChange = (target) => {
    if (target.id === "thumbnail") {
      setNewGroupup({ ...newGroupup, [target.id]: target.files[0] });
    } else {
      setNewGroupup({ ...newGroupup, [target.id]: target.value });
    }
  };

  return (
    <div className="mx-2 mt-3 p-3 bg-white rounded">
      <h5 className="text-center">Create a new community:</h5>
      <form onSubmit={createComunity} className="pr-3">
        <div className="form-group row position-relative d-flex justify-content-between my-3">
          <label htmlFor="name" className="ml-3 col-form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control pr-5 col-sm-10"
            placeholder="What would you call the community?"
            id="name"
            maxLength={MAX_LEN}
            value={newGroupup.name}
            onChange={(e) => handleChange(e.target)}
          />
          <span
            className={`input-counter ${
              newGroupup.name.length === MAX_LEN &&
              "text-danger font-weight-bold"
            }`}
          >
            {newGroupup.name.length}/{MAX_LEN}
          </span>
        </div>
        <div className="form-group row d-flex justify-content-between my-3">
          <label htmlFor="description" className="ml-3 col-form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control pr-5 col-sm-10"
            placeholder="How would you describe the new community?"
            id="description"
            value={newGroupup.description}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className="form-group row d-flex justify-content-between my-3">
          <label htmlFor="thumbnail" className="ml-3 col-form-label">
            Thumbnail
          </label>
          <input
            type="file"
            className="col-sm-10 pr-5 pl-0"
            id="thumbnail"
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className="form-group row my-3 d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-outline-dark font-weight-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCommunityForm;
