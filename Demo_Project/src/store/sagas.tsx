"use strict";
import { takeLatest } from 'redux-saga/effects'

import { logInProcessAction } from '../actions/LogInAction' 

function* mySaga()
{
  yield takeLatest("LOG_IN_REQUEST", logInProcessAction);
}

export default mySaga