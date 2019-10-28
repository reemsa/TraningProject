interface IUser
{
    userName: string,
    userImage: string,
    userBio:string,
    userEmail: string,
    flag:boolean
}
export const logInAction = (user: IUser) => ({
    type: 'LOG_IN',
    payLoad: user
});
