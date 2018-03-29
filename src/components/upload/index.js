import React from 'react';
import {connect} from 'react-redux';
import {API_BASE_URL} from '../../config'
import {uploadPicture} from '../../actions/pictures';

import requiresLogin from '../requires-login';
import './index.css';

export class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      src: null,
      alt: '',
      likes: 0,
      username: '',
      comments: []
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage() {
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.uploadInput.files[0].name);

    fetch(`${API_BASE_URL}/uploads`, {
      method: 'POST',
      body: data,
    })
      .then((response) => {
        response.json()
      .then((body) => {
        this.setState({ 
          src: `${API_BASE_URL}/uploads/${body.filename}`,
          alt: this.title.value,
        });
      })
    });
  }

  handleStateChange() {
    this.setState({
      title:  this.title.value,   
      likes: 0,
      username: this.props.username,
      alt: this.title.value,
      comments: []
    })
  }
  
  handleUpdateDatabase() {
    this.props.dispatch(uploadPicture(this.state))
    .then(() => {
      window.location.reload();
    })
  }

  render() {
    let imageIsShowing = (
        <p>Your Image Here</p>
    )
    if (this.state.src) {
      imageIsShowing = (
        <img src={`${this.state.src}`} alt={`${this.state.alt}`}/>
      )
    }
    
    return (
      <div className="upload">
        <form onSubmit={event => {
          event.preventDefault();
          this.handleUpdateDatabase();
        }}>
          <label htmlFor="title">Describe Your Post</label>
          <input onChange={event => this.handleStateChange()}
            ref={input => { this.title = input }}
            name="title"
            type="text"
            placeholder="Description"
            required
          />
          <input onChange={this.handleUploadImage}
            ref={(ref) => { this.uploadInput = ref }}
            name="image"
            id="file"
            type="file"
            required
          />
          <div className="upload-image">
            {imageIsShowing}
          </div>
          <button>Upload</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: `${currentUser.username}`,
      name: `${currentUser.fullname}`,
      email: `${currentUser.email}`,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Upload));