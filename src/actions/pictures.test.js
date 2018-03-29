import {
  FETCH_PICTURES_REQUEST, fetchPicturesRequest,
  FETCH_PICTURES_SUCCESS, fetchPicturesSuccess,
  FETCH_SINGLE_PICTURE_SUCCESS, fetchSinglePictureSuccess,
  FETCH_PICTURES_ERROR, fetchPicturesError,
  fetchPictures
} from './pictures';

describe('Pictures', () => {
  it('Should return the action', () => {
    const action = fetchPicturesRequest();
    expect(action.type).toEqual(FETCH_PICTURES_REQUEST);
  });

  it('Should return the action', () => {
    const pictures = 'pictures';
    const action = fetchPicturesSuccess(pictures);
    expect(action.type).toEqual(FETCH_PICTURES_SUCCESS);
    expect(action.pictures).toEqual(pictures);
  });

  it('Should return the action', () => {
    const singlePicture = 'Single Picture';
    const action = fetchSinglePictureSuccess(singlePicture);
    expect(action.type).toEqual(FETCH_SINGLE_PICTURE_SUCCESS);
    expect(action.singlePicture).toEqual(singlePicture);
  });

  it('Should return the action', () => {
    const error = 'Error';
    const action = fetchPicturesError(error);
    expect(action.type).toEqual(FETCH_PICTURES_ERROR);
    expect(action.error).toEqual(error);
  });
});