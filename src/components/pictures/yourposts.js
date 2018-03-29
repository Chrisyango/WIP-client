import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPictures} from '../../actions/pictures';
import './index.css';

class Pictures extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPictures());
  }

  render() {
    const yourPictures = this.props.pictures.map((picture, index) => {
      if (picture.username === this.props.postsUsername) {
        return (
          <div key={index} className="image">
              <Link to={`/pic/${picture.id}`}>
                {picture.title}
                <img src={picture.src} alt={picture.alt}/>
              </Link>
          </div>
          )
      } return true;
    })

    return (
      <div className="image-list">
        {yourPictures}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.currentUser.username,
  pictures: state.picture.pictures,
  loading: state.picture.loading,
  error: state.picture.error
});

export default connect(mapStateToProps)(Pictures);