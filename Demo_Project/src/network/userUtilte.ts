export const getUser = () => {
	return sessionStorage.getItem('user');
};
export const getUserName = () => {
	return JSON.parse(sessionStorage.getItem('user') as string).username;
};
export const getUserImage = () => {
	return JSON.parse(sessionStorage.getItem('user') as string).image;
};
export const getUserBio = () => {
	return JSON.parse(sessionStorage.getItem('user') as string).bio;
};
export const getUserEmail = () => {
	return JSON.parse(sessionStorage.getItem('user') as string).email;
};
export const isUserLoggedIn = () => {
	if(sessionStorage.getItem('user')=="null"||sessionStorage.getItem('user')==null){
		return false
	}
	return true
}
export const userLogOut=()=>{
	sessionStorage.setItem('user', "null");
}
export const setCurrentUser = (data: any) => {
	sessionStorage.setItem('user', JSON.stringify(data));
};
export const getToken = () => {
	let token = '';
	if (getUser() != null && getUser() != 'null') {
		token = JSON.parse(sessionStorage.getItem('user') as string).token;
	}
	return token;
};
