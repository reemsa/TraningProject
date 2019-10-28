"use strict";
import { call, put } from 'redux-saga/effects'
import { axiosPost } from '../network/AXIOS';
import { setCurrentUser, getUserInfo } from '../network/userUtilte';
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN = "LOG_IN";
export type logInActionRequsetTypes = logInActionRequset
export type ErrorMessageActionTypes = ErrorMessageAction
interface IUser
{
    userName: string,
    userImage: string,
    userBio:string,
    userEmail: string,
    flag:boolean
}

interface IBody
{
     user: {
        email: string,
        password: string
    }
}
interface logInActionRequset {
    type: typeof LOG_IN_REQUEST;
    body: IBody;
    endPoint:string
}
interface ErrorMessageAction
{
    IsError: boolean,
    ErrorMsg: string
}
function postRequset(endPoint: string, body: IBody)
{
    return axiosPost(endPoint, body)
} 
export const logInAction = (user: IUser) => ({
    type: 'LOG_IN',
    payLoad: user
});
export const errorMessageAction = (payload:ErrorMessageActionTypes)=> ({
    type:" AUTH_FAILED",
    payLoad: payload
})
export const logInActionRequset = (endPoint:string,body:IBody ) => ({
    type: 'LOG_IN_REQUEST',
    body: body,
    endPoint:endPoint
})
export function* logInProcessAction(action:logInActionRequsetTypes)
{
    console.log("inside listen handler loginhandler")
    try
    {
        const user = yield postRequset(action.endPoint, action.body)
        .then(res =>
        {
            console.log("pass")
            setCurrentUser(res.data.user);
            const payload = getUserInfo()
            window.location.href = "/";
            return { type:LOG_IN , payLoad: payload };
        })
        .catch(err =>
        { console.log("fail")
            const payload = {
            IsError: true,
            ErrorMsg: "email or password are invaild "
            };
            return {
            type: "AUTH_FAILED",
            payLoad: payload
            };
        })
        yield put(user)
    } catch (e)
    {
        console.log(e)
    }
}


