import React from "react";

export const Layout = (props) => {

  const { children } = props;

  return (
    <>
      <header className="position-fixed w-100">
        <div className="d-flex bg-gradient">
          <div className="d-flex flex-grow-1">
            <nav className="courseTitle">
              <button className="navbar-brand border-0">
                <img src={require("../../map logo.png")} alt="logo" />
              </button>
            </nav>
            <div className="flex-grow-1">
              <div className="ReactTitle ps-3  d-flex align-items-center">
                <img src={require("../../react-2@2x.png")} alt="logo" />
                <h3 className="mb-0">Reactjs Apps with APIs</h3>
              </div>
              <div className="d-flex ps-3 align-items-center">
                <div className="flex-grow-1">
                  <h4>Mapbox API</h4>
                  <p className="pb-0 mb-0">
                    Purpose: Mapbox API is a location data platform to add maps to the websites and search for places.
                  </p>
                </div>
                <div className="link me-3">
                  <p className="mb-0 py-0">
                    {" "}
                    <a href="https://www.mapbox.com/">
                    https://www.mapbox.com/
                    </a>
                    <img
                      src={require("../../noun-link.png")}
                      className="ms-2"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main role="main" className="container-fluid pt-5">
        <div className="pt-5 mt-3">
        {children}
        </div>
      </main>

      <footer className="footer footer-dark position-fixed">
        <div className="d-flex justify-content-between px-5">
          <div>
            <p>ALLOW YOU TO PROGRAMMATICALLY ACCESS MAPBOX TOOLS AND SERVICES.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
