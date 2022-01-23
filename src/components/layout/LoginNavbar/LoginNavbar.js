import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Dropdown, Navbar, NavItem } from "shards-react";



const LoginNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          <NavItem tag={Dropdown} caret>
              <img
                className="mt-2 mb-2"
                src={require("./../../../images/logo.png")}
                alt="User Avatar"
              />{" "}
          </NavItem>
        </Navbar>
      </Container>
    </div>
  );
};

LoginNavbar.propTypes = {
  /**
   * The layout type where the LoginNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

LoginNavbar.defaultProps = {
  stickyTop: true
};

export default LoginNavbar;
