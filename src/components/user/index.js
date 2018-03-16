import React from 'react';
import {connect} from 'react-redux';

import {upload} from '../../actions/upload';
import requiresLogin from '../requires-login';

class User extends React.Component {
  state = {
    selectedFile: null
  }

  handleChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  handleFileUpload = (file) => {
    const files = file.target.files[0];
    console.log(files);
    this.props.dispatch(upload(files))
  }

  render() {
    console.log(this.state.selectedFile)
    return (
      <form>
        <input type="file" onChange={this.handleFileUpload}/>
      </form>
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

export default requiresLogin()(connect(mapStateToProps)(User));