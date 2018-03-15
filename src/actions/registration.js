import {SubmissionError} from 'redux-form';

import { API_BASE_URL } from '../config';

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    body:JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
      if (
        res.headers.has('content-type') && 
        res.headers
          .get('content.type')
          .startsWith('application/json')
      ) {
        return res.json().then(err => Promise.reject(err))
      }
      return Promise.reject({
        code: res.status,
        message: res.statusText
      });
    }
    return;
  })
  .then(res => {
    res.json();
  })
  .catch(err => {
    const {reason, message, location} = err;
    if (reason === 'ValidationError') {
      return Promise.reject(
        new SubmissionError({
          [location]: message
        })
      );
    }
  })
}