import React from "react";
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="#">{props.title}</Link> */}
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" to="/">Home</Link> */}
              <a className="nav-link active" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="d-flex">
        {/* <div className="bg-primary rounded mx-2" onClick={() => props.toggleMode('primary')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
        <div className="bg-secondary rounded mx-2" onClick={() => props.toggleMode('secondary')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
        <div className="bg-danger rounded mx-2" onClick={() => props.toggleMode('danger')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
        <div className="bg-warning rounded mx-2" onClick={() => props.toggleMode('warning')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
        <div className="bg-info rounded mx-2" onClick={() => props.toggleMode('info')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
        <div className="bg-success rounded mx-2" onClick={() => props.toggleMode('success')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div> */}
        {/* <div className="bg-light rounded mx-2 border border-2 border-dark" onClick={() => props.toggleMode('light')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
        <div className="bg-dark rounded mx-2 border border-2 border-light" onClick={() => props.toggleMode('dark')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div> */}
        <div className="form-check form-switch" style={{ width: '12rem' }} onClick={() => props.toggleMode()} >
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </nav >
  )
}



Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "Set title here",
  about: "Set about text here",
};

