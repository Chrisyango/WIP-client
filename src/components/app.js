import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/user';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    console.log(this.props)
    const users = this.props.users.map((user, index) => {
      return (
        <li key={index}>
          {user}
        </li>
      )
    })

    return(
      <ul>
        {users}
      </ul>
    ) 
  }
}

const mapStateToProps = state => ({
  users: state.users,
  loading: state.loading,
  error: this.error
});

export default connect(mapStateToProps)(App);