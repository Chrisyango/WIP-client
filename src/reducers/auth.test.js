import reducer from './auth';
import {setAuthToken, clearAuth, authRequest, authSuccess, authError} from '../actions/auth';

describe('authReducer', () => {
  const authToken = 'Auth Token'
  const currentState = {
    authToken: null,
    currentUser: null,
    loading: false,
    error: null
  }

  it('Should set the initial state when nothing is passed in', () => {
    const newState = reducer(undefined, {type: 'UNKNOWN'});
    expect(newState).toEqual(currentState);
  });

  it('Should return the current state on an unknown action', () => {
    const newState = reducer(currentState, {type: 'UNKNOWN'});
    expect(newState).toBe(currentState);
  });

  describe('setAuthToken', () => {
    it('Should set auth token', () => {
        const newState = reducer(currentState, setAuthToken(authToken));
        expect(newState).toEqual({
          authToken,
          currentUser: null,
          loading: false,
          error: null
        });
    });
  });

  describe('clearAuth', () => {
    it('Should clear auth token', () => {
        let newState = {
          authToken,
          currentUser: null,
          loading: false,
          error: null
        };
        newState = reducer(currentState, clearAuth());
        expect(newState).toEqual(currentState);
    });
  });

  describe('authRequest', () => {
    it('Should set loading to true', () => {
        const newState = reducer(currentState, authRequest());
        expect(newState).toEqual({
          authToken: null,
          currentUser: null,
          loading: true,
          error: null
        });
    });
  });

  describe('authSuccess', () => {
    it('Should set currentUser to current user', () => {
        const currentUser = 'cyango'
        const newState = reducer(currentState, authSuccess(currentUser));
        expect(newState).toEqual({
          authToken: null,
          currentUser,
          loading: false,
          error: null
        });
    });
  });

  describe('authError', () => {
    it('Should set authError to error', () => {
        const error = 'Error'
        const newState = reducer(currentState, authError(error));
        expect(newState).toEqual({
          authToken: null,
          currentUser: null,
          loading: false,
          error
        });
    });
  });
});