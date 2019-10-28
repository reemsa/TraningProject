interface State  { 
  IsError: boolean,
  ErrorMsg: string
}

const intialState: State = {
  IsError: false,
  ErrorMsg: ""
}
const AUTH_FAILED = "AUTH_FAILED";

interface ErrorAction {
  type: typeof AUTH_FAILED;
  payLoad: State;
}

export type ErrorActionTypes = ErrorAction;
const ErrorReducer = (state = intialState, action: ErrorActionTypes): State =>
{
  switch (action.type) {
    case AUTH_FAILED:
      return action.payLoad
    default:
      return state
  }
}

export default ErrorReducer