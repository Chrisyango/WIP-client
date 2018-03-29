import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPictures} from '../../actions/pictures';
import './index.css';

export class Pictures extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPictures());
  }

  render() {
    const hot = this.props.pictures.sort((a, b) => {
      return (b.likes - a.likes);
    })

    const hotPictures = hot.map((picture, index) => {
      return (
      <div key={index} className="image">
        <Link to={`/pic/${picture.id}`}>
          <p>{picture.title}</p>
          <img src={picture.src} alt={picture.alt}/>
        </Link>
      </div>
      )
    })

    return (
      <div className="image-list">
        {hotPictures}
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