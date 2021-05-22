import React, { useEffect, useState } from "react";
import { useGroupupContext } from "../context/groupupContext";
import { IoIosArrowDropdown } from "react-icons/io";
import NewCommunityForm from "../Components/Main/NewCommunityForm";
import { Link } from "react-router-dom";

const AllGroupups = () => {
  const {
    createGroupup,
    fetchGroupups,
    groupups,
    newGroupup,
    setNewGroupup,
  } = useGroupupContext();

  const [showInput, setShowInput] = useState(false);

  const handleSubmit = (e) => {
    createGroupup(e);
    setTimeout(() => setShowInput(false), 1000);
  };

  useEffect(() => {
    fetchGroupups("/g");
  }, []);

  return (
    <div className="mt-5 container">
      <div className="row justify-content-end pr-4">
        <button
          className="btn btn-outline-dark font-weight-bold"
          onClick={() => setShowInput(!showInput)}
        >
          Create new community
        </button>
      </div>
      {showInput && (
        <NewCommunityForm
          createComunity={handleSubmit}
          setNewGroupup={setNewGroupup}
          newGroupup={newGroupup}
        />
      )}
      <main className="mt-3 d-flex flex-wrap">
        {groupups.map((grpp) => {
          return (
            <div className="col-xs-12 col-md-6 p-2" key={grpp.id}>
              <a href={`/g/${grpp.id}`}>
                <div className="d-flex bg-white rounded justify-content-between px-4 py-3">
                  <h5>{grpp.name}</h5>
                  <h5>
                    <IoIosArrowDropdown />
                  </h5>
                </div>
              </a>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default AllGroupups;
