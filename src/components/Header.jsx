import React from "react";

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "thistle" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Projects
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
