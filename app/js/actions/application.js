
import * as types from './actionTypes';

export function emailOath(email, password) {
  return {
    type: types.EMAILLOGIN,
    email,
    password
  };
}

export function googleOath() {
  return {
    type: types.GOOGLEOATH
  };
}

export function addMovieSearch() {
  return {
    type: types.addMovieSearch,
  };
}