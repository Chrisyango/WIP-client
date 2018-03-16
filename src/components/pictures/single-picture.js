import React from 'react';
import {connect} from 'react-redux';
import {fetchSinglePicture} from '../../actions/pictures';
import requiresLogin from '../requires-login';

class SinglePicture extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchSinglePicture(this.props.match.params.id));
  }

  render() {
    const picture = (
      <li>
        {this.props.singlePicture.title}
        <img src={this.props.singlePicture.src} alt={this.props.singlePicture.alt}/>
      </li>
    )
    return (
      <div>
        {picture}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  singlePicture: state.picture.singlePicture,
  loading: state.picture.loading,
  error: state.picture.error
});

export default requiresLogin()(connect(mapStateToProps)(SinglePicture));