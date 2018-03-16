import { 
  FETCH_PICTURES_REQUEST,
  FETCH_PICTURES_SUCCESS,
  FETCH_SINGLE_PICTURE_SUCCESS,
  FETCH_PICTURES_ERROR
} from "../actions/pictures";

const initialState = {
  pictures: [],
  singlePicture: [],
  loading: false,
  error: null
};

export default function pictureReducer(state = initialState, action) {
  if (action.type === FETCH_PICTURES_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if (action.type === FETCH_PICTURES_SUCCESS) {
    return Object.assign({}, state, {
      pictures: action.pictures,
      loading: false,
      error: null
    })
  }
  else if (action.type === FETCH_SINGLE_PICTURE_SUCCESS) {
    return Object.assign({}, state, {
      singlePicture: action.singlePicture,
      loading: false,
      error: null
    })
  }
  else if (action.type === FETCH_PICTURES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  else {
    return state;
  }
};