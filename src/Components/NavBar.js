import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../imges/logo.png";

const NavBar = ({ search }) => {
  function onSearch(word) {
    search(word);
  }
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="LogoPic" />
            </a>
          </Col>

          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search w-100">
              <input
                onChange={(e) => {
                  onSearch(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
