import pictureReducer from './pictures';
import {fetchPicturesRequest, fetchPicturesSuccess, fetchSinglePictureSuccess, fetchPicturesError} from '../actions/pictures';

describe('pictureReducer', () => {
  const currentState = {
    pictures: [],
    singlePicture: [],
    loading: false,
    error: null
  }

  it('Should set the initial state when nothing is passed in', () => {
    const newState = pictureReducer(undefined, {type: 'UNKNOWN'});
    expect(newState).toEqual(currentState);
  });

  it('Should return the current state on an unknown action', () => {
    const newState = pictureReducer(currentState, {type: 'UNKNOWN'});
    expect(newState).toBe(currentState);
  });

  describe('fetchPicturesRequest', () => {
    it('Should change loading to true', () => {
      const newState = pictureReducer(currentState, fetchPicturesRequest());
      expect(newState).toEqual({
        pictures: [],
        singlePicture: [],
        loading: true,
        error: null
      });
    });
  });

  describe('fetchPicturesSuccess', () => {
    it('Should fetch pictures', () => {
      const pictures = ['Picture 1', 'Picture 2']
      const newState = pictureReducer(currentState, fetchPicturesSuccess(pictures));
      expect(newState).toEqual({
        pictures,
        singlePicture: [],
        loading: false,
        error: null
      });
    });
  });

  describe('fetchSinglePictureSuccess', () => {
    it('Should fetch single picture', () => {
      const picture = ['Picture 1']
      const newState = pictureReducer(currentState, fetchSinglePictureSuccess(picture));
      expect(newState).toEqual({
        pictures: [],
        singlePicture: picture,
        loading: false,
        error: null
      });
    });
  });

  describe('fetchPicturesError', () => {
    it('Should return an error', () => {
      const error = 'Error'
      const newState = pictureReducer(currentState, fetchPicturesError(error));
      expect(newState).toEqual({
        pictures: [],
        singlePicture: [],
        loading: false,
        error
      });
    });
  });
});