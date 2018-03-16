import {SubmissionError} from 'redux-form';
import axios from 'axios';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const upload = ({file, name}) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  let data = new FormData();
  data.append('file', document);
  data.append('name', name);
  console.log(data); 
  console.log(file);
  console.log(name);

  axios.post(`${API_BASE_URL}/uploads`, data)
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .catch(err => {
    const {reason, message, location} = err;
    if (reason === 'ValidationError') {
      return Promise.reject(
        new SubmissionError({
          [location]: message
        })
      );
    }
  });
  
  // return (
  //   fetch(`${API_BASE_URL}/uploads`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${authToken}`
  //     },
  //     body: JSON.stringify({
  //       data,
  //       name: 'chris'
  //     })
  // })
  // // Reject any requests which don't return a 200 status, creating
  // // errors which follow a consistent format
    // .then(res => normalizeResponseErrors(res))
    // .then(res => res.json())
    // .catch(err => {
    //   const {reason, message, location} = err;
    //   if (reason === 'ValidationError') {
    //     return Promise.reject(
    //       new SubmissionError({
    //         [location]: message
    //       })
    //     );
    //   }
  //   })
  // );
};