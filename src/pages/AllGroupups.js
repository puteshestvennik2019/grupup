import React, { useEffect, useState } from "react";
import { useGroupupContext } from "../context/groupupContext";
import { IoIosArrowDropdown } from "react-icons/io";

const AllGroupups = () => {
  const {
    createGroupup,
    fetchGroupups,
    groupups,
    setNewGroupup,
  } = useGroupupContext();

  const [showInput, setShowInput] = useState(false);

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
      {showInput && <div className="mx-2 mt-3 p-3 bg-white">test</div>}
      <main className="mt-3 d-flex flex-wrap">
        {groupups.map((grpp) => {
          return (
            <div className="col-xs-12 col-md-6 p-2">
              <div className="d-flex bg-white rounded justify-content-between px-4 py-3">
                <h5>{grpp.name}</h5>
                <h5>
                  <IoIosArrowDropdown />
                </h5>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default AllGroupups;
