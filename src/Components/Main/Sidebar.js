import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Sidebar({ groupup, groupups, thumbnail }) {
  return (
    <Col className="d-none d-lg-inline">
      {groupup ? (
        <div className="rounded mb-3 pb-4 px-2 d-flex-column justify-content-between align-items-center bg-image position-relative">
          <img
            src={thumbnail}
            alt=""
            style={{
              height: "250px",
              opacity: "0.07",
              backgroundImage: `url(${thumbnail}`,
              backgroundSize: "cover",
            }}
            className="w-100"
          />
          <div
            style={{
              left: "0px",
              top: "40%",
              position: "absolute",
            }}
          >
            <h3 className="text-center">{groupup.name}</h3>
            <h6 className="text-center">{groupup.description}</h6>
          </div>
        </div>
      ) : null}
      <Row className="mr-0 d-flex justify-content-end">
        <a href="/g">
          <button className="btn btn-outline-dark font-weight-bold">
            See all communities
          </button>
        </a>
      </Row>
      <aside className="mt-3">
        <ol className="list-group">
          {groupups.map((grpp) => {
            const { name, id, num_members } = grpp;
            return !groupup || groupup.id !== id ? (
              <a
                href={`/g/${id}`}
                key={grpp.id}
                className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
              >
                {name}
                <h6>
                  <span className="badge badge-light badge-pill">
                    {num_members}
                  </span>
                </h6>
              </a>
            ) : null;
          })}
        </ol>
      </aside>
    </Col>
  );
}

export default Sidebar;
