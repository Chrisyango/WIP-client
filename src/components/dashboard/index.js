import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import NewPictures from '../pictures/new';
import HotPictures from '../pictures/hot';
import Upload from '../upload/index';
import './index.css';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'hot'
    }
  }

  currentPage(name) {
    this.setState({
      currentPage: name
    })
  }

  render () {
    let currentPage = this.state.currentPage;
    let currentPageDisplay;

    if (currentPage === 'upload') {
      currentPageDisplay = <Upload />;
    } else if (currentPage === 'hot') {
      currentPageDisplay = <HotPictures />;
    } else if (currentPage === 'new') {
      currentPageDisplay = <NewPictures />;
    }

    return (
      <div>
        <div className="navigationButtons">
          <button className={currentPage === 'hot' ? 'currentButton' : ''}
            onClick={event => {
            this.currentPage('hot');
          }}>Hot</button>
          <button className={currentPage === 'new' ? 'currentButton' : ''}
            onClick={event => {
            this.currentPage('new');
          }}>New</button>
          <button className={currentPage === 'upload' ? 'currentButton' : ''}
            onClick={event => {
            this.currentPage('upload');
          }}>Upload</button>
        </div>
        {currentPageDisplay}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      name: `${currentUser.fullname}`,
      email: `${currentUser.email}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));