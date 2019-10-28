interface State  { 
  userName: string,
    userImage: string,
    userBio:string,
    userEmail: string,
    flag:boolean
}

const intialState: State = {
    userName: "",
    userImage: "",
    userBio:"",
    userEmail: "",
    flag:false
}
const LOG_IN = "LOG_IN";

interface LogInAction {
  type: typeof LOG_IN;
  payLoad: State;
}

export type LogInActioTypes = LogInAction;
const logInReducer = (state = intialState, action: LogInActioTypes): State =>
{
  switch (action.type) {
    case LOG_IN:
      console.log("inside ")
      console.log(action.payLoad)
      return action.payLoad
    default:
      return state
  }
}

export default logInReducer