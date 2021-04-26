import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import groupups from "../../data/groupups";

function Sidebar() {
  return (
    <Col className="d-none d-lg-inline">
      <Row className="mr-0 d-flex justify-content-end">
        <button className="btn btn-outline-dark font-weight-bold">
          See all communities
        </button>
      </Row>
      <aside className="mt-3">
        <ol className="list-group">
          {groupups.map((grpp) => {
            const { groupup, num_members } = grpp;
            return (
              <a
                href={`/g/${groupup}`}
                key={groupup}
                className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
              >
                {groupup}
                <h6>
                  <span className="badge badge-light badge-pill">
                    {num_members}
                  </span>
                </h6>
              </a>
            );
          })}
        </ol>
      </aside>
    </Col>
  );
}

export default Sidebar;
