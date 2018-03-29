import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';

export const FETCH_PICTURES_REQUEST = 'FETCH_PICTURES_REQUEST'; 
export const fetchPicturesRequest = () => ({
  type: FETCH_PICTURES_REQUEST,
});

export const FETCH_PICTURES_SUCCESS = 'FETCH_PICTURES_SUCCESS'; 
export const fetchPicturesSuccess = pictures => ({
  type: FETCH_PICTURES_SUCCESS,
  pictures
});

export const FETCH_SINGLE_PICTURE_SUCCESS = 'FETCH_SINGLE_PICTURE_SUCCESS';
export const fetchSinglePictureSuccess = singlePicture => ({
  type: FETCH_SINGLE_PICTURE_SUCCESS,
  singlePicture
})

export const FETCH_PICTURES_ERROR = 'FETCH_PICTURES_ERROR'; 
export const fetchPicturesError = error => ({
  type: FETCH_PICTURES_ERROR,
  error
});

export const fetchPictures = pictures => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchPicturesRequest());
  return fetch(`${API_BASE_URL}/pic`, {
    method: 'GET',
    headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      return res.json();
    })
    .then(pictures => {
      dispatch(fetchPicturesSuccess(pictures));
    })
    .catch(err => {dispatch(fetchPicturesError(err))});
}

export const fetchSinglePicture = pictureID => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchPicturesRequest());
  return fetch(`${API_BASE_URL}/pic/${pictureID}`, {
    method: 'GET',
    headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      return res.json();
    })
    .then(picture => {
      dispatch(fetchSinglePictureSuccess(picture));
    })
    .catch(err => {dispatch(fetchPicturesError(err))});
}

export const uploadPicture = picture => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/pic`, {
    method: 'POST',
    body:JSON.stringify(picture),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
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

export const updateItem = (newItem, pictureID) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchPicturesRequest());
  return fetch(`${API_BASE_URL}/pic/${pictureID}`, {
    method: 'PUT',
    body: JSON.stringify(newItem),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      return res.json();
    })
    .then(picture => {
      dispatch(fetchSinglePictureSuccess(picture));
    })
    .catch(err => {dispatch(fetchPicturesError(err))});
}

export const deleteItem = (pictureID) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchPicturesRequest());
  return fetch(`${API_BASE_URL}/pic/${pictureID}`, {
    method: 'DELETE',
    headers: {
        Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {dispatch(fetchPicturesError(err))});
}