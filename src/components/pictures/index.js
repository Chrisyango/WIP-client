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
    const pictures = this.props.pictures.map((picture, index) => {
      return (
      <div key={index} className="image">
          <Link to={`/pic/${picture.id}`}>
            <img src={picture.src} alt={picture.alt}/>
          </Link>
      </div>
      )
    })

    return (
      <div className="image-list">
        {pictures}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pictures: state.picture.pictures,
  loading: state.picture.loading,
  error: state.picture.error
});

export default connect(mapStateToProps)(Pictures);