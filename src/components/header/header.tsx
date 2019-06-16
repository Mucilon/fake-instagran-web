import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';


class Header extends Component {
    componentDidMount() {}

    render() {
        return (
          <header id="main-header">
            <div className="header-content">
              <Link to="/">
                <img src={logo} alt="fakeInsta" />
              </Link>
              <Link to="/new">
                <img src={camera} alt="Enviar" />
              </Link>
            </div>
          </header>
        );
    }
}

export default Header;
