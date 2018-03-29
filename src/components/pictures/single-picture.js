import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {fetchSinglePicture, updateItem, deleteItem} from '../../actions/pictures';
import requiresLogin from '../requires-login';
import './index.css';

let newItem = {
  likes: 0,
  comments: []
}

class SinglePicture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comments: [{}],
      likes: 0,
      deleted: false
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchSinglePicture(this.props.match.params.id))
    .then(() => {
      this.setState({
        comments: this.props.singlePicture.comments,
        likes: this.props.singlePicture.likes,
        loading: false
      });
    });
  }

  increaseLikes() {
    newItem = {
      likes: this.state.likes + 1,
      comments: this.state.comments
    }
    this.props.dispatch(updateItem(newItem, this.props.match.params.id))
    .then(() => {
      this.setState({
        likes: this.props.singlePicture.likes
      });
    })
  }

  decreaseLikes() {
    newItem = {
      likes: this.state.likes - 1,
      comments: this.state.comments
    }
    this.props.dispatch(updateItem(newItem, this.props.match.params.id))
    .then(() => {
      this.setState({
        likes: this.props.singlePicture.likes
      });
    })
  }

  handleCommentSubmit() {
    newItem = {
      likes: this.state.likes,
      comments: this.state.comments.concat({
        username: this.props.currentUser,
        comment: this.comment.value
      }),
    }
    this.props.dispatch(updateItem(newItem, this.props.match.params.id))
    .then(() => {
      this.setState({
        comments: this.props.singlePicture.comments
      });
    })
  }

  handleDelete() {
    this.props.dispatch(deleteItem(this.props.match.params.id))
    .then(() => {
      this.setState({
        deleted: true
      })
    })
  }

  render() {
    if (this.state.deleted) {
      return <Redirect to="/dashboard" />;
    }

    let deleteButton;
    if (this.props.currentUser === this.props.singlePicture.username) {
      deleteButton = <button onClick={event => this.handleDelete()}>Delete</button>;
    }
    const picture = (
      <span className="picture">
        <div className="image-container">
          <a href={`${this.props.singlePicture.src}`}>
            <img src={this.props.singlePicture.src} alt={this.props.singlePicture.alt}/>
          </a>
        </div>
        <div>
          <p>
            {this.props.singlePicture.title} by: <Link to={`/users/${this.props.singlePicture.username}`}> {this.props.singlePicture.username}</Link>
          </p>
          {this.props.singlePicture.likes} likes
          <button onClick={event => this.decreaseLikes()}>
            <i className="fas fa-thumbs-down"></i>
          </button>
          <button onClick={event => this.increaseLikes()}>
            <i className="fas fa-thumbs-up"></i>
          </button>
          {deleteButton}
        </div>
      </span>
    );

    let comments;
    if (!this.state.loading) {
      comments = this.props.singlePicture.comments.map((comment, index) => {
        return (
          <p key={index}>
            <Link to={`/users/${comment.username}`}><b>{comment.username}</b></Link>: {comment.comment}
          </p>
        );
      });
    } else {
      return <div>Loading...</div>
    }

    return (
      <div className="single-picture-container">
        {picture}
        <div className="comment-section">
          <div>
            {comments}
          </div>
          <form onSubmit={event => {
            event.preventDefault();
            this.handleCommentSubmit();
            this.comment.value = '';
          }}>
          <input 
            type="text"
            placeholder="comment here"
            required
            ref={input => {
              this.comment = input
            }}
          />
          <button type="submit">Comment</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser.username,
  singlePicture: state.picture.singlePicture,
  loading: state.picture.loading,
  error: state.picture.error
});

export default requiresLogin()(connect(mapStateToProps)(SinglePicture));