import React from 'react';
import { Link } from 'react-router-dom'

import SearchContainer from './search_container'
import logo from '../nav/assets/logo.png'
import Modal from '../modal/modal';

import './assets/navbar.css';
// import SearchContainer from './search_container'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-bar-logged-in">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <SearchContainer />
          </div>
          <Link to={"/posts"}>All Posts</Link>&nbsp;&nbsp;
          <Link to={"/profile"}>Profile</Link>&nbsp;&nbsp;
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Modal />
          <button className="navbutton" onClick={() => this.props.openModal('signup')}>Sign up</button>
          <button className="navbutton" onClick={() => this.props.openModal('login')}>Login</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar-container">
        <div className="nav-bar-items">
          {this.getLinks()}
        </div>
      </div>
    );
  }

}

export default NavBar;