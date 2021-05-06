import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Sidebar({ groupup, groupups }) {
  return (
    <Col className="d-none d-lg-inline">
      {groupup ? <div className="row">description</div> : null}
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
                key={IDBVersionChangeEvent}
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
