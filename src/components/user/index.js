import React from 'react';
import {connect} from 'react-redux';

import {uploadPicture} from '../../actions/pictures';
import requiresLogin from '../requires-login';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      title: null,
    }
  }

  setTitle(value) {
    this.setState({
      title: value
    })
  }

  fileSelectedHandler(event) {
    this.setState({
      selectedFile: event.target.files[0]
    })
  };

  fileUploadHandler() {
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    data.append('filename', this.state.title);
    console.log(data);
    this.props.dispatch(uploadPicture(data));
  }

  render() {
    let pictureValues = {
      src: 'image',
      title: this.state.title,
      alt: this.state.title,
      username: this.props.username,
      likes: 0
    }
    console.log(pictureValues);
    return (
      <form
      onSubmit={event => {
        event.preventDefault();
        this.fileUploadHandler(pictureValues);
      }}>
        <input type="text" name="title" onChange={event => this.setTitle(event.target.value)} />
        <input type="file" name="image" onChange={event => this.fileSelectedHandler(event)}/>
        <button type="submit">Upload</button>
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